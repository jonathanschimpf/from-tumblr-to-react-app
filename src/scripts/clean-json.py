# scripts/clean-json.py
# USAGE: python3 scripts/clean-json.py src/data/yesteryear.json
import sys, json, re, pathlib

if len(sys.argv) != 2:
    print("Usage: python3 scripts/clean-json.py <path-to-json>")
    sys.exit(1)

p = pathlib.Path(sys.argv[1])
raw = p.read_bytes()

# Strip UTF-8 BOM if present
if raw.startswith(b"\xef\xbb\xbf"):
    raw = raw[3:]

text = raw.decode("utf-8", errors="replace")

# Normalize ugly characters Notes can inject
text = (
    text.replace("“", '"')
    .replace("”", '"')
    .replace("’", "'")
    .replace("‘", "'")
    .replace("‚", "'")
    .replace("‛", "'")
)

# Remove zero-width + BOM-like invisibles + non-breaking spaces
text = re.sub(r"[\u200B-\u200D\uFEFF\u00A0]", " ", text)

# Collapse any accidental double spaces introduced
text = re.sub(r"[ \t]+", " ", text)

# Validate JSON, then pretty-write back without BOM
try:
    data = json.loads(text)
except json.JSONDecodeError as e:
    # Help you find the bad spot
    print("\nJSON parse error:", e)
    # Show a small window around the error position if available
    pos = getattr(e, "pos", None)
    if pos is not None:
        start = max(0, pos - 60)
        end = min(len(text), pos + 60)
        snippet = text[start:end]
        print("\n--- around error ---\n", snippet, "\n--------------------")
    sys.exit(2)


# Optional: ensure strings don’t retain stray invisibles
def scrub(obj):
    if isinstance(obj, str):
        return re.sub(r"[\u200B-\u200D\uFEFF\u00A0]", " ", obj)
    if isinstance(obj, list):
        return [scrub(x) for x in obj]
    if isinstance(obj, dict):
        return {k: scrub(v) for k, v in obj.items()}
    return obj


clean = scrub(data)

p.write_text(json.dumps(clean, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
print(f"Cleaned and validated: {p}")

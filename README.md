<p>&nbsp;</p>

# [From a Tumblr Account to a React App](https://jonathanschimpf.com/)

<p>&nbsp;</p>

![License](https://img.shields.io/static/v1?label=Language&message=JavaScript&color=yellow)
![License](https://img.shields.io/static/v1?label=Library&message=React.js&color=pink)
![License](https://img.shields.io/static/v1?label=Language&message=HTML5&color=orange)
![License](https://img.shields.io/static/v1?label=Language&message=CSS3&color=blue)
![License](https://img.shields.io/static/v1?label=Framework&message=React-Bootstrap&color=green)
![License](https://img.shields.io/static/v1?label=Language&message=Python&color=yellow)

<p>&nbsp;</p>

---

<p>&nbsp;</p>

## ✍️ About This Project

<p>&nbsp;</p>

Data is stored in a `.json` file which holds an array of objects—each representing a photo and its original caption. The media was exported from my Tumblr archive and parsed using custom Python scripts to extract and structure the metadata.

The UI is built in React and uses Infinite Scroll for seamless navigation. A few custom icons enable smooth top/bottom jumping to make browsing an old photo journal more enjoyable.

This site is now continuously deployed using **Netlify** — pushing updates straight from GitHub.

<p>&nbsp;</p>

---

<p>&nbsp;</p>

⚡ Migration to Vite (2025+)
<p>&nbsp;</p>

This project was originally built on Create React App (CRA) in 2023. The foundation was solid and the architecture held up through hundreds of photos, captions, and countless UX tweaks. But in late 2025, it became clear that CRA’s build pipeline and dev server were slowing things down.

The entire project was migrated to Vite, giving it:

A dramatically faster local dev server (instant start-up, instant reloads)

A modern ES module build process

Lighter configuration with less tooling overhead

Faster production builds on Netlify

Cleaner control over the index.html, assets, and preview images

All core functionality stayed intact: the infinite scroll, the Python-generated metadata, the hover interactions, the archive navigation, and your UI flow. Vite simply took an already established system and gave it a faster engine.

The transition required updating the project structure, handling the new index.html root, and ensuring all asset paths (including the public/images/FromTumblrToReact_v2.jpg logo and the new hover “easter egg”) stayed stable in production. Everything now builds and deploys smoothly on Netlify’s 2025+ environment using the updated build image.

Your photo journal runs the same — it just runs faster and is easier to maintain going forward.

<p>&nbsp;</p>

## Credits

<p>&nbsp;</p>

**Third-party assets:**

- [`React.js`](https://reactjs.org/) — A declarative JavaScript library for building user interfaces
- [`React-Bootstrap`](https://react-bootstrap.github.io/) — Bootstrap components rebuilt for React
- [`Bootstrap`](https://getbootstrap.com/) — Open-source CSS framework
- [`GitHub Pages`](https://pages.github.com/) — Former deployment method 🚫
- [`Netlify`](https://www.netlify.com/) — Current deployment platform (CD enabled) ✅

<p>&nbsp;</p>

---

<p>&nbsp;</p>

## Questions?

<p>&nbsp;</p>

Shoot me an email → [jonathan@jonathanschimpf.com](mailto:jonathan@jonathanschimpf.com)

<p>&nbsp;</p>

---

📸 **Preview**  
Photo journal rebuilt from Tumblr → React (2010–2023+)

<p>&nbsp;</p>
<p align="center">
<img src="public/images/READMEPreview.png" alt="Project Preview" width="500" />
</p>

<p>&nbsp;</p>

Migrated from Create React App (2023) → React+Vite in November '25 (2025+)

<p>&nbsp;</p>
<p align="center">
<img src="public/images/READMEPreview_CRA-to-VITE.png" alt="Project Preview" width="500" />
</p>

<p>&nbsp;</p>

## ✍️ README co-authored by a GPT

✨ A GPT helped write this README — because it’s 2025.

<p>&nbsp;</p>

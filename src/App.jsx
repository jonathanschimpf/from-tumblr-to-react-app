// src/App.jsx
import React, { useEffect, useRef, useState } from 'react'

// components
import HeaderQuickConnects from './components/HeaderQuickConnects'
import TumblrToReact from './components/TumblrToReact'
import NavigationIconsHeader from './components/NavigationIconsHeader'
import FromTumblrToReactHeaderImg from './components/FromTumblrToReactHeaderImg/FromTumblrToReactHeaderImg'
import NavigationIconsFooter from './components/NavigationIconsFooter'
import HoverStrangeObservationsReveal from './components/HoverStrangeObservationsReveal'

// If you need animate.css globally, add it once in styles.css via:
// @import 'animate.css/animate.min.css';
const SMOKE_TEST = false

export default function App() {
  const [data, setData] = useState([])
  const [itemRefs, setItemRefs] = useState([])
  const topAnchorRef = useRef(null)

  // Load captions+images from /public
  useEffect(() => {
    const url = `/captions-and-images.json?t=${Date.now()}`
    fetch(url, { cache: 'no-store' })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        return res.json()
      })
      .then((json) => {
        const arr = Array.isArray(json)
          ? json.map((x) => (typeof x === 'string' ? { image: x, caption: '' } : x))
          : []
        setData(arr)
      })
      .catch((err) => console.error('❌ JSON load failed:', err))
  }, [])

  // Keep refs aligned with data length
  useEffect(() => {
    setItemRefs((prev) => {
      const next = new Array(data.length)
      for (let i = 0; i < data.length; i++) next[i] = prev[i] || React.createRef()
      return next
    })
  }, [data.length])

  // Scroll helpers
  const scrollToTop = () => {
    const anchor = topAnchorRef.current
    if (anchor?.scrollIntoView) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    if (typeof window !== 'undefined' && typeof window.scrollTo === 'function') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
  const scrollToBottom = () => itemRefs.at(-1)?.current?.scrollIntoView({ behavior: 'smooth' })
  const scrollToRandom = () => {
    if (!itemRefs.length) return
    const r = Math.floor(Math.random() * itemRefs.length)
    itemRefs[r]?.current?.scrollIntoView({ behavior: 'smooth' })
  }

  if (SMOKE_TEST) {
    return (
      <div style={{ padding: 16, fontFamily: 'system-ui' }}>
        <h1 style={{ margin: 0, fontSize: 18 }}>Smoke test</h1>
        <div style={{ opacity: 0.7, marginTop: 4 }}>items: {data.length}</div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
            gap: 12,
            marginTop: 12
          }}
        >
          {data.slice(0, 24).map((it, i) => (
            <figure key={i} style={{ margin: 0 }}>
              <img
                src={`/${it.image}`}
                alt={it.caption || `img-${i}`}
                style={{ width: '100%', display: 'block' }}
                loading="lazy"
              />
              {it.caption && (
                <figcaption style={{ fontSize: 12, opacity: 0.7, marginTop: 6 }}>
                  {it.caption}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      </div>
    )
  }

  const ready = itemRefs.length === data.length

  return (
    <div className="App">
      <div ref={topAnchorRef} aria-hidden="true" />
      <HeaderQuickConnects />

      <NavigationIconsHeader
        onGoToBottom={scrollToBottom}
        onRandomSelect={scrollToRandom}
      />

      <FromTumblrToReactHeaderImg />
      <HoverStrangeObservationsReveal />

      {ready ? (
        <TumblrToReact
          data={data}
          itemRefs={itemRefs}
          onScrollToTop={scrollToTop}
        />
      ) : (
        <div style={{ padding: 16 }}>Loading images…</div>
      )}

      <NavigationIconsFooter
        onGoToTop={scrollToTop}
        onRandomSelect={scrollToRandom}
      />
    </div>
  )
}

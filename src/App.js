import "./App.css";
import React, { useState, useEffect } from "react";
import "animate.css";
import HeaderQuickConnects from "./components/HeaderQuickConnects";
import TumblrToReact from "./components/TumblrToReact";
import NavigationIconsHeader from "./components/NavigationIconsHeader";
import FromTumblrToReactHeaderImg from "./components/FromTumblrToReactHeaderImg/FromTumblrToReactHeaderImg";
import NavigationIconsFooter from "./components/NavigationIconsFooter";
import HoverStrangeObservationsReveal from "./components/HoverStrangeObservationsReveal";

function App() {
  const [data, setData] = useState([]);
  const [itemRefs, setItemRefs] = useState([]);

  useEffect(() => {
    const timestamp = new Date().getTime();
    const jsonPath = `/captions-and-images.json?t=${timestamp}`;
    console.log("📸 Fetching JSON from:", jsonPath);

    fetch(jsonPath, { cache: "no-store" }) // ⬅ important: bypass cache
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((json) => {
        console.log("✅ JSON loaded, entries:", json.length);
        setData(json);
        setItemRefs(json.map(() => React.createRef()));
      })
      .catch((err) => {
        console.error("❌ Failed to load JSON:", err);
      });
  }, []);

  const scrollToTop = () => {
    if (itemRefs[0]?.current) {
      itemRefs[0].current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToBottom = () => {
    const lastItemIndex = itemRefs.length - 1;
    if (itemRefs[lastItemIndex]?.current) {
      itemRefs[lastItemIndex].current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToRandom = () => {
    const randomIndex = Math.floor(Math.random() * itemRefs.length);
    if (itemRefs[randomIndex]?.current) {
      itemRefs[randomIndex].current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="App">
      <HeaderQuickConnects />
      <NavigationIconsHeader
        onGoToBottom={scrollToBottom}
        onRandomSelect={scrollToRandom}
      />
      <FromTumblrToReactHeaderImg />
      <HoverStrangeObservationsReveal />
      <TumblrToReact data={data} itemRefs={itemRefs} />
      <NavigationIconsFooter
        onGoToTop={scrollToTop}
        onRandomSelect={scrollToRandom}
      />
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";

const Hello = () => {
  // console.log(document.readyState, "Doc js 1");
  const [playAnimation, setPlayAnimation] = useState(false);

  useEffect(() => {
    const onPageLoad = () => {
      setPlayAnimation(true);
    };

    // Check if the page has already loaded
    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);

  return (
    <div>{!playAnimation ? <span className="loader"></span> : <p>Hello</p>}</div>
  );
};

export default Hello;

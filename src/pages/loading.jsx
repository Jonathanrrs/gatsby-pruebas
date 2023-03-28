import React from "react";

const Loading = () => {
  console.log(document.readyState, "Doc js");

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <span class="loader"></span>
    </div>
  );
};

export default Loading;

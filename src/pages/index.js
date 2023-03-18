import * as React from "react";
import "../styles/global.css";
const IndexPage = () => {
  return (
    <main className="container">
      <h1>
        Congratulations
        <br />
        <span>— you just made a Gatsby site! 🎉🎉🎉</span>
        {/* /pokemon /.netlify/functions/index 200! */}
      </h1>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;

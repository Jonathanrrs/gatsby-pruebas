import React from "react";
import { Helmet } from "react-helmet";

const Pokemon = ({ serverData }) => {
  console.log(document.readyState, "Doc js");

  return (
    <div>
      <Helmet>
        <title>Pokemon</title>
        <meta name="description" content={serverData.name} />
        <meta
          property="og:image"
          content="https://myfirstgatsbysitemaster63551.gatsbyjs.io/Background.png"
        />
      </Helmet>
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Welcome</h1>
        <h1>Nueva página Pokemon</h1>
        <h1>{serverData.name}</h1>
        <p>ID: {serverData.id}</p>
        <b>Peso: ${serverData.height}</b>
      </div>
      {/* <img src="./Background.png" alt="Background" /> */}
      {/* /* /index.html 200 */}
    </div>
  );
};

export default Pokemon;

export async function getServerData() {
  try {
    const data = await fetch("https://pokeapi.co/api/v2/pokemon/raichu");
    const dataToJson = await data.json();
    return {
      props: dataToJson,
      status: 200,
    };
  } catch (error) {
    console.log(error);
  }
}

// import React from "react";
import "../style/style.css";
import React, { useState, useEffect } from "react";

// Remember that this button will redirect to localhost8080/signUp

export function BoredButton() {
  const [mood, setMood] = useState([]);

  const boredFace = ": |";

  //this map method is not working right now or rendering to the screen
  const emotionResponse = mood.map((emotions) => (
    <li key={emotions._id}>
      {emotions.emotions}
      <br />
      <button>Add A Review</button>
    </li>
  ));

  console.log(emotionResponse);

  return (
    <button
      className="BoredButton"
      // bring thing data base

      // communicate with the server
      // with a get request
      onClick={() => {
        fetch("/boredButton")
          .then((response) => response.json())
          .then((json) => console.log(json))
          .then((bla) => setMood((a) => emotionResponse))
          .then(console.log(emotionResponse));
      }}
    >
      {boredFace}
      {emotionResponse}
    </button>
  );
}

export function HappyButton() {
  const happyFace = ": )";

  return (
    <button
      className="HappyButton"
      // When user clicks this, give the user the html page (On click will do a get request to the server)
      onClick={() =>
        alert(
          "Go and share your joy with others (maybe help someone with a problem)!"
        )
      }
    >
      {happyFace}
    </button>
  );
}

export function AngryButton() {
  const angryFace = ">: (";

  return (
    <button
      className="AngryButton"
      // When user clicks this, give the user the html page (On click will do a get request to the server)
      onClick={() =>
        alert(
          "Take some deep breaths, turn on <this playlist> and go for a walk"
        )
      }
    >
      {angryFace}
    </button>
  );
}

export function SadButton() {
  const sadFace = ": (";

  return (
    <button
      className="SadButton"
      // When user clicks this, give the user the html page (On click will do a get request to the server)
      onClick={() =>
        alert("Go outside and find some space to stare at the sky")
      }
    >
      {sadFace}
    </button>
  );
}

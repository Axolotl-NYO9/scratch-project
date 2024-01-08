import React from 'react';
import "../style/style.css"

// Remember that this button will redirect to localhost8080/signUp

export function BoredButton() {

    const boredFace = ": |";

    return (
     <button 
     className='BoredButton'
    // bring thing data base

    // communicate with the server 
        // with a get request
    onClick={() => {
        fetch("/boredButton")
        .then((response) => response.json())
        .then((json) => console.log(json));

    }}
     >
             { boredFace }
     </button>
 )
};


export function HappyButton() {

    const happyFace = ": )"

    return (
     <button 
     className='HappyButton'
     // When user clicks this, give the user the html page (On click will do a get request to the server)
     onClick={() => alert('Going to sign up for Energy Life Pakage! (Page Loading...)')}
     >
             { happyFace }
     </button>
 )
};

export function AngryButton() {

    const angryFace = ">: ("

    return (
     <button 
     className='AngryButton'
     // When user clicks this, give the user the html page (On click will do a get request to the server)
     onClick={() => alert('Going to sign up for Energy Life Pakage! (Page Loading...)')}
     >
             { angryFace }
     </button>
 )
};

export function SadButton() {

    const sadFace = ": ("

    return (
     <button 
     className='SadButton'
     // When user clicks this, give the user the html page (On click will do a get request to the server)
     onClick={() => alert('Going to sign up for Energy Life Pakage! (Page Loading...)')}
     >
             { sadFace }
     </button>
 )
};



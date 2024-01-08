//import react and react-dom
import React from "react";
import {render} from "react-dom";
import { createRoot } from 'react-dom/client'
import App from "./components/App.jsx";

//continue here.. 



//render here
// console.log(document.getElementById())
// render (
//     <App />,
//     document.getElementById('root')
// )

// console.log('document:', document);
// const domNode = document.querySelector("#root");
const domNode = document.getElementById("root");
// console.log(domNode);
const root = createRoot(domNode);

root.render(
    <>
        <App />
    </>
)
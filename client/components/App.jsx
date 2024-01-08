//import react and react-dom
import React from "react";
import {render} from "react-dom";
import { BoredButton } from "./EmotionsButtons.jsx"
import { HappyButton } from "./EmotionsButtons.jsx"
import { AngryButton } from "./EmotionsButtons.jsx"
import { SadButton } from "./EmotionsButtons.jsx"




//continue here.. 
const App = () => {
    // return <h1>hello world</h1>

    return (
        <div className="app">
            <h1>Challenge Booster</h1>
            <div className="buttons">
                <BoredButton />
                <HappyButton />
                <AngryButton />
                <SadButton />
            </div>

        </div>
    )

}

export default App;
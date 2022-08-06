import React from "react";
import { useState } from "react";
import CompanyForm from "./CompanyForm";
import GameForm from "./Gameform";
import SubForm from "./SubForm";

function Forms(){
    const [showCom, setShowCom] = useState(false);
    const [showSub, setShowSub] = useState(false);
    const [showGame, setShowGame] = useState(false);

    return ( 
        <div>
            <button onClick={() => setShowCom(!showCom)}>Add Company</button>
            {showCom ? <CompanyForm/> : null}
            <button onClick={() => setShowSub(!showSub)}>Add Subsidiary</button>
            {showSub ? <SubForm/> : null}
            <button onClick={() => setShowGame(!showGame)}>Add Game</button>
            {showGame ? <GameForm/> : null}
            
        </div>
    )
}

export default Forms;
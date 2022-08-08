import React from "react";
import { useState } from "react";
import CompanyForm from "./CompanyForm";
import GameForm from "./Gameform";
import SubForm from "./SubForm";

function Form(){
    const [showCom, setShowCom] = useState(false);
    const [showSub, setShowSub] = useState(false);
    const [showGame, setShowGame] = useState(false);



    return ( 
        <div>
            <div className="forms">
            <button onClick={() => setShowCom(!showCom)}>{showCom ? "X" : "Add Company" }</button>
            {showCom ? <CompanyForm/> : null}
            </div>
            <div className="forms">
            <button onClick={() => setShowSub(!showSub)}>{showSub ? "X" : "Add Subsidiary" }</button>
            {showSub ? <SubForm/> : null}
            </div>
            <div className="forms">
            <button onClick={() => setShowGame(!showGame)}>{showGame ? "X" : "Add Game" }</button>
            {showGame ? <GameForm/> : null}
            </div>
        </div>
    )
}

export default Form;
import React, { useState }  from "react";
import CompanyForm from "./CompanyForm";
import SubsidiaryForm from "./SubsidiaryForm";
import GameForm from "./GameForm";

function Form({coms, setComs}){
    const [showCom, setShowCom] = useState(false);
    const [showSub, setShowSub] = useState(false);
    const [showGame, setShowGame] = useState(false);
    const [formData, setFormData] = useState({
        name:"",
        est:"",
        net_worth:"",
        subName:"",
        subNet:"",
        subEst:"",
        company_id:"",
        title:"",
        released:"",
        sub_id:""

    })





    return ( 
        <div>
            <section>
                    <div className="forms">
                            <button onClick={() => setShowCom(!showCom)}>{showCom ? "X" : "Add Company" }</button>
                            {showCom ? <CompanyForm coms={coms} setComs={setComs} /> : null}
                    </div>
                    <div className="forms">
                            <button onClick={() => setShowSub(!showSub)}>{showSub ? "X" : "Add Subsidiary" }</button>
                            {showSub ? <SubsidiaryForm coms={coms} setComs={setComs} formData={formData} /> : null}
                    </div>
                    <div className="forms">
                            <button onClick={() => setShowGame(!showGame)}>{showGame ? "X" : "Add Game" }</button>
                            {showGame ? <GameForm coms={coms} setComs={setComs} /> : null}
                    </div>
            </section>
        </div>
    )
}

export default Form;
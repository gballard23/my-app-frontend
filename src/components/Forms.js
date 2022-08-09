import React, { useState }  from "react";
import CompanyForm from "./CompanyForm";
import GameForm from "./Gameform";
import SubForm from "./SubForm";

function Form({coms, setComs}){
    const [showCom, setShowCom] = useState(false);
    const [showSub, setShowSub] = useState(false);
    const [showGame, setShowGame] = useState(false);
    const [submit, setSubmit] = useState(false);
    const [ formData, setFormData ] = useState({
        name:"",
        est:"",
        net_worth:"",
        subname:"",
        subNet:"",
        subEst:"",
        company_id:"",
        title:"",
        released:"",
        sub_id:""

    })

    function handleChange(event){
        setFormData({
            ...formData, 
            [event.target.name]: event.target.value,
        })
    }

    function handleForm(e){
        e.preventDefault();
        fetch('http://localhost:9292', {
            method: "POST",
            headers: {
                "Content-type" : "application/json",
            },
            body: JSON.stringify(
                {
                    name:formData.name,
                    established:formData.est,
                    net_worth:formData.net_worth,
                    subsidiaries: {
                        name:formData.subname,
                        net_worth:formData.subNet,
                        established:formData.subEst,
                        company_id:formData.company_id,
                        games: {
                            title:formData.title,
                            released: formData.released,
                            subsidiary_id:formData.sub_id,
                        }
                    }

                })
        })
        .then((r) => r.json())
        .then((com) => setComs([...coms, com]))
    }

    return ( 
        <div className={ submit ? "submitted" : "notsub"}>
            <section>
                <form onSubmit={handleForm}>
                    <div className="forms">
                            <button onClick={() => setShowCom(!showCom)}>{showCom ? "X" : "Add Company" }</button>
                            {showCom ? <CompanyForm handleChange={handleChange} formData={formData}/> : null}
                    </div>
                    <div className="forms">
                            <button onClick={() => setShowSub(!showSub)}>{showSub ? "X" : "Add Subsidiary" }</button>
                            {showSub ? <SubForm  handleChange={handleChange} formData={formData} coms={coms} /> : null}
                    </div>
                    <div className="forms">
                            <button onClick={() => setShowGame(!showGame)}>{showGame ? "X" : "Add Game" }</button>
                            {showGame ? <GameForm handleChange={handleChange} formData={formData} coms={coms} /> : null}
                    </div>
                    <button onClick={() => setSubmit(!submit)} type="submit">Submit</button>
                </form>    
            </section>
        </div>
    )
}

export default Form;
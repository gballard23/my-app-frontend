import React, { useState } from "react";


function CompanyForm({coms, setComs}){

    const [formData, setFormData] = useState({
        name:"",
        est:"",
        net_worth:"",

    })
    
    function handleChange(event){
        setFormData({
            ...formData, 
            [event.target.name]: event.target.value,
        })
    }

    function handleSubmit(e){
        e.preventDefault();
        fetch("http://localhost:9292/companies", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify(
                {
                    name:formData.name,
                    established:formData.est,
                    net_worth:formData.net_worth,

                })
        })
        .then((r) => r.json())
        .then((com) => setComs([...coms, com]))
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <h2>Company Form</h2>
                    <div>
                        <label>
                            Company Name:
                                <input
                                type="text"
                                name="comsName"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Year Established:
                                <input
                                type="text"
                                name="comsEst"
                                value={formData.est}
                                onChange={handleChange}
                                />
                        </label>
                    </div>
                    <div>
                        <label>
                            Net Worth:
                                <input
                                type="text"
                                name="comsNet"
                                value={formData.net_worth}
                                onChange={handleChange}
                                />
                        </label>
                    </div>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default CompanyForm;
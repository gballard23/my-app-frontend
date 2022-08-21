import React, { useState } from "react";

function SubsidiaryForm({ coms, setComs }){

    const [formData, setFormData] = useState({
        subName:"",
        subNet:"",
        subEst:"",
        company_id:"",

    })

    //comsId: Obtains the IDs of the parent companies by name but uses the id as its value stored in the server for the subsidiary using map
    const comsId = coms.map((x) => (<option key={x.id} value={x.id}>{x.name}</option>))

    function handleChange(event){

        setFormData({
            ...formData, 
            [event.target.name]: event.target.value,
        })
    }

    function handleSubmit(e){
        e.preventDefault();
        fetch("http://localhost:9292/subsidiaries", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify(
                {
                        name:formData.subName,
                        net_worth:formData.subNet,
                        established:formData.subEst,
                        company_id:formData.company_id,
                })
        })
        .then((r) => r.json())
        .then((com) => setComs([...coms, com]))
    }


    return(
        <div>
            <form onSubmit={handleSubmit} >
                <div>
                    <h2>Subsidiary Form</h2>
                    <div>
                        <label>
                            Subsidiary Name:
                                <input
                                type="text"
                                name="subName"
                                value={formData.subName}
                                onChange={handleChange}
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Year Established:
                                <input
                                type="text"
                                name="subYear"
                                value={formData.subEst}
                                onChange={handleChange}
                                />
                        </label>
                    </div>
                    <div>
                        <label>
                            Net Worth:
                                <input
                                type="text"
                                name="subNet"
                                value={formData.subNet}
                                onChange={handleChange}
                                />
                        </label>
                    </div>    
                    <div>
                        <label>
                            Parent Company: 
                                <select type="text" name="comsId" value={formData.company_id} onChange={handleChange}>
                                    {comsId}
                                </select>
                        </label>
                    </div>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default SubsidiaryForm;
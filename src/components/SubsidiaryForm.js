import React, { useState } from "react";

function SubsidiaryForm({ coms, setComs }){
    const [ subName, setSubName ] = useState("");
    const [ subNet, setSubNet ] = useState(0);
    const [ subEst, setSubEst ] = useState(0);
    const [ comId, setComId ] = useState(0);
    //comsId: Obtains the IDs of the parent companies by name but uses the id as its value stored in the server for the subsidiary using map
    const comsId = coms.map((x) => (<option key={x.id} value={x.id}>{x.name}</option>))

    function handleNameChange(event){
        setSubName(event.target.value)
    }

    function handleNetChange(event){
        setSubNet(event.target.value)
    }

    function handleEstChange(event){
        setSubEst(event.target.value)
    }

    function handleIdChange(event){
        setComId(event.target.value)
    }

       


    function handleSubmit(e){
        e.preventDefault();
        const formData = {
            name: subName,
            net_worth: subNet,
            established: subEst,
            company_id: comId,
        };

        fetch("http://localhost:9292/subsidiaries", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify(formData)
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
                                value={subName}
                                onChange={handleNameChange}
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Year Established:
                                <input
                                type="text"
                                name="subYear"
                                value={subEst}
                                onChange={handleEstChange}
                                />
                        </label>
                    </div>
                    <div>
                        <label>
                            Net Worth:
                                <input
                                type="text"
                                name="subNet"
                                value={subNet}
                                onChange={handleNetChange}
                                />
                        </label>
                    </div>    
                    <div>
                        <label>
                            Parent Company: 
                                <select type="text" name="comsId" value={comId} onChange={handleIdChange}>
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
import React, { useState } from "react";

function SubForm({ coms, setComs, change }){
    const [ name, setName ] = useState("");
    const [ net, setNet ] = useState(0);
    const [ est, setEst ] = useState(0);
    const [ id, setId ] = useState(0);
    //comsId: Obtains the IDs of the parent companies by name but uses the id as its value stored in the server for the subsidiary using map
    const comsId = coms.map((x) => (<option key={x.id} value={x.id}>{x.name}</option>))

    function handleNameChange(event){
        setName(event.target.value)
    }

    function handleNetChange(event){
        setNet(event.target.value)
    }

    function handleEstChange(event){
        setEst(event.target.value)
    }

    function handleIdChange(event){
        setId(event.target.value)
    }

       


    function handleSubmit(e){
        e.preventDefault();
        const formData = {
            name: name,
            net_worth: net,
            established: est,
            company_id: id,
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
        change()
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
                                name="name"
                                value={name}
                                onChange={handleNameChange}
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Year Established:
                                <input
                                type="text"
                                name="est"
                                value={est}
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
                                value={net}
                                onChange={handleNetChange}
                                />
                        </label>
                    </div>    
                    <div>
                        <label>
                            Parent Company: 
                                <select name="id" value={id} onChange={handleIdChange}>
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

export default SubForm;
import React, { useState } from "react";


function ComForm({coms, setComs, change}){
    const [ name, setName ] = useState("");
    const [ est, setEst ] = useState(0);
    const [ net, setNet ] = useState(0);

    
    function handleNameChange(event){
        setName(event.target.value)
    }

    function handleEstChange(event){
        setEst(event.target.value)
    }

    function handleNetChange(event){
        setNet(event.target.value)
    }

    function handleSubmit(e){
        e.preventDefault();
        const formData = {
            name: name,
            established: est,
            net_worth: net,

        }

        fetch("http://localhost:9292/companies", {
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
            <form onSubmit={handleSubmit}>
                <div>
                    <h2>Company Form</h2>
                    <div>
                        <label>
                            Company Name:
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
                                name="net"
                                value={net}
                                onChange={handleNetChange}
                                />
                        </label>
                    </div>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default ComForm;
import React, {useState } from "react";

function SubForm({subs, setSubs, coms, change}){
    const [ name, setName ] = useState("");
    const [ est, setEst ] = useState(0);
    const [ net, setNet ] = useState(0);
    const [ comp, setComp ] = useState(0);

    
    
    function handleNameChange(event){
        setName(event.target.value)
    }

    function handleEstChange(event){
        setEst(event.target.value)
    }

    function handleNetChange(event){
        setNet(event.target.value)
    }

    function handleCompChange(event){
        setComp(event.target.value)
    }

    function handleSubmit(e){
        e.preventDefault();
        const formData = {
            name: name,
            net_worth: net,
            established: est,
            company_id: comp, 

        }

        fetch("http://localhost:9292/subsidiaries", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify(formData)
        })
        .then((r) => r.json())
        .then((sub) => setSubs([...subs[comp - 1].subsidiaries, sub]))
        change()
    }
    return(
        <div>
<form onSubmit={handleSubmit}>
                <div>
                    <h2>Subsidiary Form</h2>
                    <div>
                        <label>
                             Name:
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
                            Net Worth:
                                <input
                                type="text"
                                name="net"
                                value={net}
                                onChange={handleNetChange}
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
                            Parent Company:
                            <select name="parent" value={comp} onChange={handleCompChange}>
                            {coms.map((x) => (<option key={x.id} value={x.id}>{x.name}</option>))}
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
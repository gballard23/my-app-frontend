import React, { useState } from "react";

function GameForm({coms, setComs, change}){
    const [ title, setTitle ] = useState("");
    const [ released, setReleased ] = useState(0);
    const [ id, setId ] = useState(0);

    const subs = coms.map((x) => (x.subsidiaries));
    const subsArr = subs.flat();

    const allSubsId = subsArr.map((x) => (<option key={x.id} value={x.id}>{x.name}</option>))
    

    function handleTitleChange(event){
        setTitle(event.target.value)
    }

    function handleReleaseChange(event){
        setReleased(event.target.value)
    }

    function handleIdChange(event){
        setId(event.target.value)
    }

    function handleSubmit(e){
        e.preventDefault();

        const formData = {
            title: title,
            released: released,
            subsidiary_id: id,
        }


        fetch("http://localhost:9292/games", {
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
                    <h1>Games</h1>
                    <div>
                        <div>
                            <label>
                                Game Title: 
                                    <input
                                    type="text"
                                    name="title"
                                    value={title}
                                    onChange={handleTitleChange}
                                    />
                            </label>
                        </div>
                        <div>
                            <label>
                                Year Released: 
                                    <input
                                    type="text"
                                    name="released"
                                    value={released}
                                    onChange={handleReleaseChange}
                                    />
                            </label>
                        </div>
                        <div>
                            <label>
                                    Developer: 
                                        <select name="dev" value={id} onChange={handleIdChange}>
                                            {allSubsId}
                                        </select>       
                            </label>
                        </div>
                    </div>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default GameForm;
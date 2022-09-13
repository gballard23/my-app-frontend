import React, { useState } from "react";

function GameForm({ games, setGames, ops, change}){
    const [ title, setTitle ] = useState("");
    const [ release, setRelease ] = useState(0);
    const [ dev, setDev ] = useState(0);

    function handleTitleChange(event){
        setTitle(event.target.value)
    }

    function handleReleaseChange(event){
        setRelease(event.target.value)
    }

    function handleDevChange(event){
        setDev(event.target.value)
    }

    function handleSubmit(e){
        e.preventDefault();
        const formData = {
            title: title,
            released: release,
            subsidiary_id: dev,
        }

        fetch("http://localhost:9292/games", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify(formData)
        })
        .then((r) => r.json())
        .then((game) => setGames([...games, game]))
        change()
    }
    return(
        <div>
<form onSubmit={handleSubmit}>
                <div>
                    <h2>Game Form</h2>
                    <div>
                        <label>
                             Title:
                                <input
                                type="text"
                                name="name"
                                value={title}
                                onChange={handleTitleChange}
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Released:
                                <input
                                type="text"
                                name="released"
                                value={release}
                                onChange={handleReleaseChange}
                                />
                        </label>
                    </div>
                    <div>
                        <label>
                            Developer:
                            <select name="parent" value={dev} onChange={handleDevChange}>
                            {ops.map((x) => (<option key={x.id} value={x.id}>{x.name}</option>))}
                            </select>
                        </label>
                    </div>
                </div>
                <button type="submit">Submit</button>
            </form>

        </div>
    )
}

export default GameForm;
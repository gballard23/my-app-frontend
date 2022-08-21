import React, { useState } from "react";

function GameForm({coms, setComs}){

    const [formData, setFormData] = useState({
        title:"",
        released:"",
        sub_id:""

    })

    //subs & subsArr: obtains the subsidiaries to then use flat() to combine the array of objects.
    const subs = coms.map((x) => (x.subsidiaries));
    const subsArr = subs.flat();
    console.log(subsArr)

    //subId & newSubId: Does the same as comsId & newComsId but for games 
    const subId = subsArr.map((x) => (<option key={x.id} value={x.id}>{x.name}</option>))
    console.log(subId)

    function handleChange(event){
        setFormData({
            ...formData, 
            [event.target.name]: event.target.value,
        })
    }

    function handleSubmit(e){
        e.preventDefault();
        fetch("http://localhost:9292/games", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify(
                {
                            title:formData.title,
                            released: formData.released,
                            subsidiary_id:formData.sub_id,

                })
        })
        .then((r) => r.json())
        .then((com) => setComs([...coms, com]))
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <h1>Games</h1>
                    <div>
                        <label>
                            <div>
                                Game Title: 
                                    <input
                                    type="text"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    />
                            </div>
                        </label>
                        <label>
                            <div>
                                Year Released: 
                                    <input
                                    type="text"
                                    name="released"
                                    value={formData.released}
                                    onChange={handleChange}
                                    />
                            </div>
                        </label>
                        <div>
                            <label>
                                    Developer: 
                                        <select name="dev" value={formData.sub_id} onChange={handleChange}>
                                            {subId}
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
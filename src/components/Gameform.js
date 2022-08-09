import React from "react";

function GameForm({handleChange, formData}){
    return(
        <div>
            <h1>Games</h1>
            <div>
                <label>
                    <div>
                        Game Title: 
                            <input
                            type="text"
                            name="name"
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
                            name="name"
                            value={formData.released}
                            onChange={handleChange}
                            />
                    </div>
                </label>
                <label>
                    <div>
                        Developer: 
                            <input
                            type="text"
                            name="name"
                            value={formData.sub_id}
                            onChange={handleChange}
                            />
                    </div>
                </label>
            </div>
        </div>
    )
}

export default GameForm;
import React from "react";

function SubForm({handleChange, formData, coms}){

    const comsId = coms.map((x) => (<option value={x.id}>{x.name}</option>))
    console.log(comsId)
    
    const newComsId = <option value={coms.length + 1}>none</option>

    

    return(
        <div>
            <h2>Subsidiary Form</h2>
            <div>
                <label>
                    Subsidiary Name:
                        <input
                        type="text"
                        name="name"
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
                        name="name"
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
                        name="name"
                        value={formData.subNet}
                        onChange={handleChange}
                        />
                </label>
            </div>    
            <div>
                <label>
                    Parent Company: 
                        <select type="text" name="name" value={formData.company_id} onChange={handleChange}>
                            {comsId}
                            {newComsId}
                        </select>
                </label>
            </div>
        </div>
    )
}

export default SubForm;
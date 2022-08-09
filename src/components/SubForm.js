import React from "react";

function SubForm({handleChange, formData}){
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
                        <input
                        type="text"
                        name="name"
                        value={formData.company_id}
                        onChange={handleChange}
                        />
                </label>
            </div>
        </div>
    )
}

export default SubForm;
import React from "react";

function CompanyForm({ handleChange, formData }){


    return(
        <div>
            <h2>Company Form</h2>
            <div>
                <label>
                    Company Name:
                        <input
                        type="text"
                        name="name"
                        value={formData.name}
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
                        value={formData.est}
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
                        value={formData.net_worth}
                        onChange={handleChange}
                        />
                </label>
            </div>
        </div>
    )
}

export default CompanyForm;
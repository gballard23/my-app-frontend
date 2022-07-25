import React from "react";
import CompanyCard from "./CompanyCard";

function CompanyList({coms}){

    return (
        <div>
            {coms.map((com) => (
        <CompanyCard key={com.id} coms={com}/>
      ))}
        </div>
    )
    
}

export default CompanyList;
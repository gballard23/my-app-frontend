import React from "react";
import SubCard from "./SubCard";

function SubsidiaryList({subs}){

    const allSubs = subs.map((x) => (x.subsidiaries)); 
   
    const listOfSubs = allSubs.flat()
    

    
    return (
        <div>
            {listOfSubs?.map((x, i) => ( 
                <SubCard key={i} subs={x} coms={subs}/>
            ))}
        </div>

    )
}

export default SubsidiaryList;
import React from "react";
import SubCard from "./SubCard";

function SubsidiaryList({subs}){
    console.log(subs)

    const allSubs = subs.map((x) => (x.subsidiaries)); 
    console.log(allSubs)

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
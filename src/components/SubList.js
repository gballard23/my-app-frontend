import React from "react";
import SubCard from "./SubCard";


function SubList({subs, coms}){
    console.log(subs)

    return (
        <div>
            {subs?.map((x, i) => ( 
                <SubCard key={i} subs={x} coms={coms.filter((c) => (c.id === x?.company_id))}/>
            ))}
        </div>

    )
}

export default SubList;
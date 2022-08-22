import React from "react";
import ComCard from "./ComCard";

function ComList({coms}){

    return (
        <div>
            {coms.map((com) => (
        <ComCard key={com.id} coms={com}/>
      ))}
        </div>
    )
    
}

export default ComList;
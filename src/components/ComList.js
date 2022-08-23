import React from "react";
import ComCard from "./ComCard";

function ComList({coms, setComs}){


    function handleDeleteCom(deletedCom) {
        const updatedComs = coms.filter((c) => c.id !== deletedCom.id);
        setComs(updatedComs);
      }
    
      
    return (
        <div>
            {coms.map((com) => (
        <ComCard key={com.id} coms={com} onDeleteCom={handleDeleteCom}/>
      ))}
        </div>
    )
    
}

export default ComList;
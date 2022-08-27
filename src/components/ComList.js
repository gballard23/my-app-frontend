import React from "react";
import ComCard from "./ComCard";

function ComList({coms, setComs}){
 console.log(coms)
    function handleDeleteCom(deletedCom) {
        let updatedComs = coms.filter((c) => c.id !== deletedCom.id);
        setComs(updatedComs);
      }

      function handleUpdate(updatedItem) {
        let updatedItems = coms.map((item) => {
          if (item.id === updatedItem.id) {
            return updatedItem;
          } else {
            return item;
          }
        });
        console.log(updatedItem)
        setComs(updatedItems);
      }

    return (
        <div>
            {coms.map((com) => (
        <ComCard 
        key={com.id} 
        coms={com} 
        onDeleteCom={handleDeleteCom}
        onUpdate={handleUpdate}
         />
      ))}
        </div>
    )
    
}

export default ComList;
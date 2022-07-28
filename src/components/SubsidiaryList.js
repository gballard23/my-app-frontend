import React from "react";
import SubCard from "./SubCard";

function SubsidiaryList({subs}){
    console.log(subs)

    const allSubs = subs.map((x) => (x.subsidiaries)); 
    console.log(allSubs)

    const sub1 = allSubs[0]
    const sub2 = allSubs[1]


    const merge = (y, z = 6) => {
        for(let i = 0; i < z.length; i++){
            y.push(z[i])
        }
        return y
    }

  const listOfSubs = merge(sub2, sub1)

  

   

    
    return (
        <div>
            {listOfSubs?.map((x, i) => ( 
                <SubCard key={i} subs={x} coms={subs}/>
            ))}
        </div>

    )
}

export default SubsidiaryList;
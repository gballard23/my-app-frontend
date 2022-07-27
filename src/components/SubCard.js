import React from "react";

function SubCard({subs, coms}){
    console.log(subs)
    

    return(
        <div className="subcard">
            <h1><strong>{subs.name}</strong></h1>
            <div>
                <h3>net_worth:{subs.net_worth}</h3>
            </div>
           

        </div>
    )

}

export default SubCard;
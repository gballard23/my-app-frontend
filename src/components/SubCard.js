import React from "react";

function SubCard({subs, coms}){

    const comId = coms.map((x)=>(x))

    const i = subs.company_id - 1;
  
    return(
        <div className="subcard">
            <h1><strong>{subs.name}</strong></h1>
            <div>
                <h3>est.{subs.established}</h3>
            </div>
            <div>
                <ul>
                    <li><strong>Net Worth: {subs.net_worth}</strong></li>
                    <li><strong>Games: {subs.games.length}</strong></li>
                    <li><strong>Parent Company: {comId[i].name}</strong></li>
                </ul>
            </div>
           

        </div>
    )

}

export default SubCard;
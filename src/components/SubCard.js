import React from "react";

function SubCard({subs, coms}){

    const parentCom = coms.filter((x) => (x.id === subs.company_id ))

    const parentName = parentCom.map((x) => (x.name));
  
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
                    <li><strong>Parent Company: {parentName}</strong></li>
                </ul>
            </div>
           

        </div>
    )

}

export default SubCard;
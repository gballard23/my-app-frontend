import React from "react";

function SubCard({subs, coms, games}){
   
    const gamesOfSubs = games.filter((x) => (x.subsidiary_id === subs.id))

   
    return(
        <div className="subcard">
            <h1><strong>{subs.name}</strong></h1>
            <div>
                <h3>est.{subs.established}</h3>
            </div>
            <div>
                <ul>
                    <li><strong>Net Worth: {subs.net_worth}</strong></li>
                    <li><strong>Games: {gamesOfSubs.length}</strong></li>
                    <li><strong>Parent Company: {coms.map((x) => (x.name))}</strong></li>
                </ul>
            </div>
           

        </div>
    )

}

export default SubCard;
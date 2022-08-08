import React from "react";

function CompanyCard({coms}){

    const subs = coms.subsidiaries.map((num) => (num.games))
    console.log(subs)

    const totalSumOfGames = subs.flat()

    return (
        <div className="list">
            <h1 className="companyname"><strong>{coms.name}</strong></h1>
            <div>
                <h3>Est.{coms.established}</h3>
                <div id="comatt">
                    <ul>   
                      <li><h5>Net Worth: {coms.net_worth} Billion</h5></li> 
                      <li><h5>Subsidiaries: {coms.subsidiaries.length}</h5></li> 
                      <li><h5>Games: {totalSumOfGames.length} </h5></li> 
                    </ul>    
                </div>
            </div>
        </div>

    )
}

export default CompanyCard;
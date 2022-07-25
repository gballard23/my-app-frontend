import React from "react";

function CompanyCard({coms}){

    const subs = coms.subsidiaries.map((num) => (num.games))

    const numOfGames = subs.map((num) => (num.length))

    const totalSumOfGames = numOfGames.reduce((accumulator, value) => {
        return accumulator + value;
    }, 0) 

    return (
        <div className="list">
            <h1 className="companyname"><strong>{coms.name}</strong></h1>
            <div>
                <h5>Est.{coms.established}</h5>
                <h5>Net Worth: {coms.net_worth} billion</h5>
                <h5>Subsidiaries: {coms.subsidiaries.length}</h5>
                <h5>Games: {totalSumOfGames} </h5>
            </div>
        </div>

    )
}

export default CompanyCard;
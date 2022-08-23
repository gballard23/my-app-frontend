import React from "react";

function ComCard({coms, onDeleteCom}){
    
    const subs = coms.subsidiaries.map((num) => (num.games))
    console.log(subs)

    const totalSumOfGames = subs.flat()

    function handleDeleteClick(){
        fetch(`http://localhost:9292/companies/${coms.id}`, {
            method: "DELETE",
        })
        .then((r) => r.json())
        .then(() => onDeleteCom(coms))
    }
    

    return (
        <div className="card">
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
                <button className="remove" onClick={handleDeleteClick}>Delete</button>
            </div>
        </div>

    )
}

export default ComCard;
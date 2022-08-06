import React from "react";

function GameCard({games, subs}){

    const developer = subs.filter((x) => (x.id === games.subsidiary_id))
    const devName = developer.map((x) => (x.name))
   
    

    return (
    <div>


    </div>
    )
}

export default GameCard;
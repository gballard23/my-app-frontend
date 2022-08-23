import React from "react";

function GameCard({games, subs}){

    const developer = subs.filter((x) => (x.id === games.subsidiary_id))
    const devName = developer.map((x) => (x.name)) 

    return (
    <div>
        <div>
            <h1>{games.title}</h1>
        </div>
        <div>
            <h3>Released: {games.released}</h3>
            <h3>Developer: {devName}</h3>
        </div>
    </div>
    )
}

export default GameCard;
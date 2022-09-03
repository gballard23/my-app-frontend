import React from "react";
import GameCard from "./GameCard";


function GameList({games, subs}){
    
    return(
    <div>
        {games.map((x, i) => (
            <GameCard key={i} games={x} subs={subs} />
        ))}
    </div>
    )

}

export default GameList;
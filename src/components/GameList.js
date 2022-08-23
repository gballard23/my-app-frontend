import React from "react";
import GameCard from "./GameCard";

function GameList({games}){
    console.log(games)
    const getSubs = games.map((x) => (x.subsidiaries))
    const listSubs = getSubs.flat()

    const getGames = listSubs.map((x) => (x.games))
   

    const allGames = getGames.flat()

    console.log(allGames)

    return(
    <div>
        {allGames?.map((x) => (
            <GameCard key={x.id} games={x} subs={listSubs} />
        ))}
    </div>
    )

}

export default GameList;
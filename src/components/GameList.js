import React from "react";
import GameCard from "./GameCard";


function GameList({games}){
    console.log(games)

    function mergeSubs(subs){
        let allSubs = subs.flat()
        return allSubs.map((x) => (x.games)) 
    }
   let allGames = mergeSubs(games).flat()

   function getAllDeveloperID(subs){
    let allDevelopers = subs.flat()
    return allDevelopers
   }

   let allDevs = getAllDeveloperID(games)

    return(
    <div>
        {allGames.map((x, i) => (
            <GameCard key={i} games={x} subs={allDevs} />
        ))}
    </div>
    )

}

export default GameList;
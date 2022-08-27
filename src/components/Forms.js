import React, { useState }  from "react";
import ComForm from "./ComForm";
import SubForm from "./SubForm";
import GameForm from "./GameForm";

function Forms({coms, setComs, ops, subs, setSubs, games, setGames}){
   function merge(x){
    const a = x.flat()
    return a;
   }

const [ page, setPage ] = useState(<section>
    <div className="forms">
        <div>
            {<ComForm coms={coms} setComs={setComs} change={handlePageChange} />}
        </div>
        <div>
            {<SubForm  subs={subs} setSubs={setSubs} coms={coms} change={handlePageChange} />}
        </div>
        <div>    
            {<GameForm games={games} setGames={setGames} ops={merge(ops)} change={handlePageChange} />}
        </div>
    </div>
</section>);

    function handlePageChange(){
        setPage(<><h1>Submitted!</h1></>)
    }

    return ( 
        <div>
           {page}
        </div>
    )
}

export default Forms;
import React, { useEffect, useState }  from "react";
import ComForm from "./ComForm";
import SubForm from "./SubForm";
import GameForm from "./GameForm";

function Forms({coms, setComs}){
 

const [ page, setPage ] = useState(<section>
    <div className="forms">
            {<ComForm coms={coms} setComs={setComs} change={handlePageChange} />}
    </div>
    <div className="forms">
            {<SubForm coms={coms} setComs={setComs} change={handlePageChange} />}
    </div>
    <div className="forms">
            {<GameForm coms={coms} setComs={setComs} change={handlePageChange} />}
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
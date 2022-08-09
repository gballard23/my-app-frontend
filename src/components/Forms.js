import React from "react";
import { useEffect, useState } from "react";
import CompanyForm from "./CompanyForm";
import GameForm from "./Gameform";
import SubForm from "./SubForm";

function Form({coms, setComs}){
    const [showCom, setShowCom] = useState(false);
    const [showSub, setShowSub] = useState(false);
    const [showGame, setShowGame] = useState(false);

    const [page, setPage] = useState();

    function handlePageChange(){
        setPage(<><h1 className="subform">Submitted</h1> </>)
    }



    useEffect(() => {
        setTimeout(() => {
            setPage( 
                <>
                    <section>
                        <form>
                            <div className="forms">
                                <button onClick={() => setShowCom(!showCom)}>{showCom ? "X" : "Add Company" }</button>
                                {showCom ? <CompanyForm change={handlePageChange} /> : null}
                            </div>
                            <div className="forms">
                                <button onClick={() => setShowSub(!showSub)}>{showSub ? "X" : "Add Subsidiary" }</button>
                                {showSub ? <SubForm change={handlePageChange} /> : null}
                            </div>
                            <div className="forms">
                                <button onClick={() => setShowGame(!showGame)}>{showGame ? "X" : "Add Game" }</button>
                                {showGame ? <GameForm change={handlePageChange} /> : null}
                            </div>
                            <button type="submit">Submit</button>
                        </form>
                    </section>
                </>)
    }, 3000);
        
    }, [coms, setComs, showCom, showSub, showGame])


    return ( 
        <div>
          {page}
        </div>
    )
}

export default Form;
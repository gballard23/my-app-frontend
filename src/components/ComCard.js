import React, { useState } from "react";

function ComCard({coms, subs, games, onDeleteCom, onUpdate}){
    const [ edit, setEdit ] = useState(false);
    const [ newNet, setNewNet ] = useState(0)
    const [ loading, setLoading ] = useState(false)

//     const arr1 = [{id:'1',name:'A'},{id:'2',name:'B'},{id:'3',name:'C'},{id:'4',name:'D'}];
// const arr2 = [{id:'1',name:'A',state:'healthy'},{id:'3',name:'C',state:'healthy'}];
// const filterByReference = (arr1, arr2) => {
//    let res = [];
//    res = arr1.filter(el => {
//       return !arr2.find(element => {
//          return element.id === el.id;
//       });
//    });
//    return res;
// }
//console.log(filterByReference(arr1, arr2));
    
  const sumOfSubs = subs.filter((x) => (x.company_id === coms.id))

  const subsIds = sumOfSubs.map((x) => x.id)

  const totalGames = games.filter((x) => subsIds.includes(x.subsidiary_id))
  console.log(totalGames)

  


    function handleDeleteClick(){
        fetch(`http://localhost:9292/companies/${coms.id}`, {
            method: "DELETE",
        })
        .then((r) => r.json())
        .then(() => onDeleteCom(coms))
    }

    function handleEditClick(){
        setEdit((edit) => !edit)
      }

    function handleNetChange(event){
        setNewNet(event.target.value)
    }

      function handleComChange(){
        setEdit((edit) => !edit)
        setLoading(true)
        fetch(`http://localhost:9292/companies/${coms.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type" : "application/json",
          },
          body: JSON.stringify({
            net_worth: newNet,
            
            })
        })
        .then((r) => r.json())
        .then((data) => onUpdate(data))
        .finally(() => {
            setLoading(false);
          });
      }

      if(loading){
        return <p>loading...</p>
      }

    const editForm =  edit ? <label>Net Worth:
    <input
    type="text"
    name="name"
    value={newNet}
    onChange={handleNetChange}
    /></label> : <h5>Net Worth: {coms.net_worth} Billion</h5>

    const buttonChange = edit ? <button 
                                type="submit" 
                                onClick={handleComChange} 
                                >Submit
                                </button> : <button className="remove" onClick={handleDeleteClick}>Delete</button>

    const cancelButton = edit ? <button onClick={handleEditClick}>Cancel</button> : null;
    return (
        <div className="card">
            <button onClick={handleEditClick}>{edit ? "X" : "Edit"}</button>
            <h1 className="companyname"><strong>{coms.name}</strong></h1>
            <div>
                <h3>Est.{coms.established}</h3>
                <div id="comatt">
                    <ul>   
                      <li>{editForm}</li>
                      <li><h5>Subsidiaries: {sumOfSubs.length}</h5></li>
                      <li><h5>Games: {totalGames.length}</h5></li> 
                    </ul>    
                </div>
                {buttonChange}
                {cancelButton}
            </div>
        </div>

    )
}

export default ComCard;
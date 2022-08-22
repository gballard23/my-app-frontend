import '../App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom"; 
import React, { useEffect, useState } from 'react';
import ComList from './ComList';
import SubList from './SubList';
import GameList from './GameList';
import NavBar from './NavBar';
import Home from './Home';
import Forms from './Forms';



function App() {
  const [coms, setComs] = useState([]);
  
  console.log(coms)
  
    useEffect(() => {
      fetch('http://localhost:9292')
        .then((r) => r.json())
        .then((data) => setComs(data))
    }, [])

  return (
    <div className="App">
      <BrowserRouter>
       <NavBar />
        <Switch>
          <Route exact path='/companies'>
            <ComList coms={coms}/>
          </Route>
          <Route exact path='/subsidiaries'>
            <SubList subs={coms} />
          </Route>
          <Route exact path='/games'>
            <GameList games={coms}/>
          </Route>
          <Route exact path='/forms'>
            <Forms coms={coms} setComs={setComs}/>
          </Route>
          <Route exact path='/'>
            <Home/>
          </Route>
         </Switch>   
        </BrowserRouter>
    </div>
  );
}

export default App;

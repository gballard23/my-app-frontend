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
  const [ coms, setComs] = useState([]);
  const [ subs, setSubs ] = useState([]);
  const [ games, setGames ] = useState([]); 
    useEffect(() => {
      fetch('http://localhost:9292')
        .then((r) => r.json())
        .then((data) => ((setComs(data), setSubs(data), setGames(data))))
    }, [])  

  return (
    <div className="App">
      <BrowserRouter>
       <NavBar />
        <Switch>
          <Route exact path='/companies'>
            <ComList coms={coms} setComs={setComs}/>
          </Route>
          <Route exact path='/subsidiaries'>
            <SubList subs={subs.map((x) => (x?.subsidiaries)).flat()} coms={coms} />
          </Route>
          <Route exact path='/games'>
            <GameList games={games.map((x) => (x.subsidiaries))} />
          </Route>
          <Route exact path='/forms'>
            <Forms coms={coms} setComs={setComs} ops={coms.map((x) => (x.subsidiaries))} subs={subs} setSubs={setSubs} games={games} setGames={setGames}/>
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

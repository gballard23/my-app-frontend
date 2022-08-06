import '../App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom"; 
import React, { useEffect, useState } from 'react';
import CompanyList from './CompanyList';
import SubsidiaryList from './SubsidiaryList';
import GameList from './GameList';
import NavBar from './NavBar';
import Home from './Home';
import Forms from './Forms';



function App() {
  const [coms, setComs] = useState([]);
  
    useEffect(() => {
      fetch('http://localhost:9292/companies')
        .then((r) => r.json())
        .then((data) => setComs(data))
    }, [])

  return (
    <div className="App">
      <BrowserRouter>
       <NavBar />
        <Switch>
          <Route exact path='/companies'>
            <CompanyList coms={coms}/>
          </Route>
          <Route exact path='/subsidiaries'>
            <SubsidiaryList subs={coms} />
          </Route>
          <Route exact path='/games'>
            <GameList games={coms}/>
          </Route>
          <Route exact path='/forms'>
            <Forms />
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

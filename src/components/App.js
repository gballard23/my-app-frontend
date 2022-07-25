import '../App.css';
import React, { useEffect, useState } from 'react';
import CompanyList from './CompanyList';
import SubsidiaryList from './SubsidiaryList';


function App() {
  const [coms, setComs] = useState([]);
  
    useEffect(() => {
      fetch('http://localhost:9292/companies')
        .then((r) => r.json())
        .then((data) => setComs(data))
    }, [])

  return (
    <div className="App">
      <CompanyList coms={coms}/>
      <SubsidiaryList subs={coms} />     
    </div>
  );
}

export default App;

import '../App.css';
import React, { useEffect, useState } from 'react';



function App() {
  const [company, setCompany] = useState([]);
  
    useEffect(() => {
      fetch('http://localhost:9292/companies')
        .then((r) => r.json())
        .then((data) => setCompany(data))
    }, [])

    console.log(company)

  return (
    <div className="App">

      
    </div>
  );
}

export default App;

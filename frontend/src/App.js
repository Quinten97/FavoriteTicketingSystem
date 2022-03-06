import React, { useState, useEffect } from 'react';

function App() {
let [data, setData] = useState(null);

useEffect(() => {
  fetch('http://localhost:1337/tickets')
  .then(res => res.json())
  .then(data => setData(data))
  .catch(err => console.error(err));
}, []);

console.log(data);
  return (
    <div className="App">      
      {data?.tickets?.map((ticket, i) => <ul key={i}>{Object.entries(ticket).map(([key, value]) => <li>{key}: {value}</li>)}</ul>) || "...loading"}
    </div>
  );
}

export default App;

import React from 'react';
import Header from './reactjsdasar/Header';
// import {Navbar} from './Navbar'; // jika export tidak default maka harus diberi {}
import Navbar from './reactjsdasar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <h2>Hello World</h2>
    </div>
  );
}

export default App;
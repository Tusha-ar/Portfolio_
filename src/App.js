import React from 'react';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import { BrowserRouter, Route } from 'react-router-dom';
import Work from './Components/Work/Work';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Nav/>
        <Route exact path='/' component={Home}/>
        <Route path='/work' component={Work}/>
      </BrowserRouter>
    </div>
  );
}

export default App;

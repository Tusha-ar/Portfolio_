import React, { useState } from 'react';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import { BrowserRouter, Route } from 'react-router-dom';
import Work from './Components/Work/Work';
import Loading from './Components/Loading/Loading';
import Skills from './Components/Skills/Skills';
import CSSPlugin from 'gsap/CSSPlugin';

const C = CSSPlugin;  // here is the gotcha....



function App() {
  const [loading, setLoading] = useState(true)
  useState(()=>{
    setTimeout(()=>{
      setLoading(false)
    },1000)
  })
  return (
    <div className="App">
      {
      loading? 
      <Loading/>:
      <BrowserRouter>
        <Header/>
        <Nav/>
        <Route exact path='/' component={Home}/>
        <Route path='/work' component={Work}/>
        <Route path='/skills' component={Skills}/>
      </BrowserRouter>
      }
    </div>
  );
}

export default App;

import '../styles/App.scss';
import { useEffect, useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

//import {Link, Route, Routes} from 'react-router-dom';

const App = ()  => {

  return (
        <div className="App"> 
        <Header/>
        <Main/>
        <Footer/>
        </div>
  );
}

export default App;
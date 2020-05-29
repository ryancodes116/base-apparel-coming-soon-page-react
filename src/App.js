import React from 'react';
import './App.css';
import Logo from './components/Logo';
import Showcase from './components/Showcase';
import Details from './components/Details';

const App = () => {
  return (
    <div className="mainContainer">
      <Logo />
      <Showcase />
      <Details />
    </div>
  );
};

export default App;

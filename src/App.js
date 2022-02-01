import React from 'react';
import NavBar from './components/NavBar/NavBar';
// Components 
import Home from './components/Home/Home';
import Destination from './components/Destination/Destination';
import Crew from './components/Crew/Crew';
import Technology from './components/Technology/Technology';
// the css file
import './App.css';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

export default function App() {

  const components = useSelector(state => state.background);

  const SwitchComponants = () => {
    if(components === 'Home') {
      return <Home/>;
    } else if (components === 'Destination') {
      return <Destination/>;
    } else if(components === 'Crew') {
      return <Crew/>;
    } else if (components === 'Technology') {
      return <Technology/>
    }
  }

  useEffect(() => {
    SwitchComponants()
  })


  console.log(components)
  
  return (
    <div className="App" data-background={ components }>
        <NavBar/>
        { SwitchComponants() }
        
      </div>
  );
}



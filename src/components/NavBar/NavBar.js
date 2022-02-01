import React from 'react';
import './NavBar.css';
import logo from './shared/logo.svg';
import iconHamburger from './shared/icon-hamburger.svg';
import iconClose from './shared/icon-close.svg';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {home, crew, technology, destination} from '../../Redux-store/Actions/action';

export default function NavBar() {

    const [icon, seticon] = useState(iconHamburger);
    const [menu, setmenu] = useState("menu");
    var [x, setx] = useState(0);

    const SwitchIcon = () => {
        setx(x++);
        switch(x) {
            case 1:
                seticon(iconClose);
                setmenu("menuActive");
                setx(1);
                break;
            case 2:
                seticon(iconHamburger);
                setmenu("menu");
                setx(0);
                break;
            default:
                setx(0);
                seticon(iconClose);
                setmenu("menuActive");
        }
    }

    const dispatch = useDispatch();

      // some animation 
    const [dataActive, setdataActive] = useState('Moon');
    const components = useSelector(state => state.background);
    useEffect(() => {
        if(components === 'Home') {
        setdataActive('Home');
        } else if (components === 'Crew') {
        setdataActive('Crew');
        } else if (components === 'Destination') {
        setdataActive('Destination');
        } else if (components === 'Technology') {
        setdataActive('Technology');
        }
    })
    
  return (
      <div className='NavBar'>
          <img onClick={() => dispatch(home())} className='logo' src={ logo } alt="#" />
          <hr />
          <img className='icon' src={ icon } alt="#" onClick={() => SwitchIcon()} />
          <div className={ menu } >
              <ul>
                  <li data-active={ (dataActive === 'Home') ? 'true' : 'false'} onClick={() => {
                       dispatch(home())
                  }}>
                      <a><span>00</span>HOME</a>
                      <nav></nav>
                  </li>
                  <li data-active={ (dataActive === 'Destination') ? 'true' : 'false'} onClick={() => dispatch(destination()) }>
                      <a><span>01</span>DESTINATION</a>
                      <nav></nav>
                  </li>
                  <li data-active={ (dataActive === 'Crew') ? 'true' : 'false'} onClick={() => {
                      dispatch(crew())
                  }}>
                      <a><span>02</span>CREW</a>
                      <nav></nav>
                  </li>
                  <li data-active={ (dataActive === 'Technology') ? 'true' : 'false'} onClick={() => {
                      dispatch(technology())
                  }}>
                      <a><span>03</span>TECHNOLOGY</a>
                      <nav></nav>
                  </li>
              </ul>
          </div>
      </div>
  );
}

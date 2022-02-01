import React from 'react';
import './Destination.css';
import { useState, useEffect } from 'react';
import imageMoon from "./images/image-moon.png";
import imageMars from "./images/image-mars.png";
import imageEuropa from "./images/image-europa.png";
import imageTitan from "./images/image-titan.png";
import data from "./data.json";

export default function Destination() {

  const [images, setimages] = useState(imageMoon);
  const [Title, setTitle] = useState(data.Moon.name);
  const [description, setdescription] = useState(data.Moon.description);
  const [distance, setdistance] = useState(data.Moon.distance);
  const [travel, settravel] = useState(data.Moon.travel);


  // some animation 
  const [dataActive, setdataActive] = useState('Moon');
  useEffect(() => {
    if(Title === 'Moon') {
      setdataActive('Moon');
    } else if (Title === 'Mars') {
      setdataActive('Mars');
    } else if (Title === 'Europa') {
      setdataActive('Europa');
    } else if (Title === 'Titan') {
      setdataActive('Titan');
    }
  })


  return (
      <div className='Destination'>
        <div className="Hero">
          <h1><span>01</span>Pick your destination</h1>
          <img className='imgDestination' src={ images } alt="#"/>
        </div>
          
        <div className="Content">
          <ul>
            <li data-active={ (dataActive === 'Moon') ? 'true' : 'false'} onClick={() => {
              setimages(imageMoon);
              setTitle(data.Moon.name);
              setdescription(data.Moon.description);
              setdistance(data.Moon.distance);
              settravel(data.Moon.travel);
            }}>
              <h1>Moon</h1>
              <nav></nav>
            </li>
            <li data-active={ (dataActive === 'Mars') ? 'true' : 'false'} onClick={ () => {
              setimages(imageMars);
              setTitle(data.Mars.name);
              setdescription(data.Mars.description);
              setdistance(data.Mars.distance);
              settravel(data.Mars.travel);
            }}>
              <h1>Mars</h1>
              <nav></nav>
            </li>
            <li data-active={ (dataActive === 'Europa') ? 'true' : 'false'} onClick={() => {
              setimages(imageEuropa);
              setTitle(data.Europa.name);
              setdescription(data.Europa.description);
              setdistance(data.Europa.distance);
              settravel(data.Europa.travel);
            }}>
              <h1>Europa</h1>
              <nav></nav>
            </li>
            <li data-active={ (dataActive === 'Titan') ? 'true' : 'false'} onClick={() => {
              setimages(imageTitan);
              setTitle(data.Titan.name);
              setdescription(data.Titan.description);
              setdistance(data.Titan.distance);
              settravel(data.Titan.travel);
            }}>
              <h1>Titan</h1>
              <nav></nav>
            </li>
          </ul>

          <h1 className='Title'> { Title }</h1>
          <p> { description } </p>
          <hr className="hr" />
          <div className='DT'>
            <div className="distance">
              <h1>AVG. DISTANCE</h1>
              <nav>{ distance}</nav>
            </div>
            <div className="travel">
              <h1>EST. TRAVEL TIME</h1>
              <nav>{ travel }</nav>
            </div>
          </div>
        </div>
      </div>
  );
}

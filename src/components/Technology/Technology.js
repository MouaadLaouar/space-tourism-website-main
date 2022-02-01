import React from 'react';
import './Technology.css';
import data from './data.json';
import { useState, useEffect } from 'react';

export default function Technology() {

  const [Name, setName] = useState(data.technology[0].name);
  const [description, setdescription] = useState(data.technology[0].description);
  const [dataActive, setdataActive] = useState("Launch vehicle");

  useEffect(() => {
    if(Name === "Launch vehicle") {
      setdataActive("Launch vehicle")
    } else if(Name === "Spaceport") {
      setdataActive("Spaceport");
    } else if(Name === "Space capsule") {
      setdataActive("Space capsule");
    }
  })

  return (
      <div className='Technology'>
          <div className="Hero">
            <h1><span>03</span>Space launch 101</h1>
            <div className='img' data-image={ dataActive }></div>
          </div>

          <ul>
            <li data-active={(dataActive === "Launch vehicle") ? 'true' : 'false'} onClick={() => {
              setName(data.technology[0].name);
              setdescription(data.technology[0].description);
            }}>1</li>
            <li data-active={(dataActive === "Spaceport") ? 'true' : 'false'} onClick={() => {
              setName(data.technology[1].name);
              setdescription(data.technology[1].description); 
            }}>2</li>
            <li data-active={(dataActive === "Space capsule") ? 'true' : 'false'} onClick={() => {
              setName(data.technology[2].name);
              setdescription(data.technology[2].description);
            }}>3</li>
          </ul>

          <div className="Content">
            <div className="Name">
              <p>The terminology...</p>
              <h1>{ Name }</h1>
            </div>
            <p>{ description }</p>
          </div>
      </div>
  );
}

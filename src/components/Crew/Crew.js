import React from 'react';
import './Crew.css';
import data from './data.json';
import imageAnousheh from './crew/image-anousheh-ansari.png';
import imageVictor from './crew/image-victor-glover.png';
import imageMark from './crew/image-mark-shuttleworth.png';
import imageDouglas from './crew/image-douglas-hurley.png';
import { useState, useEffect } from 'react';

export default function Crew() {

  const [Name, setName] = useState(data.Douglas.name);
  const [Role, setRole] = useState(data.Douglas.role);
  const [Bio, setBio] = useState(data.Douglas.bio);
  const [image, setimage] = useState(imageDouglas);
  const [dataActive, setdataActive] = useState('Douglas');

  useEffect(() => {
    if(Name === 'DDouglas Hurley') {
      setdataActive('Douglas');
    } else if(Name === "Mark Shuttleworth") {
      setdataActive("Mark");
    } else if( Name === "Victor Glover") {
      setdataActive("Victor");
    } else if(Name === "Anousheh Ansari") {
      setdataActive("Anousheh");
    }
  })

  console.log(dataActive)

  return (
      <div className='Crew'>
          <h1><span>02</span> Meet your crew</h1>

          <div className="imgCommander">
            <img src={ image } alt="#" />
            <hr />
          </div>
  
          
          <div className="Content">
            <ul>
              <li data-active={ (dataActive === 'Douglas') ? 'true' : 'false'} onClick={() => {
                setName(data.Douglas.name);
                setRole(data.Douglas.role);
                setBio(data.Douglas.bio);
                setimage(imageDouglas);
              }}></li>
              <li data-active={ (dataActive === 'Mark') ? 'true' : 'false'} onClick={() => {
                setName(data.Mark.name);
                setRole(data.Mark.role);
                setBio(data.Mark.bio);
                setimage(imageMark);
              }}></li>
              <li data-active={ (dataActive === 'Victor') ? 'true' : 'false'} onClick={() => {
                setName(data.Victor.name);
                setRole(data.Victor.role);
                setBio(data.Victor.bio);
                setimage(imageVictor);
              }}></li>
              <li data-active={ (dataActive === 'Anousheh') ? 'true' : 'false'} onClick={() => {
                setName(data.Anousheh.name);
                setRole(data.Anousheh.role);
                setBio(data.Anousheh.bio);
                setimage(imageAnousheh);
              }}></li>
            </ul>
            <div className="Commander">
              <div className="Name">
                <p>{ Role }</p>
                <h1>{ Name }</h1>
              </div>
              
              <p className='bio'>{ Bio }</p>
            </div>
          </div>
      </div>
  );
}

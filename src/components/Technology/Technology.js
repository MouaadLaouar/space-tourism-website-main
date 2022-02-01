import React from 'react';
import './Technology.css';
import data from './data.json';
import { useState } from 'react';

export default function Technology() {

  const [Name, setName] = useState(data.technology[0].name);
  const [description, setdescription] = useState(data.technology[0].description);
  const test = "Launch vehicle";

  return (
      <div className='Technology'>
          <div className="Hero">
            <h1><span>03</span>Space launch 101</h1>
            <div className='img' data-image={ test }></div>
          </div>

          <ul>
            <li onclick={() => {
              setName(data.technology[0].name);
            }}>1</li>
            <li onclick={() => {
              setdescription(data.technology[0].description)
            }}>2</li>
            <li>3</li>
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

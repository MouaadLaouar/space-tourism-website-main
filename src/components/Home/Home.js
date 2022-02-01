import React from 'react';
import './Home.css';
import { destination } from '../../Redux-store/Actions/action';
import { useDispatch } from 'react-redux';

export default function Home() {

    const dispatch = useDispatch();

  return (
      <div className='Home'>
          <div className="groupA">
              <p>So, you want to travel to</p>
              <h1>Space</h1>
              <p>
                Let’s face it; if you want to go to space, you might as well genuinely go to 
                outer space and not hover kind of on the edge of it. Well sit back, and relax 
                because we’ll give you a truly out of this world experience!
              </p>
          </div>
          <div className="groupB">
              <div onClick={() => dispatch(destination())} className="button">
                  <h1>EXPLORE</h1>
              </div>
          </div>
      </div>
  );
}

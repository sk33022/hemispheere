import React from 'react';
import north from '../images/a1.png';
import south from '../images/a2.png';
import './Hemisphere.css';

export const Hemisphere = ({ latitude }) => {
    // console.log(latitude)
    const hemisphere = latitude > 0 ? 'Northern' : 'Southern';
    // const pic = latitude > 0 ? north : south;
    const {text , pic} = hemisphereConfig[hemisphere]
    return (
      <>
  <div className={hemisphere}>
      <div className='ui raised text container segment'>
          <div className='image'>
          <img src={pic} alt='hemisphere pic'/>
          </div>
          <div className='ui teal attached label'>
              <h1> { text } </h1>
          </div>
      </div>
      
  </div>
  </>
  ) 
};

const hemisphereConfig = {
    Northern : {
        text : 'it is northern hemisphere',
        pic : north
    },
    Southern : {
        text : 'it is southern hemisphere',
        pic : south
    }
}
 
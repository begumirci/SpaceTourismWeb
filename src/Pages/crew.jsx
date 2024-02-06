import Header from '../assets/components/header';
import data from '../data.json';
import { useState } from 'react';

export default function Crew() {
  const [crew, setCrew] = useState(0);

  const crewData = data.crew;

  return (
    <div className='crew'>
      <Header />
      <div className='small-title'>
        <h3>
          <span>02</span>Meet your crew
        </h3>
      </div>
      <div className='container'>
        <div className='crew-desktop'>
          <div className='crew-main'>
            <div className='crew-group'>
              <h2>{crewData[crew].role}</h2>
              <h1>{crewData[crew].name}</h1>
              <p className='explanation'>{crewData[crew].bio}</p>
              <div className='crew-btns'>
                {crewData.map((x, index) => (
                  <span
                    key={index}
                    className={index == crew ? 'active' : ''}
                    onClick={() => setCrew(index)}
                  ></span>
                ))}
              </div>
            </div>
            <img src={crewData[crew].images} alt='' />
          </div>
        </div>
        <div className='crew-mobil'>
          <div className='crew-group'>
            <img src={crewData[crew].mobilImage} alt='' />
            <div className='crew-btns'>
              {crewData.map((x, index) => (
                <span
                  key={index}
                  className={index == crew ? 'active' : ''}
                  onClick={() => setCrew(index)}
                ></span>
              ))}
            </div>
            <h2>{crewData[crew].role}</h2>
            <h1>{crewData[crew].name}</h1>
            <p className='explanation'>{crewData[crew].bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

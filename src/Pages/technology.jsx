import Header from '../assets/components/header';
import data from '../data.json';
import { useState } from 'react';

export default function Technology() {
  const [technology, setTechnology] = useState(0);
  const technologyData = data.technology;
  console.log(technologyData);

  return (
    <div className='technology'>
      <Header />

      <div className='small-title'>
        <h3>
          <span>03</span>SPACE LAUNCH 101
        </h3>
      </div>
      <div className='container-technology'>
        <div className='technology-main'>
          <div className='technology-group'>
            <div className='technology-left-group'>
              <img
                className='technology-tablet'
                src={technologyData[technology].tabletImages}
                alt=''
              />

              <div className='technology-btns'>
                {technologyData.map((x, index) => (
                  <div key={index}>
                    <button
                      className={index == technology ? 'active' : ''}
                      onClick={() => setTechnology(index)}
                    >
                      {index + 1}
                    </button>
                  </div>
                ))}
              </div>
              <div className='container'>
                <h2>THE TERMINOLOGY…</h2>
                <h1>{technologyData[technology].name}</h1>
                <p className='explanation'>
                  {technologyData[technology].description}
                </p>
              </div>
            </div>
          </div>
          <img
            className='technology-laptop'
            src={technologyData[technology].images}
            alt=''
          />
        </div>
      </div>
    </div>
  );
}

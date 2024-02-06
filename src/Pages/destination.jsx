import Header from '../assets/components/header';
import data from '../data.json';
import { useState } from 'react';
import { Link } from 'react-router-dom';
export default function Destination() {
  const [destiniton, setDestiniton] = useState(0);
  const destinationData = data.destinations;
  console.log(destinationData);
  console.log(data.destinations[destiniton].images);
  console.log(destiniton);
  return (
    <div className='destination'>
      <Header />
      <div className='small-title'>
        <h3>
          <span>01</span>Pick your destination
        </h3>
      </div>
      <div className='container'>
        <div className='destination-main'>
          <div className='destination-group'>
            <img src={data.destinations[destiniton].images} alt='moon' />
          </div>
          <div className='options-info'>
            <ul className='option-list'>
              {data.destinations.map((x, index) => (
                <li
                  className={index == destiniton ? 'active' : ''}
                  key={index}
                  onClick={() => setDestiniton(index)}
                >
                  <Link to='#'>{x.name}</Link>
                </li>
              ))}
            </ul>
            <h1>{destinationData[destiniton].name}</h1>
            <p className='explanation'>
              {destinationData[destiniton].description}
            </p>
            <div className='infos'>
              <div className='info'>
                <h6>AVG. DISTANCE</h6>
                <p>{destinationData[destiniton].distance}</p>
              </div>
              <div className='info'>
                <h6>Est. travel time</h6>
                <p>{destinationData[destiniton].travel}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { useState } from 'react';
import satData from './satData';

const Buttons = ({ filterByType, displaySats, setSat }) => {
  const [active, setActive] = useState('All');
  const handleClick = event => { setActive(event.target.id); filterByType(event.target.id); };

  return (
    <div className="flex-container">
      { displaySats.map((orbitType, idx) =>
        (
          <button onClick={handleClick} key={idx} id={orbitType} className={active === orbitType ? "active" : undefined}>
            {orbitType} Orbit
          </button>
        )
      )}
      <button key="All" id="All" onClick={_ => { setActive('All'); setSat(satData); }} className={active === "All"  ? "active" : undefined}>
        All Orbits
      </button>
      </div>
  )
};

export default Buttons;
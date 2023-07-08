import { useState } from 'react';
import satData from './satData';

const Buttons = (props) => {
  const [active, setActive] = useState('All');
  const handleClick = event => { setActive(event.target.id); props.filterByType(event.target.id); };

  return (
    <div className="flex-container">
      {props.displaySats.map((orbitType, idx) =>
        (
          <button onClick={handleClick} key={idx} id={orbitType} className={active === orbitType && "active"}>
            {orbitType} Orbit
          </button>
        )
      )}
      <button key="All" id="All" onClick={_ => { setActive('All'); props.setSat(satData); }} className={active === "All" && "active"}>
        All Orbits
      </button>
      </div>
  )
};

export default Buttons;
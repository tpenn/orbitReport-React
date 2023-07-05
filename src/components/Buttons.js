import satData from './satData';

const Buttons = (props) =>
  (
    <div className="flex-container">
      {props.displaySats.map((orbitType, idx) =>
        (
          <button onClick={_ => props.filterByType(orbitType)} key={idx}>
            {orbitType} Orbit
          </button>
        )
      )}
      <button key='allOrbits' onClick={_ => props.setSat(satData)}>All Orbits</button>
      </div>
  );

export default Buttons;
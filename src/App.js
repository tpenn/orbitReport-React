import { useState, useEffect } from "react";
import './components/styling.css';
import satData from "./components/satData";
import Buttons from "./components/Buttons";
import Table from "./components/Table";
import Banner from "./components/Banner";
import Counts from './components/Counts';

function App() {
  const [sat, setSat] = useState(satData);
  // eslint-disable-next-line
  const calcSatCount = _ => sat.reduce((prev, curr) => (prev[curr.type] = ++prev[curr.type] || 1, prev), {});
  const [satCounts, setSatCount] = useState(calcSatCount);

  const displaySats   = [...new Set(satData.map((data) => data.orbitType))];
  const filterByType  = (orbit) => setSat(satData.filter((satData) => satData.orbitType === orbit));

  // eslint-disable-next-line
  useEffect(_ => setSatCount(calcSatCount()), [sat]);

  return (
    <div>
      <Banner />
      <Buttons
        filterByType = {filterByType}
        setSat       = {setSat}
        displaySats  = {displaySats}
      />
      <Table sat={sat} setSat={setSat} />
      <br />
      <Counts count={satCounts} sat={sat} />
    </div>
  );
}

export default App;

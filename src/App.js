import { useState, useEffect } from "react";
import './components/styling.css';
import satData from "./components/satData";
import Buttons from "./components/Buttons";
import Table from "./components/Table";
import Banner from "./components/Banner";
import Counts from './components/Counts';

function App() {
  const [sat, setSat] = useState({ data: satData, processed: satData });
  const calcSatCount = _ => sat.processed.reduce((prev, curr) => ((prev[curr.type] = ++prev[curr.type] || 1, prev)), {});
  const [satCounts, setSatCount] = useState(calcSatCount);

  const displaySats   = [...new Set(satData.map((data) => data.orbitType))];
  const filterByType  = orbit => setSat({...sat, data: satData.filter(satData => satData.orbitType === orbit)});

  useEffect(_ => setSatCount(calcSatCount()), [sat.processed]);

  return (
    <div>
      <Banner />
      <Buttons
        filterByType = {filterByType}
        setSat       = {setSat}
        displaySats  = {displaySats}
        sat          = {sat}
      />
      <Table sat={sat} setSat={setSat} />
      <br />
      <Counts count={satCounts} numSats={sat.processed.length} />
    </div>
  );
}

export default App;

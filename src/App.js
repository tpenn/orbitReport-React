import { useState } from "react";
import './components/styling.css';
import satData from "./components/satData";
import Buttons from "./components/Buttons";
import Table from "./components/Table";
import Banner from "./components/Banner";

function App() {
  const [sat, setSat] = useState(satData);
  const displaySats   = [...new Set(satData.map((data) => data.orbitType))];
  const filterByType  = (orbit) => setSat(satData.filter((satData) => satData.orbitType === orbit));

  return (
    <div>
      <Banner />
      <Buttons
        filterByType = {filterByType}
        setSat       = {setSat}
        displaySats  = {displaySats}
      />
      <Table sat={sat} />
    </div>
  );
}

export default App;

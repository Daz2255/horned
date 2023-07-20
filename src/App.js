import React, { useState } from "react";
import "./Reset.css";
import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import data from "./components/data.json";

function App() {
  const [selectedHorns, setSelectedHorns] = useState("all");

  // Define the handleHornsChange function to update selectedHorns state
  const handleHornsChange = (event) => {
    setSelectedHorns(event.target.value);
  };

  return (
    <div className="App">
      <Header data={data} onHornsChange={handleHornsChange} />
      <Main data={data} selectedHorns={selectedHorns} />
      <Footer />
    </div>
  );
}

export default App;

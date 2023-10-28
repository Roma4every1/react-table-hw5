import React from "react";
import "./App.css";
import Films from "./components/films/films";
import MainContext from "./store";

function App() {
  return (
    <div className="App">
      <MainContext>
        <Films></Films>{" "}
      </MainContext>
    </div>
  );
}

export default App;

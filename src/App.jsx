/* eslint-disable no-empty-pattern */
import { useState } from "react";
import "./App.css";
import Home from "./components/home/Home";

function App() {
  const [] = useState(0);

  return (
    <>
      <Home></Home>
    </>
  );
}

export default App;

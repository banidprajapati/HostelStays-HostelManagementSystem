import {useState} from "react";
import "./App.css";
import {home} from "./components/home"
function App() {
  return (
    <>
      <h1 className="text-red-300 p-8">Hello World</h1>
      <p>This is a paragraph</p>
      <p>This is a paragraph</p>
      <p>This is a paragraph</p>
      <home />
    </>
  );
}

export default App;

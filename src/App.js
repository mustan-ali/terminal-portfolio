import React from "react";
import Header from "./components/Header";
import CommandArea from "./components/command-area";

function App() {
  return (
    <div className="App">
      <div className="bg-black text-slate-400 w-screen min-h-screen overflow-x-hidden">
        <Header />
        <CommandArea />
      </div>
    </div>
  );
}

export default App;
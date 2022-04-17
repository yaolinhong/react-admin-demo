// TODO 增加权限控制
// TODO 增加全局状态管理

import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="box-border bg-purple-400 App">
      <header className="font-bold text-gray-800 App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="border border-yellow-900 rounded-3xl p-11">
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="text-green-700 transition duration-150 ease-in-out animate-bounce mt-11 hover:scale-150"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

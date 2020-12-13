import React from "react";
import "./style.css";
import HelloWorldFnc from "./HelloWorldFun";
import HelloWorldCla from "./HelloWorldCla";

export default function App() {
  return (
    <div>
      <h3>This is my first hello world component using function</h3>
      <HelloWorldFnc />
      <h3>This is my first hello world component using class</h3>
      <HelloWorldCla />
    </div>
  );
}

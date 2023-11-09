import {React, useState } from "react";

export default function UseContext() {
  const [welcome, setWelcome] = useState("Hello");
  return (
    <>
      <div className="container">
        <h1>UseContext</h1>
        <h2>{`${welcome} Masum`}</h2>
        <Component2 msg={welcome}></Component2>
      </div>
    </>
  );
}
function Component2({ msg }) {
  return (
    <>
      <h3>{msg} Componant 2</h3>
      <Component2 mymsg={msg}></Component2>
    </>
  );
}
function Component3({ mymsg }) {
  return (
    <>
      <h3>{mymsg} Componant 2</h3>
    </>
  );
}

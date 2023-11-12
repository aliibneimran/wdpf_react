import {React, useState, createContext, useContext } from "react";

const UserContext = createContext();
export default function UseContext() {
  const [user, setUser] = useState({
    name: "Imran",
    phone: "01787515196",
    email: "imran@gmail.com"
  });

  return (
    <>
      <div className="container">
      <UserContext.Provider value={user}>
        <h1>UseContext</h1>
        <h2>{`${user} Component 1`}</h2>
        <Component2></Component2>
        </UserContext.Provider>
      </div>
    </>
  );
}
function Component2() {
  return (
    <>
      <h3> Componant 2</h3>
      <Component3></Component3>
    </>
  );
}
function Component3() {
 const user = useContext(UserContext)
 const Style = {
  "border": "1px solid black",
  "padding": "5px"
};
  return (
    <>
      <h3>User Info : </h3>
      <h6>Name: {user.name}</h6>
      <h6>Phone: {user.phone}</h6>
      <h6>Email: {user.email}</h6>
      <table style={Style}>
        <tr>
          <th style={Style}>Name</th>
          <th style={Style}>Phone</th>
          <th style={Style}>Email</th>
        </tr>
        <tr>
          <td style={Style}>{user.name}</td>
          <td style={Style}>{user.phone}</td>
          <td style={Style}>{user.email}</td>
        </tr>
        
      </table>
    </>
  );
}

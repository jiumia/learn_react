import React from "react";
import { Link, Outlet,useNavigate } from "react-router-dom";

export default function App14() {
  const nav= useNavigate()
  const goDetail=()=>{
    nav('/detail',{state:{username:"zhangsna"}})
  }
  return (
    <div>
      <ul>
        <li>
          <Link to="/home?id=456">shouye</Link>
        </li>
        <li>
          <Link to="/list/12">list</Link>
        </li>
        <li>
          <Link to="/detail">detail</Link>
        </li>
      </ul>
      <button onClick={goDetail}>跳转</button>
      <Outlet />
    </div>
  );
}

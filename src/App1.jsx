import React, { Component } from "react";

const msg = "hello";
// const mystyle = { backgroundColor: "pink" };
let flag= true
let arr = ["www", "aaa", "nnn"];
export default class App1 extends Component {
  render() {
    return (
      <div>
        <h2>{msg}</h2>
        <hr />
        <label htmlFor="username">用户名</label>
        <input type="text" id="username" />
        <hr />
        <div className="box">盒子</div>
        <div style={{backgroundColor:flag?'pink':'green'}}>内容</div>
        <hr/>
        <ul>
            {
                // react中列表循环有且只有map可以使用，map有返回值。foreach无
                arr.map((item,index)=><li key={index}>{item}</li>)
            }
        </ul>
      </div>
    );
  }
}

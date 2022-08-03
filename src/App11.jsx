import React,{useState,useRef} from "react";

export default function App11() {
    const [value,setValue] = useState("asd")
    const element= useRef(null)
  return (
    <div><h2>受控组件：</h2>
      <input type="text" value={value} onChange={(e)=>setValue(e.target.value)}/>
      <button onClick={()=>console.log(value)}>获取input的值</button>
      <h2>不受控组件：</h2>
      <input type="text" ref={element}/>
      <button onClick={()=>console.log(element.current.value)}>获取input的值</button>
    </div>
  );
}

import React,{useState} from 'react'

function Child(props){
    return (<><h2>子组件-{props.num}</h2>
    <button onClick={()=>props.setNum(789)}>修改num</button>
    </>)
}

function Father(props){
    return <Child num={props.num} setNum={props.setNum}/>
}

export default function App8() {
    const [num,setNum] = useState(123)
    // const changeFn =()=>setNum(456)
  return <Father num={num} setNum={setNum}/>
}

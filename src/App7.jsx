import React from 'react'

function Child(props){
    return <h2>子组件-{props.num}</h2>
}

function Father(props){
    return <Child num={props.num}/>
}

export default function App7() {
  return <Father num={123}/>
}

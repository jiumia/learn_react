import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Detail() {
    let loac=useLocation()
    console.log(loac); 
  return (
    <h2>详情页-{loac.state?loac.state.username:""}</h2>
  )
}

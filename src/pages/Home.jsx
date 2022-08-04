import React from 'react'
import { useSearchParams } from 'react-router-dom'

export default function Home() {
    const [xxx]= useSearchParams()
    console.log(xxx.getAll('id'));
  return (
   
    <div><h2>首页</h2></div>
  )
}

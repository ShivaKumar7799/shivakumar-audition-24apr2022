import React from 'react'
import './nameComponent.css'

export default function NameComponent(props) {
  return (
    <div class = "nameComponent">
      <div class ="nameinput" >
      <input type= "checkbox" />
      <span> {props.name} </span>
      </div>
      <div class = "nameBtn" >
      <button> ...</button>
      </div>
     </div>
  )
}

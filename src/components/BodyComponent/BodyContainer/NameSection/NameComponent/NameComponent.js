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
          <button class = "dropBtn" > ...</button>
          <div class = "dropDown-content" > 
            <div className = "dropDown1">
            <span> Update status </span>
            <span> send a Message </span>
            </div>
       
            <div className = "dropDown2" > 
              <span>View Details</span>
              <span> Edit</span>
              <span> Copy </span>
              <span> Move </span>
              <span> Export </span>
            </div>
          
             <div class = "dropDown3" >
             <span> Delete </span>
             </div>
          </div>
      </div>
     </div>
  )
}

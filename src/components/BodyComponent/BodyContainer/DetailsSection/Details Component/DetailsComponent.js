import React from 'react'
import './detailsComponent.css'

export default function DetailsComponent(props) {
  return (
     <div class = "detailsComponent" >
      <section> {props.email}</section>
      <section> {props.phone} </section>
      <section className={(props.status == "Open")? "open" : 
            (props.status == "In Progress")? "inprogress" : 
            (props.status == "On Hold")? "onhold" : "nothing"}>{props.status} </section>
      <section> {props.typeOfUpload} </section>
      <section> {props.DateAdded} </section>
     </div>
  )
}

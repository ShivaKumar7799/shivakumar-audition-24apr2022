import React from 'react'
import Button from './Button'
import './footerComponent.css'

export default function FooterComponent() {
  return (
    <div class = "footerComponent">
     <Button  name = "<" />
     <Button name = "1" />
     <span class= "footerText" > of 28</span>
     <Button name = "<" />
    </div>
  )
}

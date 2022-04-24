import React from 'react'
import Button from '../Button'
import './headercontainer.css'

export default function HeaderContainer() {
  return (
    <div class = "header" >
      <div>
      {/* <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /> */}
      <input type = "text" placeholder=' 🔍 search contacts' />
      </div>
      <div class = "headerBtns" >
        <div class = "leftBtns" >
        <Button name = "View" />
        <Button name = "Edit" />
        <Button name = "Status" />
        <Button name = "Send" />
        <Button name = "..." />
        </div>
        <div class = "rightBtns" >
        <Button name = "<" />
        <Button name = ">" />
        </div>
      </div>
    </div>
  )
}

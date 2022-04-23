import React from 'react'
import BodyContainer from './BodyContainer/BodyContainer'
import FooterContainer from './FooterContainer/FooterContainer'
import HeaderContainer from './HeaderContainer/HeaderContainer'
import './bodyComponent.css'

export default function BodyComponent() {
  return (
    <div class = "bodyComponent">
      <HeaderContainer />
      <BodyContainer />
      <FooterContainer />
    </div>
  )
}

import Navigation from '@layouts/navigation'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { StyledContainer } from './index.styled'

export default function App() {
  return (
    <StyledContainer>
      <Navigation/>

      <Outlet/>
    </StyledContainer>
  )
}

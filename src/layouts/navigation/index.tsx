import React from 'react';
import { Link } from 'react-router-dom';
import { StyledContainer } from './index.styled';

export default function Navigation() {
  return (
    <StyledContainer>
      <ul>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/services'}>Services</Link></li>
        <li><Link to={'/contact'}>Contact</Link></li>
        <li><Link to={'/team'}>Team</Link></li>
        <li><Link to={'/where-we-work'}>Where we work</Link></li>
      </ul>
    </StyledContainer>
  );
}

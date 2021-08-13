import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavMenuStyles = styled.div`
  background-color: red;
`;

export default function NavMenu() {
  return (
    <NavMenuStyles>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/About">About</NavLink>
        </li>
        <li>
          <NavLink to="/Projects">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/Contact">Contact</NavLink>
        </li>
      </ul>
    </NavMenuStyles>
  );
}

import React from 'react';
import {NavLink} from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <ul>
        <li>
         <NavLink to='/home'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/students'>Students</NavLink>
        </li>
      </ul>
    </div>
  )
}
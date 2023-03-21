import React from 'react'
import './NavBar.css';

export default function Navbar()
{
    return (
        <nav>
  <ul>
        <li className = "marginFirstElement" onClick = {() => {alert('The page is yet to come!')}}>
          home
          <span></span><span></span><span></span><span></span>
        </li>
        <li onClick = {() => {alert('The page is yet to come!')}}>
          hotels
          <span></span><span></span><span></span><span></span>
        </li>
        <li onClick = {() => {alert('The page is yet to come!')}}>
          services
          <span></span><span></span><span></span><span></span>
        </li>
  </ul>
</nav>
    )
}
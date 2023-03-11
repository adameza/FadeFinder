import React from 'react';

import './navbar.css'
import barbershop_pole from './small_pole.png'

export function Navbar(){
  return (
    <header> 
        <ul class="nav_bar">
            <h3 class='title'>FadeFinder</h3>
            <img src={barbershop_pole} class="logo" />
            <li id="navlink"><a href="/">Map</a></li>
            <li id='navlink'><a href="/barberlogin">Barber Login</a></li>
        </ul>
	</header>
  )
}

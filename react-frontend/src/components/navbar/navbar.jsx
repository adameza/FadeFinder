import React from 'react';

import './navbar.css'

export function Navbar(){
  return (
    <header> 
        <ul class="nav_bar">
            <h2 class='title'>FadeFinder</h2>
            <li id="navlink"><a href="/">Map</a></li>
            <li id='navlink'><a href="/barberlogin">Barber Login</a></li>
        </ul>
	</header>
  )
}

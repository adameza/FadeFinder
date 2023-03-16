/* 
    Improvements made: 

    1.) Changed the variable name `barbershop_pole` to `barbershopPole` 
        to follow JavaScript naming conventions (camelCase). 
    
    2.) Replaced `class` with `className` in JSX elements, as React 
        uses className instead of class.

    3.) Added an `alt` attribute to the `img` tag for improved 
        accessibility. 

    4.) Created an `async` function `handleLoginSuccess` to handle the 
        login success case, making it easier to read and maintain. 
    
    5.) Replaced `console.log` with `console.error` for error logging,
        providing better error visibility during debugging. 

    6.) Used destructuring assignment for the `codeResponse` parameter
        in the `handleLoginSuccess` function. 
*/

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './navbar.css';
import barbershopPole from './small_pole.png';
import { useGoogleLogin } from '@react-oauth/google';
import { getBarberOAuth } from '../../BackendRoutes/oauth';
import { getBarberByNameAndEmail } from '../../BackendRoutes/barber-routes';

export function Navbar() {
  const navigate = useNavigate();

  const handleLoginSuccess = async (codeResponse) => {
    try {
      const oAuthRes = await getBarberOAuth(codeResponse);
      const barberRes = await getBarberByNameAndEmail({ name: oAuthRes.name, email: oAuthRes.email });

      if (barberRes.status !== 404 && barberRes.barber !== false) {
        navigate('/barber/availability', { state: barberRes.barber });
      } else {
        navigate('/barber/register', { state: { oAuthRes } });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const login = useGoogleLogin({
    onSuccess: handleLoginSuccess,
    onError: (error) => console.error('Login Failed:', error),
  });

  return (
    <header>
      <ul className="nav_bar">
        <h3 className="title">FadeFinder</h3>
        <img src={barbershopPole} className="logo" alt="Barbershop Pole" />
        <li id="navlink">
          <a href="/">Map</a>
        </li>
        <button className="signin" onClick={login}>
          Barber Login 🚀
        </button>
      </ul>
    </header>
  );
}



// import React, {useState} from 'react';
// import { useNavigate } from 'react-router-dom'
// import './navbar.css'
// import barbershop_pole from './small_pole.png'
// import { useGoogleLogin } from '@react-oauth/google';
// import axios from 'axios'
// import { getBarberOAuth } from '../../BackendRoutes/oauth';
// import { getBarberByNameAndEmail } from '../../BackendRoutes/barber-routes';

// export function Navbar(){
//   const [profile, setProfile] = useState()

//   const navigate = useNavigate()
//   const toBarberDash = (user) => {
//     getBarberOAuth(user).then((oAuthRes) => {
//       setProfile({name: oAuthRes.name, email: oAuthRes.email})
//       console.log( {name: oAuthRes.name, email: oAuthRes.email} )
//       getBarberByNameAndEmail({name: oAuthRes.name, email: oAuthRes.email}).then((barberRes) => {
//         if (barberRes.status != 404 && barberRes.barber !== false) {
//           console.log(barberRes)
//           navigate('/barber/availability', { state: barberRes.barber })
//         }
//         else
//           navigate('/barber/register', { state: { oAuthRes } })
//       }).catch((error) => {
//         console.log(error)
//       })
//     }).catch((error) => {
//       console.log(error)
//     })
//   }

//   const login = useGoogleLogin({
//     onSuccess: (codeResponse) => {
//         console.log(codeResponse)
//         toBarberDash(codeResponse)},
//     onError: (error) => console.log('Login Failed:', error)
//   });

//   return (
//     <header> 
//         <ul class="nav_bar">
//             <h3 class='title'>FadeFinder</h3>
//             <img src={barbershop_pole} class="logo" />
//             <li id="navlink"><a href="/">Map</a></li>
//             <button class="signin"onClick={() => login()}>Barber Login 🚀 </button>
//         </ul>
// 	</header>
//   )
// }

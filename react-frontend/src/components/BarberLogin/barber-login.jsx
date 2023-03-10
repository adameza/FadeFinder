import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function BarberLogin() {
  const [username, setUsername] = useState('')

  const handleSubmit = (e) => {
    if (username.trim()) {
      e.preventDefault()
      console.log({ username })
      setUsername('')
    }
  }

  return (
    <main className="login">
      <form className="login__form" onSubmit={handleSubmit}>
        <h2 className="login__title">Barber Login</h2>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          name="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="username"
        />
        <Link to="/barberavail">
          <button className="loginButton" type="submit">
            LOG IN
          </button>
        </Link>
      </form>
    </main>
  )
}

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from '../navbar/navbar'


export default function CustomerLogin() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    if (username.trim() && password.trim()) {
      e.preventDefault()
      console.log({ username, password })
      setPassword('')
      setUsername('')
    }
  }

  return (
    <main className="login">
      <Navbar />
      <form className="login__form" onSubmit={handleSubmit}>
        <h2 className="login__title">Customer Login</h2>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          name="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="username"
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="password"
        />
        <button className="loginButton">LOG IN</button>
        <p style={{ textAlign: 'center', marginTop: '30px' }}>
          Don't have an account?{' '}
          <Link className="link" to="/customerlogin/new">
            Create one
          </Link>
        </p>
      </form>
    </main>
  )
}

import React, { useState } from 'react'

import { addClient } from '../../BackendRoutes/client-routes'

export default function CustomerLogin() {
  const [fullname, setFullname] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    if (fullname.trim() && email.trim()) {
      e.preventDefault()
      let newClient = { name: fullname, email: email }
      addClient(newClient)
      console.log({ fullname, email })
      setFullname('')
      setEmail('')
    }
  }

  return (
    <main className="clientnew">
      <form className="reg_form" onSubmit={handleSubmit}>
        <h2 className="reg_title">Account Registration</h2>
        <label htmlFor="fullname">Full Name</label>
        <input
          id="fullname"
          name="fullname"
          type="text"
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
          className="fullname"
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="email"
        />
        <button className="regButton">Register</button>
      </form>
    </main>
  )
}

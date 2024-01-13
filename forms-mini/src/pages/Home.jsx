import React, { useState } from 'react'
import "./Home.css"

const Home = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")

  const submitForm = async (e) => {
    e.preventDefault()
    const res = await fetch("http://localhost:5000/api/postData", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        message
      })
    });
    const data = await res.json()
    alert(data.message)
    setName("")
    setEmail("")
    setPhone("")
    setMessage("")
    e.target.reset()
  }

  return (
    <div id='mainContainer'>

      <h3>Please Enter Your Responses</h3>

      <form action="/" id='formContainer' onSubmit={submitForm}>
        <div className='indiDiv'>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" onChange={(e) => setName(e.target.value)} />
        </div>
        <div className='indiDiv'>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className='indiDiv'>
          <label htmlFor="phone">Phone</label>
          <input type="tel" name="phone" id="phone" onChange={(e) => setPhone(e.target.value)} />
        </div>
        <div className='indiDiv'>
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" cols="30" rows="5" onChange={(e) => setMessage(e.target.value)}></textarea>
        </div>
        <button type='submit' id='btn'>Submit</button>
      </form>

    </div>
  )
}

export default Home
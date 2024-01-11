import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <>
        <Link to={"/login"}>Login</Link>
        <Link to={"/register"}>Register</Link>
    </>
  )
}

export default Landing
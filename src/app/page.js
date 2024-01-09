import React from 'react'
import Link from 'next/link'
// import { auth } from './firebase'

const page = () => {
  
  return (
    <>
      <h1>Hello Bhai!</h1>
      <Link href = "/Login">Login</Link>
      <Link href="/Register">Register</Link>
      <h1>Home Page~</h1>
    </>
  )
}

export default page
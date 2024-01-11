import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from './firebase';


const Login = () => {
    const navigate = useNavigate();

  const [userEmail, setUserEmail] = useState("");
  const [userPass, setUserPass] = useState("");
  const[errorMsg, setErrorMsg] = useState("");
  const[disableBtn, setDisableBtn] = useState(false);

  

  const submissionHandler = (e) =>{
    e.preventDefault();

    signInWithEmailAndPassword(auth, userEmail, userPass)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log("Login Success");
        setDisableBtn(true);
        navigate('/dashboard');
      })
      .catch((error) => {
        setErrorMsg(error.message);
      });
      }
  return (
    <>
        
    <form action="" onSubmit={submissionHandler}>
        <input type="email" name="" placeholder='Enter Email' id="" value={userEmail} onChange={(e) => { setUserEmail(e.target.value) }}  />
        <input type="password" placeholder='Enter Password'  onChange={(e) => { setUserPass(e.target.value) }} />
        <p>{errorMsg}</p>
        <button type='submit' disabled={disableBtn}>Login</button>
        <p>Not register yet <span><Link  to={"/register"}>Register Here!</Link></span></p>
    </form>

</>
  )
}

export default Login
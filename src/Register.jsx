import React from 'react'
import { useState } from 'react';
import { createUserWithEmailAndPassword , updateProfile} from "firebase/auth";
import { auth, db } from './firebase';
// import { useRouter } from 'next/navigation'
// import Link from "next/link";
import { collection, doc, setDoc } from 'firebase/firestore';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';



const Register = () => {

    const navigate = useNavigate();

    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPass, setUserPass] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const[disableBtn, setDisableBtn] = useState(false)

    
    // here with using createUserWithEmailAndPassword a function of firebase is called will create the user in authencationn in firebase 

    const handleSubmission = (e) => {
        e.preventDefault();

        if (userName === "" || userEmail === "" || userPass === "") {
            setErrorMsg("You haven't entered all fields");
            return;
        }

        setErrorMsg("");

        // Use createUserWithEmailAndPassword

        createUserWithEmailAndPassword(auth, userEmail, userPass)
            .then(async(res) => {
                const user = res.user;
                const userUID = user.uid

                const CollectionRef = doc(db, "UserInfo", userUID);

                const docRef = await setDoc(CollectionRef, {userName}).then((re)=>{
                    
                }).catch((e)=>{
                    console.log("FireStore error is",e.message);
                })

                await updateProfile(user, {
                    displayName: userName
                })
                setDisableBtn(true);

                // after clicking the submit btn page will go to Login Page using router 

                navigate('/login');

                // router.push('/Login');
            })
            .catch((err) => {
                setErrorMsg(err.message)
            });
    };

  return (
<>
            {/* In this Form the user ask to fill the input and after submiting the the form handleSubmission will call! */}

            <form action="" onSubmit={handleSubmission}>
                <input type="text" placeholder='Enter Name' value={userName} onChange={(e) => { setUserName(e.target.value) }} />
                <input type="email" name="" placeholder='Enter Email' value={userEmail} onChange={(e) => { setUserEmail(e.target.value) }} id="" />
                <input type="text" placeholder='Enter Password' value={userPass} onChange={(e) => { setUserPass(e.target.value) }} />

                <button type='submit' disabled={disableBtn} >Register</button>

                <p>{errorMsg}</p>

                <p>Already have an account <span><Link  to={"/login"}>Login Here!</Link></span></p>
            </form>
        </>
  )
}

export default Register
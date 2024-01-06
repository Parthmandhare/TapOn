"use client"

import React, { useEffect, useState } from 'react'
import { auth, db } from '../firebase'
import { collection, doc, getDoc, updateDoc } from 'firebase/firestore'
import Link from 'next/link'

const page = () => {
    const [DisplayCompanyName, setDisplayCompanyName] = useState("")
    const [DisplayPhoneNo, setDisplayPhoneNo] = useState("")
    const [DisplayLink, setDisplayLink] = useState("")
    const[userID, setUserID] = useState("");

    const[updateCompanyName, setUpdateCompanyName] = useState("");
    const[updatePhoneNO, setUpdatePhoneNO] = useState("");
    const[updateLink, setUpdateLink] = useState("");

    // useEffect(()=>{
    //     auth.onAuthStateChanged((user)=>{
    //     // setDisplayUser(user.displayName);
    //     console.log(user.uid);
    //     setUserID(user.uid);

    //     const docRef = doc(db, "UserInfo", userID);
    // const docData = getDoc(docRef);

    // console.log(docData.data());


    // setDisplayCompanyName(docData.data().userData.cname);
    // setDisplayPhoneNo(docData.data().userData.link1);
    // setDisplayLink(docData.data().userData.phoneNo);
    //   })
    // })

    // const userId = auth.currentUser.uid;

    useEffect(()=>{
      auth.onAuthStateChanged((user)=>{
      setUserID(user.uid);
    })
    })


    const getData = async () => {
      const docRef = doc(db, "UserInfo", userID);
  
      const docData = await getDoc(docRef);
  
      setDisplayCompanyName(docData.data().Company_Name);
      setDisplayLink(docData.data().Link);
      setDisplayPhoneNo(docData.data().PhoneNumber);

    }

    window.onload = getData();

    const EditCname = async(e) =>{
      e.preventDefault();
      
      console.log(updateCompanyName);

      const data = {
        Company_Name: updateCompanyName
      };

      const userRef = doc(collection(db, "UserInfo"), userID);
      updateDoc(userRef, data)
      .then(userRef => {
          console.log("Value of an Existing Document Field has been updated");
          setDisplayCompanyName(data.Company_Name)
      })
      .catch(error => {
        console.log(error);
      })
    }

    const EditPhoneNo = async(e) =>{
      e.preventDefault();
      
      console.log(updatePhoneNO);

      const data = {
        PhoneNumber: updatePhoneNO
      };

      const userRef = doc(collection(db, "UserInfo"), userID);
      updateDoc(userRef, data)
      .then(userRef => {
          console.log("Value of an Existing Document Field has been updated");
          setDisplayPhoneNo(data.PhoneNumber)
      })
      .catch(error => {
        console.log(error);
      })
    }

    const EditLink = async(e) =>{
      e.preventDefault();
      
      console.log(updateLink);

      const data = {
        Link: updateLink
      };

      const userRef = doc(collection(db, "UserInfo"), userID);
      updateDoc(userRef, data)
      .then(userRef => {
          console.log("Value of an Existing Document Field has been updated");
          setDisplayLink(data.Link)
      })
      .catch(error => {
        console.log(error);
      })
    }

    
  return (
    <>
        {userID}

            <br />
            {DisplayCompanyName}
            <input type="text" placeholder='Update company name' value={updateCompanyName} onChange={(e)=>{setUpdateCompanyName(e.target.value)}}/>
            <button onClick={EditCname}>Update</button>
            <br />
            {DisplayPhoneNo}
            <input type="text" placeholder='Update Phone Number'  value={updatePhoneNO} onChange={(e)=>{setUpdatePhoneNO(e.target.value)}} />
            <button onClick={EditPhoneNo}>update</button>
            <br />
            {DisplayLink}
            <input type="text" placeholder='Update link'  value={updateLink} onChange={(e)=>{setUpdateLink(e.target.value)}}/>
            <button onClick={EditLink}>Update</button>
      

        <Link href="/DashBoard">Go to Dashboard</Link>
    </>
  )
}

export default page
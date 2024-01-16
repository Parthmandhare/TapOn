import React, { useEffect, useState } from 'react'
import { auth, db, imageDb } from '../pages/auth/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { signOut } from "firebase/auth";
import { collection, doc, getDoc, getDocs, setDoc, updateDoc } from "firebase/firestore";

import { getDownloadURL, ref, uploadBytes, uploadBytesResumable } from 'firebase/storage';

import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {

  
  const navigate = useNavigate();

  const[displayUser, setDisplayUser] = useState("Please Login Bhai!");
  const[userID, setUserID] = useState("");

  const[displayCname , setdisplayCname] = useState("");
  const[displaylink1 , setdisplaylink1] = useState("");
  const[displayPhoneNo , setdisplayPhoneNo] = useState("");

  const[displayUserName, setDisplayUserName] = useState("");

  const[displayPhoto, setDisplayPhoto] = useState("");

  const[displayAddress, setDisplayAddress] = useState("");

  // variables for inputing the data

  const[InputCname , setInputCname] = useState("");
  const[Inputlink1 , setInputlink1] = useState("");
  const[InputPhoneNo , setInputPhoneNo] = useState("");
  const[InputInsta, setInputInsta] =useState("");
  const[InputFacebook, setInputFacebook] = useState("");
  const[InputX, setInputX] =useState("");
  const[InputAddress, setInputAddress] = useState("");

  const[userEmail, setUserEmail] = useState("");
  const[uploadPhoto, setUploadPhoto] = useState("");

  const[ImageURL, setImageURL] = useState("");

  const[InputDesc, setInputDesc] = useState("");

  useEffect(()=>{
      auth.onAuthStateChanged((user)=>{
      setDisplayUser(user.displayName);
      // console.log(user.email);
      setUserID(user.uid);
      setUserEmail(user.email)
    })
  })

  const handleSignOut = () =>{
    signOut(auth).then(() => {
      console.log("Loged Out");
      navigate('/login');
    }).catch((error) => {
      console.log(error.message);
    });
  }


  const getData = async () => {
    const docRef = doc(db, "UserInfo", userID);

    const docData = await getDoc(docRef);

    console.log(docData.data());

    setdisplayCname(docData.data().Company_Name);
    setdisplaylink1(docData.data().Link);
    setdisplayPhoneNo(docData.data().PhoneNumber);
    setDisplayUserName(docData.data().User_Name);
    setDisplayPhoto(docData.data().Profile_URl);
    setDisplayAddress(docData.data().Address);
  }

  let isNullOrWhiteSpaces = value =>{
    value = value.toString();
    return (value == null || value.replaceAll(' ', '').length < 1);
  }

  const submitInNewWay = (e) =>{

    e.preventDefault();

    if(isNullOrWhiteSpaces (InputCname) || isNullOrWhiteSpaces(InputPhoneNo) || isNullOrWhiteSpaces(Inputlink1) || isNullOrWhiteSpaces(InputFacebook)|| isNullOrWhiteSpaces(InputInsta)|| isNullOrWhiteSpaces(InputX)){
      alert("Fill all the field Bro! If you dont have any social media link then just enter random!");
      return;
    }

    const data = {
      User_Name: displayUser,
      Company_Name : InputCname,
      PhoneNumber : InputPhoneNo,
      Link: Inputlink1,
      Instagram_Link: InputInsta,
      Facebook_Link: InputFacebook,
      X_Link: InputX,
      Profile_URl: ImageURL,
      Address: InputAddress,
      Desc: InputDesc
    }

    const userRef = doc(collection(db, "UserInfo"), userID);

    setDoc(userRef, data)
    .then(() => {
        console.log("Document has been added successfully");
        setInputCname("");
        setInputPhoneNo("");
        setInputlink1("");
        setInputFacebook("");
        setInputInsta("");
        setInputX("")
        setImageURL("");
        setInputAddress("");
    })
    .catch(error => {
        console.log(error);
    })

    const imgRef = ref(imageDb, `files/${userID}`);
    const uploadTask = uploadBytesResumable(imgRef, uploadPhoto);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Progress handling (e.g., update a progress bar)
      },
      (error) => {
        // Error handling
        console.error(error);
        // Alert the user about the error
      },
      async () => {
        const downloadURL = await getDownloadURL(imgRef);
        setImageURL(downloadURL);

        // Update Firestore with download URL
        const userRef = doc(collection(db, "UserInfo"), userID);
        await updateDoc(userRef, { Profile_URl: downloadURL });

        console.log("Document updated with download URL:", downloadURL);
        // Alert the user about successful upload and update
      }
    );

  }


  return (
    <>
       <h1>Hello {displayUser}</h1>

<h2>User Email {userEmail}</h2>

 <h3>Detail Form!</h3>

<input type="text" placeholder='Enter Company name' value={InputCname} onChange={(e) => {setInputCname(e.target.value)}}/>
<input type="text" placeholder='Enter Phone No' value={InputPhoneNo} onChange={(e) => {setInputPhoneNo(e.target.value)}}/>
<input type="text" placeholder='Enter Comapany Link' value={Inputlink1} onChange={(e) => {setInputlink1(e.target.value)}}/>

<input type="text" placeholder='Enter Instagram Link' value={InputInsta} onChange={(e)=>{setInputInsta(e.target.value)}}/>
<input type="text" placeholder='Enter Facebook Link' value={InputFacebook} onChange={(e)=>{setInputFacebook(e.target.value)}}/>
<input type="text" placeholder='Enter X(Twitter) Link' value={InputX} onChange={(e)=>{setInputX(e.target.value)}}/>

<input type="text" placeholder='Enter your Address' value={InputAddress} onChange={(e)=>{setInputAddress(e.target.value)}}/>

<input type="text" placeholder='Enter your Desc' value={InputDesc} onChange={(e)=>{setInputDesc(e.target.value)}}/>

{/* input profile pic / Comapany logo  */}

<input type="file" placeholder='Upload Your Profile/Comapany Photo'  onChange={(e)=>{setUploadPhoto(e.target.files[0])}}/>

<button onClick={submitInNewWay}>Submit In new Way!</button>

{/* practice purpose */}
<button onClick={getData}>Get the data</button>

<button onClick={handleSignOut} >SignOut!</button>

   {displayCname }

   {displaylink1}  
   
   {displayPhoneNo }

   {displayAddress}
<h1>Your Name</h1>

{displayUserName}

<img  src={displayPhoto}/>\

<Link to={"/update"}>Update The info!</Link>

<br />
<br />

<a href={`/profile/${userID}`}>View Mini Website!</a>
    </>
  )
}

export default Dashboard
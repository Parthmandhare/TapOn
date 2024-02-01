import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Button from '../../components/Navbars/Button'
import { auth, db } from '../auth/firebase';
import { collection, doc, getDoc, updateDoc } from 'firebase/firestore';
import { updateProfile } from 'firebase/auth';


const PadBox = styled.div`
height: 100vh;
/* background-color: antiquewhite; */
width: 100vh;
display: flex; /* Added flex display */
flex-direction: column;

`;
const Buttoncontainer= styled.div`
width: fit-content;
margin-top: 20px;



`

const Label = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
  font-weight: bold;
  font-size: 24px;
  & p {
    color: grey;
    font-weight: normal;
    font-size: 16px;
  }
`;


function ProfilePanel() {

  const[updateUserName, setUpdateUserName] = useState("");
  const[updateFullName, setUpdateFullName] = useState("");
  
  const[displayUserName, setDisplayUserName] = useState("");
  const[displayFullName, setDisplayFullName] = useState("");
  const[userID, setUserID] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      // setUpdateFullName(user.displayName);
      setUserID(user.uid);
    });
    getData();
  });

  const getData = async () => {
    const docRef = doc(db, "UserInfo", userID);

    const docData = await getDoc(docRef);

    setDisplayFullName(docData.data().Full_Name);
    setDisplayUserName(docData.data().User_Name);
  };


  const updateInfo = (e)=> {
    e.preventDefault();

    const data = {
      User_Name: updateUserName,
      Full_Name: updateFullName
    }

    const userRef = doc(collection(db, "UserInfo"), userID);

    updateDoc(userRef, data)
      .then(() => {
        console.log("Document has been added successfully");
        setUpdateFullName("");
        setUpdateUserName("");
      })
      .catch((error) => {
        console.log(error);
      });

      updateProfile(auth.currentUser, {
        displayName: updateFullName
      }).then(() => {
        // Profile updated!
        // ...
      }).catch((error) => {
        // An error occurred
        // ...
      });
  }

  return (
    <>
    <PadBox>
      
         <Label>
          <h2>Profile</h2>
            <p>This information will be displayed publicly, so be careful what you share.</p>
          </Label>
         
          <form className=" flex flex-col w-full mt-12 mb-12 ">

            <div className="relative z-0 w-full mb-5 group">
              <input type="text" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" value={updateUserName} onChange={(e)=>{setUpdateUserName(e.target.value)}}/>
              <label  className="flex peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">User Name - {displayUserName}</label>
              </div>


              <div className="relative z-0 w-full mb-5 group">
              <input type="text" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={updateFullName} onChange={(e)=>{setUpdateFullName(e.target.value)}}/>
              <label className="flex peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Full Name - {displayFullName}</label>
              </div>


              <Buttoncontainer>

                <button onClick={updateInfo} className=' bg-black text-white p-3 px-6 rounded-3xl'>Update</button>
              </Buttoncontainer>



              </form>
              
             
        
    </PadBox>
    {/* <Imgcontainer>
    
              </Imgcontainer> */}
    
    </>
  );
}




export default ProfilePanel;

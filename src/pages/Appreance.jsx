import React, { useEffect, useState } from "react";
import { auth, db, imageDb } from "./auth/firebase";
import { collection, doc, getDoc, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

import img1 from "../assets/img/Theme1.jpg"
import img2 from "../assets/img/Theme2.jpg"

const Appreance = () => {
  const [Theme_Selected, setTheme_Selected] = useState("Theme1");
  const [UserID, setUserID] = useState("");
  const [uploadTheme, setuploadTheme] = useState("");
  const [theme_url, setTheme_url] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUserID(user.uid);
    });
    setThemes();
  });
  

  const setThemes = async () => {
    const docRef = doc(db, "UserInfo", UserID);

    const docData = await getDoc(docRef);

    setTheme_Selected(docData.data().Theme);
    setTheme_url(docData.data().Theme_url);
  };


  const changeTheme = async (customTheme) => {


    const imgRef = ref(imageDb, `Themes/${customTheme}.jpg`);

    const url = await getDownloadURL(imgRef);
    
    setuploadTheme(url)


    const docRef = doc(db, "UserInfo", UserID);


    const docData = await getDoc(docRef);

    const data = {
      Theme: customTheme,
      Theme_url: url
    };

    updateDoc(docRef, data)
      .then(() => {
        console.log("Document has been added successfully");
        setTheme_Selected(customTheme);
      })
      .catch((error) => {
        console.log(error);
      });


  };


  return (
    <>
      <div className="flex flex-row gap-5">
        <div className="flex flex-col gap-5 justify-start">
          <h1>Select Themes!</h1>

          <div
            onClick={() => {
              changeTheme("Theme1");
            }}
          >
            <img src={img1} alt="" />
          </div>
          <div
            onClick={() => {
              changeTheme("Theme2");
            }}
          >
            <img src={img2} alt="" />
          </div>
          <div
            onClick={() => {
              changeTheme("Theme3");
            }}
          >
            theme3
          </div>
          <div
            onClick={() => {
              changeTheme("Theme4");
            }}
          >
            theme4
          </div>
          <div
            onClick={() => {
              changeTheme("Theme5");
            }}
          >
            theme5
          </div>
          <div
            onClick={() => {
              changeTheme("Theme6");
            }}
          >
            theme6
          </div>
        </div>

        <div className="flex flex-col">
          <div>Phone</div>
          <div>
            <img src={theme_url} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Appreance;

import React, { useState, useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase';


const HomePage = ({username}: any) => {
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              const uid = user.uid;
              console.log("uid", uid)
            } else {
              console.log("user is logged out")
            }
          });

    }, [])
    return (
        <div>Welcome, {username}</div>
    )
}

export default HomePage
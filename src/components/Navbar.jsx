import React, { useContext } from 'react'
import Ninja from "../img/ninja.png";
// import {signOut} from "firebase/auth"
// import { auth } from '../firebase'
// import { AuthContext } from '../context/AuthContext'

const Navbar = () => {
  // const {currentUser} = useContext(AuthContext)

  return (
    <div className='navbar'>
      <span className="logo">Chats</span>
      <div className="user">
        <img src={Ninja} alt="ninja.png" />
        <span> Daniel</span>
        <button>logout</button>
        {/* <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        <button onClick={()=>signOut(auth)}>logout</button> */}
      </div>
    </div>
  )
}

export default Navbar
import React, { useState } from 'react'
import google from  '../assets/google-logo.png'
import meta from '../assets/meta-logo.png'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../config/firebase'
function Auth() {
    const nav = useNavigate()
const [Email,setEmail] = useState('')
const [Password,setPassword] = useState('')
    const SignInWithFireBase =  (e)=>{
        e.preventDefault();
        if(Email && Password){

            createUserWithEmailAndPassword(auth,Email,Password).then(()=>{
            console.log('working');
            alert('UserCreated!')
nav('/')
          })
        }
    }
  return (
   <div className="AuthPage">
    <form onSubmit={SignInWithFireBase}>
        <h1>Connector</h1> 
        <div className="inputSec">
            <input type="email" onChange={(val)=>setEmail(val.target.value)} placeholder='Enter Your E-mail...' />
        </div>
        <div className="inputSec">
            <input type="password" onChange={(val)=>setPassword(val.target.value)} placeholder='Enter Your Password..' />
        </div>
        <button className='sign-btn'>Sign In</button>
        <span>Or SignIn With</span>
        <div className="btn-sec">
            <button className='link-btn'><img src={google} width='25' alt="" />Google</button>
            <button className='link-btn'><img src={meta} width='25' alt="" />Meta</button>
        </div>
    </form>
   </div>
  )
}

export default Auth
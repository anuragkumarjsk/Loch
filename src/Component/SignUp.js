import React,{useRef, useState} from 'react'
import './signup.css'
function SignUp() {
    const emailref = useRef()
    const [error,seterror]= useState(false);
    const handleclick = () =>{
        if(emailref.current.value.includes('@') 
        && emailref.current.value.includes('.'))
        {
            window.location.href = 'https://app.loch.one/welcome'
        }
        else{
            seterror(true)
        }
    }
  return (
    <div className='signup_box'>
       <p className='signup_header'>
       Sign up for
       exclusive access.
       </p>
       <input ref={emailref} placeholder='Your email address' className='signup_input'/>
       {error ?<p>Please enter a valid email</p>:null}
       <div className='get_started' onClick={handleclick}>
        Get Started
       </div>
       <p className='message'>
       You’ll receive an email with an invite link to join.
       </p>
    </div>
  )
}

export default SignUp
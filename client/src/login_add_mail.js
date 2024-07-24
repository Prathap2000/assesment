
import React from 'react'
import { useLocation } from 'react-router-dom'
import logo from './logo.png'
import './login_add_mail.css'


export default function Login_add_mail() {
  return (
    <div className='main vh-100'>
      <div className='d-flex justify-content-center' id='box_logo'>
        <img src={logo} alt="abc" className='reachinbox_logo' ></img>
      </div>
      <hr className='line' />
      <div className='login_box d-flex align-items-center just'>
        <div className=' login_box_1'>
        <h4>Create a new account</h4>
        <button className='btn_google'>Sign Up with Google</button><br/>
        <button className='create_ac'>Create an Account</button>
        <p className='sign_in'>Already have an account? <b>Sign In</b></p>
        </div>


      </div>
    </div>


  )
}


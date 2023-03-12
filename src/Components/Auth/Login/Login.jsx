import React from 'react';
import css from '../Login/Login.css';
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";

export default function Login() {
  return (
      <div className="Login-bg">
    <div className='Login'>
        <div className='variable'>
            <a href="/Sign"><button className='var-login'>Ro’yxatdan o’tish</button></a>
        </div>
        <form>
        <TextField id="standard-basic" label="Telefon raqam" variant="standard" className='login-phone' />
        <TextField id="standard-basic" label="Parol" type={'password'} variant="standard" className='login-pass' />
        <Button variant="contained" className='login-btn' type='submit'><a href='/'>Kirish</a></Button> 
        </form>
    </div>
      </div>
  )
}

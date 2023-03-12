import React from 'react';
import css from '../Sign/Sign.css';
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import { NavLink } from 'react-router-dom';
export default function Login() {
  return (
    <div className='Sign'>
          <div className='variable'>
            <a href='/Login'><button className='var-sign'>Kirish</button></a>
        </div>
        <form action='/'>
        <TextField id="standard-basic" label="Foydalanuvchi nomi" variant="standard" className='sign-name' type={'text'}/>
        <TextField id="standard-basic" label="Elektron pochta (optinal)" variant="standard" className='sign-email' type={'email'} />
        <TextField id="standard-basic" label="Parolni o’ylab toping" type={'password'} variant="standard" className='sign-pass' />
        <p className='accsess-sign'>“Ro’yxatdan o’tish” tugmasini bosgan holda, Siz <a href="#">Foydalanish shartlarini qabul qilgan xisoblanasiz.</a></p>
        <a href='/'> <Button variant="contained" className='sign-btn' type='submit'>Ro’yxatdan o’tish</Button></a> 
        </form>
    </div>
  )
}

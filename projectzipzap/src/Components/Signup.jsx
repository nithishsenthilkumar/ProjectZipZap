import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './cssfiles/Signup.css';
import logo from './logo.jpg';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Signup() {

    const [custPhone,setPhone] = useState();
    const [custName,setName] = useState();
    const [custAddress,setAddress] = useState();
    const [custEmail,setEmail] = useState();
    const [custPassword,setPassword] = useState();

    const handlePhone = (event) => {
        setPhone(event.target.value);
        console.log(custPhone);
    }
    const handleName = (event) => {
        setName(event.target.value);
        console.log(custName);
    }
    const handleAddress = (event) => {
        setAddress(event.target.value);
        console.log(custAddress);
    }
    const handleEmail = (event) => {
        setEmail(event.target.value);
        console.log(custEmail);
    }
    const handlePassword = (event) => {
        setPassword(event.target.value);
        console.log(custPassword);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("Coming");
        const data = {
            phone: custPhone,
            name: custName,
            password: custPassword,
            address: custAddress,
            email: custEmail
        }

        try{
            await axios.post("http://localhost:8085/addcustomer",data)
            .then(res => console.log(res.data));
        }catch(error){
            alert("Account already exists or Error creating account");
        }
    }

  return (
    <div className='signup'>
        <Box
            className='formbox'
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            autoComplete="off"
        >
            <img className='logo' src={logo} alt='LOGO'/>
            <div className='inputarea' label=''>
                <h1>SIGNUP</h1>
                <TextField
                    required
                    id="outlined-required"
                    label="Mobile Number"
                    placeholder="without country code"
                    autoComplete="off"
                    onChange={handlePhone}
                />
                
                <TextField id="outlined-basic" label="Name" variant="outlined" autoComplete="off" onChange={handleName}/>

                <TextField id="outlined-basic" label="Enter your Address" variant="outlined" autoComplete="off" onChange={handleAddress}/>

                <TextField id="outlined-basic" label="Type your email" variant="outlined" autoComplete="off" onChange={handleEmail}/>

                <TextField
                    required
                    id="outlined-password-input"
                    label="Type a password"
                    type="password"
                    autoComplete="off"
                    onChange={handlePassword}
                />
                <Button variant="contained" sx={{ backgroundColor: '#00000081', color: '#b38a07de' }} onClick={handleSubmit}>
                    <Link to="/login">
                        SUBMIT
                    </Link>
                </Button>
            </div>
        </Box>
    </div>
  )
}

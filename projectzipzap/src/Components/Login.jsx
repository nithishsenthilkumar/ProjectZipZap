import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import './cssfiles/Login.css';
import { Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import logo from './logo.jpg'

export default function Login() {
    const [phone,setPhone] = useState();
    const [password,setPassword] = useState();
    const navigate = useNavigate();

    const handlePhone = async(event) => {
        event.preventDefault();
        setPhone(event.target.value);
        console.log(phone);
    }
    const handlePassword = async(event) => {
        event.preventDefault();
        setPassword(event.target.value);
        console.log(password);
    }

    function validate(data){
        if(data === password)
            return true;
        else 
            return false;
    }

    const handleSubmit = async(event) => {
        event.preventDefault();
        try{
            const pass = await axios.get("http://localhost:8085/getpassword/" + phone);
            console.log(pass.data);
            const flag = validate(pass.data);
            if(!flag)
            {
                alert("Invalid Password!!");
            }
            else{
                console.log("Credentials okay");
                const id = await axios.get("http://localhost:8085/getId/" + phone);
                console.log(id.data);
                navigate('/home/'+id.data);
            }
        }catch(error){
            alert("Invalid Credentials!!")
        }

    }

  return (
    <div className='login'>
        <div className='credentialarea'>
            <div>
                <img className='logo' src={logo} alt='logo'/>
            </div>
            <div className='side2'>
                <h1>LOGIN</h1>
                <input
                    type="text"
                    id="mobile"
                    placeholder="Mobile Number"
                    value={phone}
                    onChange={handlePhone}
                    className="password-input"
                />
                <br></br>

                <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    value={password}
                    onChange={handlePassword}
                    className="password-input"
                />

                <h4>Dont have an account? <a href="./signup">Signup</a></h4>
                
                <Button variant="outlined" onClick={handleSubmit} id="button">
                    <Link to="/home" id="link">
                        SUBMIT
                    </Link>
                </Button>
            </div>
        </div>
    </div>
  )
}

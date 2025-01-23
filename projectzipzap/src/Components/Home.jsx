import { Button } from '@mui/material';
import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate } from 'react-router-dom';

import './cssfiles/Home.css'

export default function Home(props) {

    const [custPhone,setPhone] = useState();
    const [custName,setName] = useState();
    const [custAddress,setAddress] = useState();
    const [custEmail,setEmail] = useState();
    const [open,setOpen] = useState(false);
    const [custSender,setCustSender] = useState(0);
    const [custid,setCustid] = useState(0);

    const [sentdata,setSentdata] = useState([]);
    const [recdata,setRecdata] = useState([]);

    const [sentcurrentdata,setSentcurrentdata] = useState([]);
    const [reccurrentdata,setReccurrentdata] = useState([]);
    
    const [tempName,setTempName] = useState();
    const [tempAddress,setTempAddress] = useState();
    const [tempEmail,setTempEmail] = useState();

    const [updateOpen,setUpdateOpen] = useState(false);
    const [deleteOpen,setDeleteOpen] = useState(false);

    const [delid,setDelid] = useState();

    const handleDelId = (event) => {
        setDelid(event.target.value);
    }
        
    const handleTempName = (event) => {
        setTempName(event.target.value);
        console.log(tempName);
    }
    const handleTempAddress = (event) => {
        setTempAddress(event.target.value);
        console.log(tempAddress);
    }
    const handleTempEmail = (event) => {
        setTempEmail(event.target.value);
        console.log(tempEmail);
    }
    const navigate = useNavigate();
    var Sent;
    var Rec;  
    
    const {id} = useParams();

    let profile;
    
    const profileArea = async () => {
        profile = await axios.get("http://localhost:8085/getcustomer/"+id);
        // console.log(profile.data);
        // console.log(profile.data.custId);
        setPhone(profile.data.phone);
        setName(profile.data.name);
        setAddress(profile.data.address);
        setEmail(profile.data.email);
        setCustid(profile.data.custId);
    }
    useEffect(()=> {
        profileArea();
    },[])

    useEffect(()=>{
        const handleSent = async () => {
            try
            {
                Sent = await axios.get("http://localhost:8085/getjobbysender/"+custid);
                // console.log(Sent.data);
                // console.log(Sent.data[0]);
                // console.log(Sent.data[0].status);
                setSentdata(Sent.data);
                // console.log("Check");
                // console.log(sentdata);
            }catch(error){
                
            }
        }

        const handleRec = async () => {
            try{
                Rec = await axios.get("http://localhost:8085/getjobbyreceiver/"+custid);
                setRecdata(Rec.data);
                // console.log(recdata);
            }catch(error){

            }
        }

        const handleCurrentSent = async () => {
            try
            {
                Sent = await axios.get("http://localhost:8085/getjobbysendercurrent/"+custid);
                setSentcurrentdata(Sent.data);
            }catch(error){
                
            }
        }

        const handleCurrentRec = async () => {
            try
            {
                Sent = await axios.get("http://localhost:8085/getjobbyrecievercurrent/"+custid);
                setReccurrentdata(Sent.data);
            }catch(error){

            }
        }

        handleCurrentSent();
        handleCurrentRec();
        handleRec();
        handleSent();
})
    
    // console.log(id);

    const handleRecId = (event) => {
        setCustSender(event.target.value);
        // console.log(custSender);
    }

    const handleNewPack = () => {
        setOpen(true);
        // console.log("Inside pack"+custid);
    }

    const handleDeletePack = () => {
        setDeleteOpen(true);
    }

    const handleUpdateProfile = () => {
        setUpdateOpen(true);
    }

    const handleClose = async(event) =>{
        event.preventDefault();
        const data = {
            senderId: custid,
            receiverId: custSender,
            status: "Not yet dispatched"
        }
        try{
            await axios.post("http://localhost:8085/addjob",data)
            .then(res => console.log(res.data));
        }catch(error){
            console.log(error);
        }
        setCustSender(custid);
        setOpen(false);
    }

    const handleDelete = async(event) => {
        event.preventDefault();
        try{
            await axios.delete("http://localhost:8085/deletejob?id="+delid);
        }catch(error){

        }
        setDeleteOpen(false);
    }

    const handleCancel = async(event) => {
        event.preventDefault();
        setOpen(false);
    }
    const handleCancelUpdate = async(event) => {
        event.preventDefault();
        setUpdateOpen(false);
    }

    const handleCanceldelete = async(event) => {
        event.preventDefault();
        setDeleteOpen(false);
    }

    const handleUpdate = async(event) => {
        event.preventDefault();
        const data = {
            name: tempName,
            address: tempAddress,
            email: tempEmail
        }
        try{
            await axios.put("http://localhost:8085/updatecustomer/"+custid,data)
            .then(res => console.log(res.data));
        }catch(error){
            alert("Updatiom failed");
            console.log(error);
        }
        setUpdateOpen(false);
        profileArea();
    }

    const handleBack = () => {
        navigate('/login');
    }

    const s = sentdata.map((item) => (
        <tr key={item.packId}>
            <td>{item.packId}</td>
            <td>{item.senderId}</td>
            <td>{item.receiverId}</td>
            <td>{item.status}</td>
        </tr>
    ))

    const r = recdata.map((item) => (
        <tr key={item.packId}>
            <td>{item.packId}</td>
            <td>{item.senderId}</td>
            <td>{item.receiverId}</td>
            <td>{item.status}</td>
        </tr>
    ))
    
    const sCurrent = sentcurrentdata.map((item) => (
        <tr key={item.packId}>
            <td>{item.packId}</td>
            <td>{item.senderId}</td>
            <td>{item.receiverId}</td>
            <td>{item.status}</td>
        </tr>
    ))

    const rCurrent = reccurrentdata.map((item) => (
        <tr key={item.packId}>
            <td>{item.packId}</td>
            <td>{item.senderId}</td>
            <td>{item.receiverId}</td>
            <td>{item.status}</td>
        </tr>
    ))

  return (
    <div className='homepage'>
        <div className='profileArea'>
            <h2>PROFILE</h2>
            <h3>Customer Phone : {custPhone}</h3>
            <h3>Customer Name : {custName}</h3>
            <h3>Customer Address : {custAddress}</h3>
            <h3>Customer Email : {custEmail}</h3>
            <br></br>
            <Button onClick={handleUpdateProfile} id="update">
                Update Profile
            </Button> &nbsp; &nbsp;
            <Dialog open={updateOpen} onClose={handleUpdate}>
                <DialogTitle>Subscribe</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Enter the receiver Id 
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Name"
                            type="text"
                            fullWidth
                            variant="standard"
                            onChange={handleTempName}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Address"
                            type="text"
                            fullWidth
                            variant="standard"
                            onChange={handleTempAddress}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Email"
                            type="text"
                            fullWidth
                            variant="standard"
                            onChange={handleTempEmail}
                        />
                    </DialogContent>
                <DialogActions>
                    <Button onClick={handleCancelUpdate}>Cancel</Button>
                    <Button onClick={handleUpdate}>Update</Button>
                </DialogActions>
            </Dialog>
            <Button onClick={handleBack} id="update">
                Logout
            </Button>
        </div>
        
        <div className='packageTrack'>
            <div>
                <div className='sentPackages'>
                    <h3>ACTIVE PACKAGES</h3>
                    <table>
                        <thead>
                            <tr>
                                <td>PackId</td>
                                <td>Sender Id</td>
                                <td>Receiver Id</td>
                                <td>Status</td>
                            </tr>
                        </thead>
                        <tbody>
                            {sCurrent}
                        </tbody>
                    </table>
                </div>
                <div className='sentPackages'>
                    <h3>TO RECIEVE PACKAGES</h3>
                    <table>
                        <thead>
                            <tr>
                                <td>PackId</td>
                                <td>Sender Id</td>
                                <td>Receiver Id</td>
                                <td>Status</td>
                            </tr>
                        </thead>
                        <tbody>
                            {rCurrent}
                        </tbody>
                    </table>
                </div>
            </div>
            <br></br>
            <Button onClick={handleNewPack} id="update">
                NEW PACKAGE
            </Button>&nbsp; &nbsp;
            <Button onClick={handleDeletePack} id="update">
                DELETE PACKAGE
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Subscribe</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Enter the receiver Id 
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Receiver Id"
                            type="number"
                            fullWidth
                            variant="standard"
                            onChange={handleRecId}
                        />
                    </DialogContent>
                <DialogActions>
                    <Button onClick={handleCancel}>Cancel</Button>
                    <Button onClick={handleClose}>Add Package</Button>
                </DialogActions>
            </Dialog>
            <Dialog open={deleteOpen} onClose={handleDelete}>
                <DialogTitle>Subscribe</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Enter the Package Id 
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Package Id"
                            type="number"
                            fullWidth
                            variant="standard"
                            onChange={handleDelId}
                        />
                    </DialogContent>
                <DialogActions>
                    <Button onClick={handleCanceldelete}>Cancel</Button>
                    <Button onClick={handleDelete}>Delete Package</Button>
                </DialogActions>
            </Dialog>
        </div>
        <div className='packageHistory'>
            <div className='sentPackages'>
                    <h3>PACKAGES SENT</h3>
                <table>
                    <thead>
                        <tr>
                            <td>PackId</td>
                            <td>Sender Id</td>
                            <td>Receiver Id</td>
                            <td>Status</td>
                        </tr>
                    </thead>
                    <tbody>
                        {s}
                    </tbody>
                </table>
            </div>
            <div className='receivedPackages'>
                    <h3>PACKAGES RECIEVED</h3>
                <table>
                    <thead>
                        <tr>
                            <td>PackId</td>
                            <td>Sender Id</td>
                            <td>Receiver Id</td>
                            <td>Status</td>
                        </tr>
                    </thead>
                    <tbody>
                        {r}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

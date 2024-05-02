
"use client"
import { Alert, Box, Button, Container, Stack, TextField, Typography } from "@mui/material";
import { useState } from 'react'; 

export default function AddPatient() {
    const [name, setPatientName] = useState('');
    const [age, setAge] = useState('');
    const [address, setAddress] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [email, setEmail] = useState('');


    const handleSave = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/patients', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    age,
                    address,
                    mobileNumber,
                    email,


                }),
            });
            if (!response.ok) {
                throw new Error('Failed to save data');
            }
            // Clear the input fields after successful save
            setPatientName('');
            setAge('');
            setAddress('');
            setMobileNumber('');
            setEmail('');
            alert('Patient added successfully');
            
        } catch (error) {
            console.error('Error saving data:', error);
            alert('Failed to save patient');
        }
    };


    return (
        <Container >
               
            <Typography variant="h6" align="center" padding={4} border={3} sx={{backgroundColor:'#2D2440', color:'white'}}>
                Add Patient 
            </Typography>

            <Stack spacing={4} padding={2} >
                <TextField border={1} id="outlined-basic" type="text" label="Patient Name" variant="outlined" value={name}
                    onChange={(e) => setPatientName(e.target.value)} />
                <TextField border={1} id="outlined-basic" type="text" label="Age" variant="outlined" value={age}
                    onChange={(e) => setAge(e.target.value)} />
                <TextField border={1} id="outlined-basic" type="text" label="Address" variant="outlined" value={address}
                    onChange={(e) => setAddress(e.target.value)} />
                <TextField border={1} id="outlined-basic" type="tel" label="MobileNumber" variant="outlined" value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)} />
                <TextField border={1} id="outlined-basic" type="email" label="Email" variant="outlined" value={email}
                    onChange={(e) => setEmail(e.target.value)} />

                <Button variant="contained" color="success" onClick={handleSave}>
                    SAVE
                </Button>

            </Stack>

        </Container>
    ) 
}

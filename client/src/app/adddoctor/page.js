
"use client"
import { Alert, Box, Button, Container, Stack, TextField, Typography } from "@mui/material";
import { useState } from 'react'; 

export default function AddDoctor() {
    const [name, setDoctorName] = useState('');
    const [specialization, setSpecialization] = useState('');

    const handleSave = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/doctors', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    specialization,
                }),
            });
            if (!response.ok) {
                throw new Error('Failed to save data');
            }
            // Clear the input fields after successful save
            setDoctorName('');
            setSpecialization('');
            alert('Doctor added successfully');
            
        } catch (error) {
            console.error('Error saving data:', error);
            alert('Failed to save doctor');
        }
    };


    return (
        <Container >

            <Typography variant="h6" border={2} sx={{backgroundColor:'#2D2440', color:'white'}} align="center" padding={6} >
                Add Doctor 
            </Typography>

            <Stack spacing={4} padding={2}>
                <TextField id="outlined-basic" label="Doctor Name" variant="outlined" value={name}
                    onChange={(e) => setDoctorName(e.target.value)} />
                <TextField id="outlined-basic" label="Specialization" variant="outlined" value={specialization}
                    onChange={(e) => setSpecialization(e.target.value)} />

                <Button variant="contained" color="success" onClick={handleSave}>
                    SAVE
                </Button>

            </Stack>

        </Container>
    ) 
}

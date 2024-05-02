
"use client"
import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import DeleteSweepTwoToneIcon from '@mui/icons-material/DeleteSweepTwoTone';

function createData(id, doctor_name, specialization) {
  return { id, doctor_name, specialization };
}

export default function BasicTable() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/doctors/all');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      const formattedData = data.map(doctor => createData(doctor.id, doctor.name, doctor.specialization));
      setRows(formattedData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/api/doctors/delete/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        
      }
      // Remove the deleted row from the table
      setRows(rows.filter(row => row.id !== id));
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID </TableCell>
            <TableCell align="right">Doctor Name</TableCell>
            <TableCell align="right">Specialization</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.doctor_name}</TableCell>
              <TableCell align="right">{row.specialization}</TableCell>
              <TableCell align="right">
                <Button onClick={() => handleDelete(row.id)}>
                    <DeleteSweepTwoToneIcon/>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

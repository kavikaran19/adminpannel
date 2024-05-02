
import { Container, Fab, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/add'
import Link from "next/link";
import Patienttable from "@/components/Patienttable";

export default function Patient() {
return (
    <Container >
        
    <Link href={"./addpatient"} >
    <Typography >ADD Patient</Typography>
    <Fab color="secondary" aria-label="add"  sx={{backgroundColor:'orange'}}>
    <AddIcon />
    </Fab>
    
    </Link>
    <Patienttable/>
    
   
   
    </Container>
) 
}

import { Container, Fab, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/add'
import Link from "next/link";
import Doctortable from "@/components/Doctortable";

export default function Doctor() {
return (
    <Container >
        
    <Link href={"./adddoctor"} >
    <Typography >ADD Doctor</Typography>
    <Fab color="secondary" aria-label="add"  sx={{backgroundColor:'orange'}}>
    <AddIcon />
    </Fab>
    
    </Link>
    <Doctortable/>
    
   
   
    </Container>
) 
}

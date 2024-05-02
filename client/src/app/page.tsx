

import { Box } from "@mui/material";
import Image from "next/image";



export default function Home() {
  return (
    <Box  >
      <Image src="/hero.webp" alt="background image" fill={true}  />
    </Box>
  );
}

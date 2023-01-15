import { Box, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import Navbar from "scenes/navbar";

const HomePage = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  

  return (
    <Box>
      <Navbar />
    </Box>
  );
};

export default HomePage;

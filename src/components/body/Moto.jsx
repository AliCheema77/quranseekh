import { styled } from "@mui/material/styles";
import { Colors } from "../../styles/theme";
import React from 'react'
import { Box, Typography, useTheme} from "@mui/material";


const MonoContainer = styled(Box) (()=>({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: "100%",
    minHeight:"250px",
    background: Colors.dark,
    position: "relative",
    // bottom: "31px"
}));

const MonoDescription = styled(Typography) (()=>({
    color: Colors.white,
    fontSize: "45px",
    textAlign: "center",
}));


const Moto = () => {

  const theme = useTheme()
  return (
    <MonoContainer>
        <MonoDescription sx={{
                [theme.breakpoints.down("md")]:{
                    fontSize:"30px",
                    fontFamily: "fantasy"
                }
            }} 
        >
            The best among you(Muslims) are those who learn the Quran and teach it.
        </MonoDescription>
    </MonoContainer>
  )
}

export {Moto}
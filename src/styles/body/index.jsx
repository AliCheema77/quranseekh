import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { Colors } from "../theme";


const BodyContainer = styled(Box) (() => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems:'center',
    width: '100vw',
    height: '100vh',
    backgroundColor: Colors.secondary
}));



const BodyDescription = styled(Typography) (() => ({
    color: Colors.white,
    fontSize: "45px",
    textAlign: "center",
}));

export  { BodyContainer, BodyDescription }
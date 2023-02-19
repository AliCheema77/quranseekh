import { Box, Typography } from "@mui/material";
import { Colors } from "../theme";
import { styled } from "@mui/material/styles";


const GridBox = styled(Box) (()=>({
    background:Colors.dark,
    display:'flex',
    minheight:"350px",
    margin: '2rem 2rem 0rem 2rem',
    borderRadius: "5px",
    justifyContent: "center",
    padding:'2rem',
    alignContent: 'center',
    flexDirection:"column"
}));

const CourseTypographyTitle = styled(Typography)(()=>({
    fontSize:"2rem",
    fontWeight: "Bold",
    color: Colors.white,
}));

const CourseTyporaphyDescription = styled(Typography) (()=>({
    fontSize:'15px',
    fontWeight: "initial",
    color: Colors.white,
}))



export {GridBox, CourseTypographyTitle, CourseTyporaphyDescription}
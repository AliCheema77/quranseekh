import { Avatar, Box, Typography } from "@mui/material";
import {styled} from "@mui/material/styles";
import { Colors } from "../theme";



const AboutContainer = styled(Box) (()=>({
    display: 'flex',
    // background: Colors.dark,
    margin: '2rem 1rem 0rem 1rem',
    minHeight:"300px",
    justifyContent: 'space-between',
    
}));

const AboutBox = styled(Box) (() => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginLeft:'1rem',
    marginRight: '1rem',
    background: Colors.dark,
    flexWrap: 'wrap',
    borderRadius: '5px',
    width:'50%'
}));

const AvatarBox = styled(Avatar) (() => ({
    margin: '1rem 0 1rem 0',
    height: '100px',
    width: '100px',
}))


const AvatarTitle = styled(Typography) (() =>({
    color: Colors.white,
    fontSize: '1.2rem',
    fontWeight: 'bold',
    textAlign:'center',
}));

const AvatarDescription = styled(Typography) (() =>({
    color: Colors.white,
    // fontSize: '16px',
    textAlign:'center',
    padding: '3px',
    fontFamily:Typography.fontFamily,

}));


export {AboutContainer, AboutBox, AvatarBox, AvatarTitle, AvatarDescription}
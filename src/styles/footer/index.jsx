import { Box } from "@mui/system";
import {styled} from "@mui/material/styles";
import { Colors } from "../theme";
import { Typography } from "@mui/material";



const FooterContainer = styled(Box) (() => ({
    display: 'flex',
    minHeight: '300px',
    margin: '2rem 0rem 0rem 0rem',
    background: Colors.dark,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
}));


const FooterItem = styled(Box) (() => ({
    display: 'flex',
    flexDirection: 'row',
    marginLeft: '1rem'
}))


const FooterText = styled(Typography) (() => ({
    fontSize: '12px',
    fontWeight: '1',
    color: Colors.white
}))


export {FooterContainer, FooterItem, FooterText}
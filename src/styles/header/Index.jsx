import { Box, List } from "@mui/material";
import { Colors } from "../theme";
import { styled } from "@mui/material/styles";


const HeaderContainer = styled(Box)(()=>({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '60px',
    background: Colors.dark,
    // position:"fixed",
    zIndex:'99'
}));

const LogoAndTitle = styled(Box)(()=>({
    display: "flex",
    justifyContent:'flex-start',
    alignItems: 'center',
    marginLeft: '2rem',
    color: Colors.primary,
    width: "50%",
}))

export const MyList = styled(List)(({type}) => ({
    display: 'flex',
    flexGrow: 3,
    justifyContent: "space-between",
    justifyItems: "center",
    alignItems: "center",
    color: Colors.primary,
}));

export { HeaderContainer, LogoAndTitle }
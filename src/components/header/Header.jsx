import React, { useEffect, useState } from 'react'
import { HeaderContainer, LogoAndTitle, MyList } from '../../styles/header/Index'
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { Button, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Colors } from '../../styles/theme';
import Divider from '@mui/material/Divider';
import CloseIcon from '@mui/icons-material/Close';
import { NavLink } from "react-router-dom";
import "./header.css";


const Header = () => {
  const [showDrawer, setShowDrawer] = useState(false);

  useEffect(()=>{
  },[]);

  const toggleDrawer = (open) => (e) => {
      console.log("open",open)
      setShowDrawer(open)
  };


  const theme = useTheme()

  return (
    <HeaderContainer>
        <LogoAndTitle
          sx={{
            [theme.breakpoints.down("md")]: {
                width: "85%"
            }
          }}
        >
            <AutoStoriesIcon 
                sx={{
                    fontSize: '3rem'
                }} 
            />
            <Typography 
                sx={{
                    marginLeft:'8px',
                    fontSize: "1.5rem",
                }}
            >
                QuranSeekh
            </Typography>
        </LogoAndTitle>
        <MyList
          sx={{
            [theme.breakpoints.down("md")]: {
                display: 'none',
            }
          }}
        >
          {navItem.map((index, item)=>{
            return(
              <NavLink key={item} to={index.path} className={index.cls}><ListItemText  primary={index.title} sx={{display:"flex", justifyContent:'flex-end'}}/></NavLink>
            );
          })}
        </MyList>
        <Button onClick={toggleDrawer(true)}>
            <MenuIcon
            sx={{
                color: Colors.primary,
                [theme.breakpoints.up('md')]: {
                    display: "none",
                }
            }}
            />
        </Button>
        <Drawer
              anchor='right'
              open={showDrawer}
              onClose={toggleDrawer(false)}
              onKeyDown={toggleDrawer(false)}
            >
              <List>
                <ListItem>
                  <ListItemIcon>
                    <Button >
                      <CloseIcon onClick={toggleDrawer(false)}/>
                    </Button>
                  </ListItemIcon>
                </ListItem>
                <Divider />
                {
                navItem.map((index, item)=>{
                  return (
                    <NavLink to={index.path} key={item} className={index.cls}>
                      <ListItem>
                        <ListItemText>
                          {index.title}
                        </ListItemText>
                      </ListItem>
                    </NavLink>
                  )
                })
                }
              </List>
            </Drawer>
    </HeaderContainer>
  )
}

const navItem = [
  {title:"Home", path:"/home", cls:"sty"},
  {title:"Courses", path:"/courses", cls:"sty"},
  {title:"About", path:'/about', cls:"sty"},
  {title:"Contact Us", path:'/contact', cls:"sty"}
]

export default Header
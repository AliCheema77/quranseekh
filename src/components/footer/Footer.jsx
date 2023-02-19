import React from 'react'
import { FooterContainer, FooterItem, FooterText } from '../../styles/footer'
import { Grid } from '@mui/material'
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOnIcon from '@mui/icons-material/LocationOn';


const Footer = () => {
  return (
    <FooterContainer>
      <Grid container spacing={2}>

        <Grid container item xs={12} sm={6}>
          <Grid item xs={12}>
            <FooterItem>
              <FooterText><MailIcon/></FooterText>
              <FooterText sx={{marginLeft: 1, marginTop:.45}}>abdullahcheema@gmail.com</FooterText>
            </FooterItem>
          </Grid>
          <Grid item xs={12}>
            <FooterItem>
              <FooterText><CallIcon/></FooterText>
              <FooterText sx={{marginLeft: 1, marginTop:.45}}>+92 3237867567</FooterText>
            </FooterItem>
          </Grid>
          <Grid item xs={12}>
            <FooterItem>
              <FooterText><WhatsAppIcon/></FooterText>
              <FooterText sx={{marginLeft: 1, marginTop:.45}}>+92 3237867567</FooterText>
            </FooterItem>
          </Grid>
          <Grid item xs={12}>
            <FooterItem>
              <FooterText><LocationOnIcon/></FooterText>
              <FooterText sx={{marginLeft: 1, marginTop:.45}}>Lahore</FooterText>
            </FooterItem>
          </Grid>
        </Grid>

        <Grid container item spacing={3} xs={12} sm={6}>
          <Grid item xs={12}>
              <FooterItem>
                <FooterText><MailIcon/></FooterText>
                <FooterText sx={{marginLeft: 1, marginTop:.45}}>abdullahcheema@gmail.com</FooterText>
              </FooterItem>
            </Grid>
            <Grid item xs={12}>
              <FooterItem>
                <FooterText><CallIcon/></FooterText>
                <FooterText sx={{marginLeft: 1, marginTop:.45}}>+92 3237867567</FooterText>
              </FooterItem>
            </Grid>
            <Grid item xs={12}>
              <FooterItem>
                <FooterText><WhatsAppIcon/></FooterText>
                <FooterText sx={{marginLeft: 1, marginTop:.45}}>+92 3237867567</FooterText>
              </FooterItem>
            </Grid>
            <Grid item xs={12}>
              <FooterItem>
                <FooterText><LocationOnIcon/></FooterText>
                <FooterText sx={{marginLeft: 1, marginTop:.45}}>Lahore</FooterText>
              </FooterItem>
            </Grid>
          </Grid>

      </Grid>
    </FooterContainer>
  )
}

export default Footer
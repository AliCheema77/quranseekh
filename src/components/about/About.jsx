import { List } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import React from 'react'
import { AboutBox, AboutContainer, AvatarBox, AvatarTitle, AvatarDescription } from '../../styles/about'
import Abdullah from '../../assests/avatar/abdullah.jpeg'

const About = () => {

  const theme = useTheme()

  return (
    <AboutContainer>
        {
        aboutItem.map((item, index)=>{
            return (
                <AboutBox key={index}>
                    <AvatarBox alt={item.alt} src={item.src}></AvatarBox>
                    <AvatarTitle 
                        sx={{
                            [theme.breakpoints.down("md")]:{
                                fontSize:'1rem',
                            }
                        }}
                    >
                        {item.title} 
                    </AvatarTitle>
                    <List>
                        <AvatarDescription>{item.description}</AvatarDescription>
                    </List>
                </AboutBox>
            )
        })
        }
    </AboutContainer>
  )
}

const aboutItem = [
    {
        src: Abdullah,
        alt: "Hafiz Muhammad Abdullah Cheema",
        title: "Hafiz Muhammad Abdullah Cheema",
        description: `This is Hafiz Muhammad Abullah Cheema and he has years of experience in Quran and Hadith teaching at various
                    institutions, and online forms. He can teach Phonetics of the Holy Quran, Hadith S.A.W., Tafseer e Quran, Abraic
                    Grammar also. He did his graduation in Islamic and Abraic Studies from Jamia Naeemia Lahore Pakistan, and graduated in 
                    Pakistan History from Punjab University Lahore. Currently, He is serving as a lecturer at Punjab University.`
    },
    {
        src: "",
        alt: "Hafiz Abdul Rehman Cheema",
        title: "Hafiz Abdul Rehman Cheema",
        description: `This is Hafiz Abdul Rehman Tayyab and he has years of experience in Quran and Hadith teaching at various
                    institutions, and online forms. He can teach Phonetics of the Holy Quran, Hadith S.A.W., Tafseer e Quran, Abraic
                    Grammar also. He did his graduation in Islamic and Abraic Studies from Jamia Naeemia Lahore Pakistan, and graduated in 
                    English Literature and Linguistics from NUML.`
    }
]

export default About
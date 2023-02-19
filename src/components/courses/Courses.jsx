import { Grid } from '@mui/material'
import React from 'react'
import { CourseTypographyTitle, CourseTyporaphyDescription, GridBox } from '../../styles/courses/Index'
import "./courses.css"

const Courses = () => {
 

  return (
    <>
    <Grid container spacing={3}>
        {
            coursesItem.map((item, index)=>{
                return(
                    <Grid item sm={4} xs={12} key={index}>
                        <GridBox className='course'>
                            <CourseTypographyTitle>{item.title}</CourseTypographyTitle>
                            <CourseTyporaphyDescription>
                                {item.description} 
                            </CourseTyporaphyDescription>
                            <CourseTyporaphyDescription sx={{color: '#f42277'}}>{item.duration}</CourseTyporaphyDescription>
                        </GridBox>
                    </Grid>
                )
            })  
        }
    </Grid>
    </>
  )
}

const coursesItem = [
    {
        title: "Nazra Quran",
        description: `The best among you(Muslims) are those who learn the Quran and teach it.`,
        duration: 'Duration: Depends on you'
    },
    {
        title: "Quran Kareem Tajveed",
        description: `We will teach you Tajveed of Quran Kareem`,
        duration: 'Duration: 3 Months'
    },
    {
        title: "Seerat-e-Nabvi",
        description: `We will teach you Seerat-e-Nabvi. What can we get from Seerat-e-Nabvi and how we can improve of daily life by using 
                    the principles of Seerat-e-Nabvi`,
        duration: 'Duration: 3 Months'
    },
    {
        title: "Principles To Study The Hadees",
        description: `Basically, it is part of hadees courses.
                    In this course, we teach you principles,
                    and how to study the hadees books.`,
        duration: 'Duration: Two Months'
    },
    {
        title: "Arbaeen E Nawavi",
        description: `In this course, we teach you Arbaeen E Nawavi, which is written by Imam Nawavi.`,
        duration: 'Duration: 50 Days'
    },
    {
        title: "Arbaeen",
        description: `In this course, Arbaeen will be taught by you. This book is written by Dr. Tahir ul Qadari.`,
        duration: 'Duration: One Month, Two Month, Three Month'
    },
    {
        title: "Education",
        description: `In this course, we will learn the importance of Education in the light of Hadees e Nabvi.
                    Hazrat Muhammad (PBUH) said "The seeking of knowledge is obligatory for every Muslim".`,
        duration: 'One Months'
    },
    {
        title: "Health",
        description: `In this course, we will learn, how we can improve our health in the light of Hadees e Nabvi.`,
        duration: 'One Months'
    },
    {
        title: "Eithics",
        description: `In this course, we will learn ethics in the light of Hadees e Nabvi.`,
        duration: 'One Months'
    },
]

export default Courses
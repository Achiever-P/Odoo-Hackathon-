import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import BlogList from '../components/BlogList'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import QuestionList from '../components/QuestionList'
import { dummyQuestions } from '../../db/sampleData'

const Home = () => {
  return (
    <>
        <Navbar/>
        <Header/>
        <QuestionList questions={dummyQuestions}/>
        {/* <Footer/> */}
    </>
  )
}

export default Home

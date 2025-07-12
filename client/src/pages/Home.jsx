import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import BlogList from '../components/BlogList'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import QuestionList from '../components/QuestionList'

const Home = () => {
  const dummyQuestions = [
  {
    title: "How to integrate React with Flask backend?",
    snippet: "I've been trying to connect my React frontend with a Flask backend and facing CORS issues...",
    votes: 12,
    answers: 3,
    tags: ["react", "flask", "api"],
  },
  {
    title: "What's the best way to manage state in large React apps?",
    snippet: "I've used Context API and Redux Toolkit, but I want to know what others prefer and why...",
    votes: 7,
    answers: 5,
    tags: ["react", "redux", "state-management"],
  },
  ];
  
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

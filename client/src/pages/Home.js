import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'

const Home = ({ setNewPost }) => {
  return (
    <div className=' bg-black min-h-screen'>
      <Header />
      <Navbar setNewPost={setNewPost} />
    </div>
  )
}

export default Home
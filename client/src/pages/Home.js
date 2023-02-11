import React, { useEffect } from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import { allPosts } from '../axios'
import { allPostsState } from '../store/reducers/post'
import { useDispatch } from 'react-redux'

const Home = () => {
  const dispatch = useDispatch()

  useEffect(()=> {
    allPosts().then((res)=> dispatch(allPostsState(res.data)))
  }, [dispatch])

  
  return (
    <div className=' bg-black min-h-screen'>
      <Header />
      <Navbar />
    </div>
  )
}

export default Home
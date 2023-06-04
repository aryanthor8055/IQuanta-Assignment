import React from 'react'
import Header from '../components/Header'
import Main from '../components/Main'
import Image from '../components/Image'

const HomePage = () => {
  return (
    <>
    <Header/>
    <div style={{display:'flex'}}>
    <Main/>
    <Image/>
  
  </div>
    </>

  )
}

export default HomePage
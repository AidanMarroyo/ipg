import React from 'react'
import Nav from '../../components/Nav/Nav'
import IPG from '../../assets/dad_test_AdobeExpress.mp4'
import Footer from '../../components/Footer/Footer'
import './Hero.scss'

const Hero = () => {
  return (
    <div className='heroMain'>
      <div className='overlay'></div>
      <Nav />
      <video className='videoBg' src={IPG} autoPlay loop muted />
      <div className='wrapper'>
        <h1 className='heroText'>
          Elite Security
          <br /> For A <br />
          Changing <br /> World
          <div>
            <button>Learn More</button>
          </div>
        </h1>
        <Footer />
      </div>
    </div>
  )
}

export default Hero

import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Home.css'
import background from  "../../Assets/Images/home-bg.dc52d5d40a40b13154b0.jpg"
function Home() {

  return (
    <div>
      <Navbar />
      <div className="home-container">
        <div className="home-content">
          <h2>Hi There</h2>
          <p>I am a Full Stack Web Developer with experience in building websites and applications using JavaScript, Node.js, Express, MongoDB </p>
        </div>
      </div>
    </div>
  )
}

export default Home
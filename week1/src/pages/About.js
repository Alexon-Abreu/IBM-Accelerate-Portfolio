import React, { Component } from 'react';
import "./About.css";
// import AlexonAbreuHeadshot from "../assets/AlexonAbreuHeadshot.jpg";


export default class About extends Component {
  render() {
    return (
      
      <div>

        <div class="split left">
          <div className="centered">
            <img 
              className="profile_image"
              // Image goes here
              src="https://media-exp2.licdn.com/dms/image/C4D03AQGMgQ3b2WsatQ/profile-displayphoto-shrink_800_800/0/1590688194927?e=1660176000&v=beta&t=AF6nKYFOk6m3seFK9DCdiJh_AHEnEUqhdyS8k2SEK5c"
              // src={AlexonAbreuHeadshot} //this is how it should be done, but i decided to use an image address from my linkedin profile because it alot more cleaner
              alt="Profile Pic"
              ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Alexon Abreu</div>
            <div className="brief_description">
              Im a college junior majoring in computer science at Hunter College with grand ambitions to create the next generation of innovative software solutions.
            </div>
          </div>
        </div>

    </div>


    )
  }
}
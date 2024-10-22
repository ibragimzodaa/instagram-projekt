import React from 'react'
import "../About/style.css";
import MiniCard from '../../components/miniCard/miniCard';"../../components/miniCard/miniCard";

const About = () => {
  return <>
    <div className="sect1">
        <div className="s1-text">
          <img src="src/icons/AboutUs.png" alt="" />
          <h1>About Us</h1>
          <p>Our agency has been successfully operating in digital marketing since 2012. We are proud to offer you quality and exemplary service. We help our clients get better results with our creative and data-driven approach to online advertising. </p>
        </div>
        <div className='flex mt-20 gap-10'>
          <div className="flex items-center gap-3">
              <img src="/src/icons/Group (1).png" alt="" />
              <p>SEO Content Strategy</p>
          </div>
          <div className="flex items-center gap-3">
              <img src="/src/icons/ic-speaker.png" alt="" />
              <p>Content Marketing</p>
          </div>
          <div className="flex items-center gap-3">
              <img src="/src/icons/ic-computer.png" alt="" />
              <p>Website & Social Media Marketing</p>
          </div>
        </div>
    </div>

    <div className="stats">
      <div className="round">
        <img src="src/icons/circle-progress.png" alt="" />
        <p>Years of experience</p>
      </div>
      <div className="round">
        <img src="src/icons/circle-progress (1).png" alt="" />
        <p>Years of experience</p>
      </div>
      <div className="round">
        <img src="src/icons/circle-progress (2).png" alt="" />
        <p>Years of experience</p>
      </div>
      <div className="round">
        <img src="src/icons/circle-progress (3).png" alt="" />
        <p>Years of experience</p>
      </div>
    </div>

    <div>
      <img src="src/icons/Video.png" className="video" />
    </div>

    <img src="src/icons/Gallery.png" className="video1" />

    <div className='proud'>
        <img src="src/icons/illustration.png" alt="" />
        <div className='box'>
          <h1 style={{fontSize: "40px"}}>We are proud of our awards</h1>
          <br />
          <div className="in-box">
            <div className="items-center flex w-2/5 mt-3">
                <img src="src/icons/image.png" alt="" />
                <p>Top SEO Companies 2020 by Clutch</p>
            </div>
            <div className="items-center flex w-2/5 mt-3">
                <img src="src/icons/image.png" alt="" />
                <p>Top SEO Companies 2020 by Clutch</p>
            </div>
            <div className="items-center flex w-2/5 mt-10">
                <img src="src/icons/image.png" alt="" />
                <p>Top SEO Companies 2020 by Clutch</p>
            </div>
            <div className="items-center flex w-2/5 mt-10">
                <img src="src/icons/image.png" alt="" />
                <p>Top SEO Companies 2020 by Clutch</p>
            </div>
          </div>
        </div>
    </div>

    <form className="blueForm">
      <h1 className="nigger">Get a Free SEO Analysis!</h1>
      <div className='flex gap-6 justify-center mt-14'>
        <input type="text" placeholder="Your Name" id="kratos" />
        <input type="text" placeholder="Your Working Email" id="kratos" />
        <input type="text" placeholder="http://yoursite.com" id="kratos" />
        <button className='zeus'>Analyse your site</button>
        
      </div>
    </form>
  </>
}

export default About
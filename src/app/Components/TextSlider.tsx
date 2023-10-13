"use client";
import { useState,useEffect } from "react";
import Aos from "aos" ;
import "aos/dist/aos.css"
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab"

function Slider() {
  useEffect(()=>{
    Aos.init({duration :700})
  },[])

  
  const [word, setWord] = useState("What in store");

  const openWord = (wordName: string) => {
    setWord(wordName);
  };
  const [video1Visible, setVideo1Visible] = useState(true);
  const [video2Visible, setVideo2Visible] = useState(false);
  const [video3Visible, setVideo3Visible] = useState(false);
  const [video4Visible, setVideo4Visible] = useState(false);

  const handleTabClick = (tabKey:string | null) => {
    // Hide all videos by default
    setVideo1Visible(false);
    setVideo2Visible(false);
    setVideo3Visible(false);
    setVideo4Visible(false);

    // Show the video corresponding to the clicked tab
    if (tabKey === "Learn") {
      setVideo2Visible(true);
    } else if (tabKey === "Play") {
      setVideo3Visible(true);
    }else if(tabKey === "Market") {
      setVideo4Visible(true);
    }else if(tabKey === "Home") {
      setVideo1Visible(true);
    }
  };
  return (
    <>
    <div className="row">

    <div className="col-lg-6 col-md-6 col-sm-12">
     <div className="understand-slider"  data-aos="fade-right">
    <Tabs
      defaultActiveKey="Home"
      id="fill-tab-example"
      className="mb-3"
      fill
      onSelect={handleTabClick}
    >
      <Tab eventKey="Home" title="Whats in Store" className="border-0">
      <h1 className="understand-heading" >
            Take your trading knowledge to the next level with Trade:able.
          </h1>
          <p className="understand-para">
            Unlock your potential in the markets with Trade:able. Learn to trade
            with interactive games, in real-time scenarios and analyze the
            markets at your finger tips.
          </p>
      </Tab>
      <Tab eventKey="Learn" title="Learn">
      <h1 className="understand-heading" data-aos="fade-right">Learn on the go!</h1>
          <p className="understand-para" data-aos="fade-right">
            Our new-age gamified-based learning platform makes it easy for you
            to learn. With interactive games and simulations, you can now power
            through basics and gain muscle memory in no time!
          </p>
      </Tab>
      <Tab eventKey="Play" title="Play">
      <h1 className="understand-heading" data-aos="fade-right">Play with your favorite stocks</h1>
          <p className="understand-para" data-aos="fade-right"> 
            With Trade:able, you can play with your favorite stocks in real-time
            scenarios and develop a deeper understanding of the markets. Most
            importantly, get hands-on experience.
          </p>
      </Tab>
      <Tab eventKey="Market" title="Market">
      <h1 className="understand-heading" data-aos="fade-right">Stay ahead of the curve</h1>
          <p className="understand-para" data-aos="fade-right">
            Never miss out on important market news or events again - Trade:able
            gives you access to all the latest insights so that you always stay
            one step ahead of any market movement. Get ready to be in total
            control of your investments!
          </p>
      </Tab>
    </Tabs>
     </div>
    </div>
    <div className="col-lg-6 col-md-6 col-sm-12">
      <div className="video-slide d-block text-center">


         {video1Visible && (
              <video
                playsInline
                autoPlay
                loop
                muted
                width="320"
                height="100%"
                className="d-md-none"
                data-aos="zoom-in"
              >
                <source src="/video1.mp4" type="video/mp4" />
              </video>
            )}
          {video2Visible && (
              <video
                playsInline
                autoPlay
                loop
                muted
                width="320"
                height="100%"
                className="d-md-none"
                data-aos="zoom-in"
              >
                <source src="/Learn.mp4" type="video/mp4" />
              </video>
            )}
          {video3Visible && (
              <video
                playsInline
                autoPlay
                loop
                muted
                width="320"
                height="100%"
                className="d-md-none"
                data-aos="zoom-in"
              >
                <source src="/Play.mp4" type="video/mp4" />
              </video>
            )}
          {video4Visible && (
              <video
                playsInline
                autoPlay
                loop
                muted
                width="320"
                height="100%"
                className="d-md-none"
                data-aos="zoom-in"
              >
                <source src="/Market.mp4" type="video/mp4" />
              </video>
            )}
      </div>
    </div>
    </div>


    
    </>
  );
}
export default Slider;

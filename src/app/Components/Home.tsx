'use client'
import React, { useEffect } from "react";
import Image from "next/image";
import TextSlider from './TextSlider'
import ParaSlider from './Slider'
import Aos from "aos";
import "aos/dist/aos.css"
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Trade:able',
  description: 'Trade:able home page',
}
const Home = () => {
  useEffect(()=>{
    Aos.init({duration :700})
  },[])


  return (
    <div>
    <section className="align-items-center banner-section d-flex justify-content-center home-banner">
      <div className="container pt-3">
        <div className="row">
          <div className="col-md-6 text-start ">
            <h1 className="home-banner-title banner-title title " data-aos ="fade-right">
              Power Up Your Trading with <span>Trade:able</span>
            </h1>
            <p className="animated home-banner-text" data-aos="fade-right">
              {" "}
              Trade:able is a revolutionary trading education app that offers
              game field learning and real-time simulations to help you take
              your trading skills to the next level!
            </p>
            {/* <h2 className='banner-subtitle subtitle animated bounceInLeft delay-animation-300ms'><span className='circle-half banner-circle-half'><span className='circles'></span></span>we see you! </h2> */}
            <button className="border-0 btn bg-transparent mt-4  delay-animation-600ms"  data-aos ="zoom-in">
              <Link
                id="Get_Tradeable"
                className="text-decoration-none btn-customize"
                href="#"
                target="_blank"
              >
                Get Trade:able! It&apos;s Free
              </Link>
            </button>
          </div>
          <div className="col-md-6 text-end home-banner-image"  data-aos="zoom-in">
            {/* <Image  src={banner-video} /> */}
            <video
              playsInline
              autoPlay
              loop
              muted
              style={{ width: "100%", height: "100%" }}
            >
              <source src="/video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>

    <section className="understand-stock-market bg-black pt-10 position-relative" >
      <div className="container">
        <div className="row">
          <div className="col-md-12">
             <div className="understand-content pb-5">
               <div className="understand-top-head ">
               <h1 className="title animated" data-aos="fade-right" >
               Understand <br />
               stockmarket
             </h1>
             <h2 className="subtitle position-relative z-index-1 trader-concept  " data-aos="fade-right" >
               trades &<br />
               concepts.
             </h2>
             <Image
               src="/arrow.png"
               alt="small-graph"
               className="small-graph " data-aos ="fade-right"
               height={100}
               width={1000}
             />
               </div>
             <br />
             <TextSlider/>
             </div>
             </div>

          
        </div>
      </div>
    </section>

 
    <section className="spacer bg-black"></section>

    <section className="why-choose bg-black pt-6 position-relative">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center " data-aos ="zoom-in-up">
            <h1 className="title">
              why choose{" "}
              <span className="circle-half why-circle-half hide">
                <span className="circles"></span>
              </span>
            </h1>
            <h2 className="subtitle-large">
              <img src="/star.png" className="star-why star-icon" alt="star image" />
              Trade:able
            </h2>
          </div>
        </div>
      </div>
    </section>
    <section className="why-choose-grid bg-black pt-6 text-white">
      <div className="container">
        <div className="row text-center why-choose-slider d-none d-md-block desktop-slider">
        
        </div>
        <div className="row text-center why-choose-slider d-md-none">
          <ParaSlider />
        </div>
        <button className="border-0 btn bg-transparent mt-4 delay-animation-600ms" data-aos="zoom-in">
          <Link
            id="Get_Tradeable"
            className="text-decoration-none btn-customize"
            href="#"
            target="_blank"
          >
            Get Trade:able! It&apos;s Free
          </Link>
        </button>
      </div>
    </section>

    <section className="spacer bg-black"></section>
    <section className="testimonials bg-black position-relative pt-10 pb-10">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
              <h1 className="title"data-aos="fade-right">
              Don&apos;t just take
              <br />
              our word for it,
            </h1>
            <h2 className="subtitle"data-aos="fade-right">
              hear from our <br />
              users.
            </h2>
          </div>
  

           <div className='col-md-6' >
          <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-aos="fade-left">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="carousel-content">
                <Image  src="/user.png" alt="user-icon" width={100} height={70}/>
                <h3 className='carousel-title'></h3>
                <p className='carousel-content'>This is one of the best apps for trading to Improve Knowledge, Without Any Risk. Thank you Trade:able for providing me with a path to acquire Trading knowledge in a gamified way.</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-content">
                <Image  src="/user.png" alt="user-icon" width={100} height={70}/>
                <h3 className='carousel-title'>Dipak Thakur</h3>
                <p className='carousel-content'>Excellent app to learn to trade in a practical scenario.</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-content">
                <Image  src="/user.png" alt="user-icon" width={100} height={70}/>
                <h3 className='carousel-title'>Kunal Patil</h3>
                <p className='carousel-content'>Great App! All in one platform where I am getting to Learn About Technical Analysis and also to practice my skills in Market Situations without any risk. The best part about the app is that it is free of Cost.</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-content">
                <Image  src="/user.png" alt="user-icon" width={100} height={70}/>
                <h3 className='carousel-title'>Rahul Parekh</h3>
                <p className='carousel-content'>Trade:able is a great app, that includes practical learning. It also includes daily market updates like market predictor, Top Gainers, and Top Loser. It&apos;s a one-stop destination for every trader.</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-content">
              <Image  src="/user.png" alt="user-icon" width={100} height={70}/>
              <h3 className='carousel-title'>Rahul Parekh</h3>
              <p className='carousel-content'>Trade:able is a great app, that includes practical learning. It also includes daily market updates like market predictor, Top Gainers, and Top Loser. It&apos;s a one-stop destination for every trader.</p>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>        
           </div>
        </div>
      </div>
    </section>

    <section className="accordion bg-black pt-10 pb-10">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4" data-aos="fade-up-left">
            <h1 className="faqs-title">FAQs</h1>
          </div>
          <div className="col-md-8">
            <div
              className="accordion"
              id="accordionExample"
              data-aos="fade-left"
            >
              <div className="accordion-item bg-transparent border-0">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button bg-transparent border-1 text-white shadow-none"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    What kind of process can I expect?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show text-white"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Trade:able features short-term trading quizzes for both
                    beginners and expert traders. Each quiz covers fundamental
                    stock market principles. As a result, students can conquer
                    the stock market, by mastering skills in a real-time
                    scenario. Every question has an education corner to
                    enhance conceptual understanding. Trade:able has
                    transformed the learning process.
                  </div>
                </div>
              </div>
              <div className="accordion-item bg-transparent border-0">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button bg-transparent border-0 text-white shadow-none collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Do we have various levels?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse text-white"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    The app has been divided into beginner, intermediate and
                    advanced levels. As the student completes each level the
                    difficulty of the quiz increases as well.
                  </div>
                </div>
              </div>
              <div className="accordion-item bg-transparent border-0">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button bg-transparent border-0 text-white shadow-none collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    How can a trader learn in real-time?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse text-white"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Trade:able is a gamified trading app. Each quiz in the app
                    is based on a real-time scenario. Traders are required to
                    test their skills in a practical situation i.e. by marking
                    the stop-loss on the chart or predicting the trend based
                    on the chart movement. Every quiz has an education corner
                    that explains the concept behind it for a better
                    understanding and learning simultaneously.
                  </div>
                </div>
              </div>
              <div className="accordion-item bg-transparent border-0">
                <h2 className="accordion-header" id="headingFour">
                  <button
                    className="accordion-button bg-transparent border-0 text-white shadow-none collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Is there an expert for support?
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse text-white"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Ask the Experts offers you the opportunity to ask
                    questions that are answered directly by trading
                    professionals who specialize in stock market trading.
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
          </div>
    </section>
    </div>
  )
}

export default Home

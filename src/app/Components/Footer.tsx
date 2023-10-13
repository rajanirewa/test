import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="footer-section pt-5 pb-4 bg-black">
                <div className="footer-top">
                    <div className="container">
                        <div className="row text-white">

                            <div className="col-lg-6 col-md-6 footer-links">
                                <h4>Contact Us</h4>
                                <ul className="list-unstyled">
                                    <li>Address: <Link className="text-decoration-none" href='#' target='_blank'>7th Floor, The Ruby, Senapati Bapat Marg, <br/>Dadar West, Mumbai City, Maharashtra, 400028</Link></li>
                                    <li>Contact: <Link href='tel:+919930041883' className="text-decoration-none">+91-9930041883</Link></li>
                                    <li>Email: <Link className="text-decoration-none" href="#">meghana.more@finlearnacademy.com</Link></li>
                                </ul>
                            </div>

                          

                            <div className="col-lg-6 col-md-6 footer-links">
                                <h4>Follow us</h4>
                                <ul className="list-unstyled">
                                    <li>
                                        <Link href="#" target="_blank" className="text-decoration-none d-flex">
                                         <Image src="/instagram.png" alt='instagram'  height={20} width={20}/> /@Tradeable_app
                                         </Link>
                                    </li>
                                    <li>
                                        <Link href="#" target="_blank" className="text-decoration-none d-flex"> 
                                        <Image src="/twitter.png" alt='twitter' height={20} width={20}/> /@Tradeable_app
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='footer-bottom  pb-5'>
                    <div className="container">
                        <div className="row text-white align-items-center ">
                            <div className="col-lg-7 col-md-4 footer-links">
                                <h4>Your data us safe with us  💝</h4>
                            </div>
                            <div className="col-lg-5 col-md-8 footer-links">
                            <ul className="list-unstyled d-flex justify-content-between">
                                <li><Link href="#" className="text-decoration-none">Terms & Conditions</Link></li>
                                <li><Link href="#" className="text-decoration-none">Privacy Policy</Link></li>
                                <li><Link href= "#" className="text-decoration-none">© Trade:able 2022</Link></li>
                            </ul>
                            </div>
                        </div>
                    </div>   
                </div> 
                <div className="footer-btn footer-download">
                  <div className='container'>
                  <div className='row' style={{alignItems : "center"}}>
                  <div className='col-lg-7 col-md-6 col-sm-12'>
                  <div className='footer second-last'>
                    <h1 className="footer-text-1" >Download <span className="footer_span">Trade:able</span> to learn better, faster and simpler</h1>
                  </div>

               
                  </div>
                  <div className='col-lg-5 col-md-6 col-sm-12'>
                     <div className="footer-btn-img" >
                       <Link href="#" target="_blank">
                        <Image src="/app-store.png" alt='app store' height={45} width={500}  />
                       </Link>
                       <Link  href="#" target="_blank">
                        <Image src="/google-play.png" alt='google play' height={45} width={500}/>
                       </Link>
                     </div>
                  </div>

                  </div>
                  </div>
                
               </div>
            </footer>

  )
}

export default Footer






import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'


function page() {
    return (
        <>
            <div id="root" className='bg-black'>
                <section className="banner-part banner-about pb-1 pt-7">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h2 className="banner-subtitle-team title-other font-size-large pt-5">About Us</h2>
                                <p className="text-center about-text pt-6 pb-6">
                                    Trade:able aims to be a thought leader in a world where passive listening is chosen over active learning.<br /><br />
                                    Our purpose is to aid neophytes of the trading-sphere to not just understand concepts but also build confidence and develop expertise. With our gaming based learning approach, you can practise your skills, anytime, anywhere!
                                </p>

                            </div>
                        </div>
                    </div>
                </section>
                <section className="align-items-end banner-part team-banner d-flex pb-10 pt-6">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center pt-2">
                                <h1 className="banner-title-team subtitle-there mb-0 pl-2">Meet the<img src='/star.png' alt='star' className="starbannerr-other star-icon-other"/></h1>
                                    
                                <h2 className="banner-subtitle-team title-other">Team</h2>
                            </div>
                            <div className="row align-items-center circles-items">
                                <div className="col-md-6 text-end p-0 ">
                                    <div className="circle-group">

                                        <div className="circle-group">
                                            <span className="circles-outer">
                                                <span className="circles-center"></span>
                                                </span>
                                            <span className="circles-deep">
                                                <Image src="/Raunak-Karwa.jpg" alt='raunak image' height={1000} width={1000} />
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6 p-0">
                                    <div className="founder">
                                        <p>Founder</p>
                                        <h2>Raunak Karwa</h2>
                                        <div className='community-btn'>
                                            <Link href=" #" className="text-white text-decoration-none btn-learn-more">learn more.</Link>
                                            <Link href="#" className="text-decoration-none raunak-linkedin" target='_blank'>
                                                <Image src="/linkedin-logo.png" alt="linkedin" height={27} width={1000}  />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="team-slider bg-black text-white pb-5">


                    <div className="slide-box">
                        <div className="slick-inner">
                            <div className="slick-content">
                                <Image src="/Amit-Solanki.jpg" className='team-member-image' alt='amit solanki' height={100} width={100} />
                                <p className="member-position">Senior Manager: Digital Marketing</p>
                                <h2 className="member-name">Amit Solanki</h2>
                                <p className='social-links'>
                                    <Link href=' ' target='_blank'>
                                        <Image src="/linkedin-logo.png" alt="linkedin" height={20} width={10} />
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="slide-box">
                        <div className="slick-inner">
                            <div className="slick-content">
                                <Image src='/Aditya-Kumar.jpg' className='team-member-image' alt='aditya kumar' height={100} width={100} />
                                <p className="member-position">Digital Marketing Associate</p>
                                <h2 className="member-name">Aditya Kumar</h2>
                                <p className='social-links'>
                                    <Link href=' ' target='_blank'>
                                        <Image src="/linkedin-logo.png" alt="linkedin" height={20} width={10} />
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="slide-box">
                        <div className="slick-inner">
                            <div className="slick-content">
                                <Image src="/hemang_monga.jpg" className='team-member-image' alt='hemang monga' height={100} width={100} />
                                <p className="member-position">Backend Developer</p>
                                <h2 className="member-name">Hemang Monga</h2>
                                <p className='social-links'>
                                    <Link href=' ' target='_blank'>
                                        <Image src="/linkedin-logo.png" alt='linkedin' height={20} width={10} />
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="slide-box">
                        <div className="slick-inner">
                            <div className="slick-content">
                                <Image src="/param_rawal_small.jpg" className='team-member-image' alt='param rawal' height={100} width={100} />
                                <p className="member-position">Product Manager</p>
                                <h2 className="member-name">Param Rawal</h2>
                                <p className='social-links'>
                                    <Link href='#' target='_blank'>
                                        <Image src="/linkedin-logo.png" alt="linkedin" height={20} width={10} />
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="slide-box">
                        <div className="slick-inner">
                            <div className="slick-content">
                                <Image src="/Aditya-Gohad.jpg" className='team-member-image' alt='aditya gohad' height={100} width={100} />
                                <p className="member-position">Mobile Lead</p>
                                <h2 className="member-name">Aditya Gohad</h2>
                                <p className='social-links'>
                                    <Link href='#' target='_blank'>
                                        <Image src="/linkedin-logo.png" alt="linkedin" height={20} width={10} />
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="slide-box">
                        <div className="slick-inner">
                            <div className="slick-content">
                                <Image src="/Deepak-Grandhi.jpeg" className='team-member-image' alt='deepak grandhi' height={100} width={100} />
                                <p className="member-position">Software Development Engineer</p>
                                <h2 className="member-name">Deepak Grandhi</h2>
                                <p className='social-links'>
                                    <Link href=' ' target='_blank'>
                                        <Image src="/linkedin-logo.png" alt="linkedin" height={20} width={10} />
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="slide-box">
                        <div className="slick-inner">
                            <div className="slick-content">
                                <Image src="/Abhilesh-Fukatkar.jpg" className='team-member-image' alt='Abhilesh image' height={100} width={100} />
                                <p className="member-position">Video Editor & Graphic Designer</p>
                                <h2 className="member-name">Abhilesh Fukatkar</h2>
                                <p className='social-links'>
                                    <Link href=' ' target='_blank'>
                                        <Image src="/linkedin-logo.png" alt="linkedin" height={20} width={10} />
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="slide-box">
                        <div className="slick-inner">
                            <div className="slick-content">
                                <Image src="/Kapil-Shah.jpg" className='team-member-image' alt='kapil shah' height={100} width={100} />
                                <p className="member-position">Technical Instructor</p>
                                <h2 className="member-name">Kapil Shah</h2>
                                <p className='social-links'>
                                    <Link href=' ' target='_blank'>
                                        <Image src="/linkedin-logo.png" alt='linkedin' height={20} width={10} />
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="slide-box">
                        <div className="slick-inner">
                            <div className="slick-content">
                                <Image src="/Hitesh-Chotalia.jpg" className='team-member-image' alt='hitesh chotalia' height={100} width={100} />
                                <p className="member-position">Head of Education</p>
                                <h2 className="member-name">Hitesh Chotalia</h2>
                                <p className='social-links'>
                                    <Link href='  ' target='_blank'>
                                        <Image src="/linkedin-logo.png" alt="linkedin" height={20} width={10} />
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

            </div>

        </>
    )
}
export default page

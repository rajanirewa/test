import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


function page() {
    return (
        <div>
            <section className="banner-part pt-7 community-banner  pb-6">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h1 className="banner-title subtitle-there line-height pt-7">
                                <img src="/star.png" alt='star'  className='star-com-banner star-icon'/>
                                Interact with a <br />
                                community filled with
                            </h1>
                            <h2 className="banner-subtitle subtitle">
                                learners & visionaries.<span className="circle-half community-circle-half"><span className="circles"></span></span>
                            </h2>
                            <p className="font-23 pt-5">
                                Independent does not mean alone. Join our <br />
                                community and level up Together!
                            </p>
                        </div>
                    </div>
                    <div className="row pt-5 pb-5 community-max-width">
                        <div className="col-md-6">
                            <div className="ms-4 ps-5 tabs-content-community text-center">
                                <div className="tab-content" id="nav-tabContent">
                                    <div className="tab-pane fade active show aaa" id="nav-constructive" role="tab-panel" aria-label="nav-constructive-tab">
                                        <video playsInline autoPlay loop muted width="500" height="400">
                                            <source src="/Constructive-Discussions.mp4" type="video/mp4" />
                                        </video>
                                    </div>
                                    <div className="tab-pane fade" id="nav-quizzes" role="tab-panel" aria-label="nav-quizzes-tab">
                                        <video playsInline autoPlay loop muted width="500" height="400">
                                            <source src="/Quizzes.mp4" type="video/mp4" />
                                        </video>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="ps-5 tabs-start-community">
                                <nav>
                                    {/* <div className="nav nav-tabs border-0" id="nav-tab" role="tab-list">
                            <div className="nav-link active text-start text-black" id="nav-constructive-tab" data-bs-toggle="tab" data-bs-target="#nav-constructive" type="button" role="tab" aria-controls="nav-constructive" aria-selected="true">
                                <h3>Constructive Discussions</h3>
                                <ul className="ps-5 pt-2">
                                    <li>Trade Support</li>
                                    <li>Learning Support</li>
                                    <li>Psychological Support</li>
                                </ul>
                            </div>
                            <div className="nav-link text-start mt-5 text-black" id="nav-quizzes-tab" data-bs-toggle="tab" data-bs-target="#nav-quizzes" type="button" role="tab" aria-controls="nav-quizzes" aria-selected="false">
                                <h3>Quizzes</h3>

                                <ul className="ps-5 pt-2">
                                    <li>Assessments to Build Confidence</li>
                                    <li>
                                        Practice Variety of Market Conditions to Build your Strength
                                    </li>
                                </ul>
                            </div>
                        </div> */}
                                    <div className="nav nav-tabs border-0" id="nav-tab" role="tablist">
                                        <button className="nav-link active text-start text-black" id="nav-constructive-tab" data-bs-toggle="tab" data-bs-target="#nav-constructive" role="tab" aria-controls="nav-constructive" aria-selected="true">
                                            <h3>Constructive Discussions</h3>
                                            <ul className="ps-5 pt-2">
                                                <li>Trade Support</li>
                                                <li>Learning Support</li>
                                                <li>Psychological Support</li>
                                            </ul>
                                        </button>
                                        <button className="nav-link text-start mt-5 text-black" id="nav-quizzes-tab" data-bs-toggle="tab" data-bs-target="#nav-quizzes" role="tab" aria-controls="nav-quizzes" aria-selected="false">
                                            <h3>Quizzes</h3>
                                            <ul className="ps-5 pt-2">
                                                <li>Assessments to Build Confidence</li>
                                                <li>
                                                    Practice Variety of Market Conditions to Build your Strength
                                                </li>
                                            </ul>
                                        </button>
                                    </div>

                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-12 text-center'>
                            <h4 className='text-center mt-5 text-white text-join-us'>Join us. Become a part of the smartest trading & investing community</h4>
                            <button className="border-0 btn bg-transparent mt-4 p-1">
                                <Link href="#" className="text-decoration-none btn-customize" target='_blank'>Join our Discord</Link>
                            </button>
                            <button className="border-0 btn bg-transparent mt-4 p-1">
                                <Link href="#" className="text-decoration-none btn-customize" target='_blank'>Join our Telegram</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default page


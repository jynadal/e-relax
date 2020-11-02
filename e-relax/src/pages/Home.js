import React from 'react'
import Slider from './Slider'
import Feature from './Feature'

import  imgAbout from '../assets/images/about/about1.jpg'

export default function Home ()  {
    return (
        <div>
            
                        {/* <!--slider section start-->  */}
            <div className="slider-container">
            <Slider  />       

            </div>
            {/* <!--slider section end-->  */}

            {/* <!--welcome section start-->  */}
            <div className="welcome-about">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-12 col-xs-12">
                            <div className="about-img">
                                <img src={imgAbout} alt="about" />
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12 col-xs-12">
                            <div className="about-desc">
                                
                                <h2>Votre esthéticienne</h2>
                                <p className="text-1">Marjorie, esthéticienne diplômée et expérimentée met son savoir-faire et son expérience au service de votre bien-être.</p>

                                <h6>Simplifiez-vous la vie !</h6>
                                <p className="text-2">
                                    En faisant appel à moi, c’est l’institut qui vient à vous. Nul besoin de faire garder vos enfants et fini le stress des embouteillages.
                                    Je me déplace à votre domicile, équipée de tout le matériel professionnel nécessaire, et vous propose une large gamme de soins esthétiques :</p>
                                <a href="#">Savoir plus</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--welcome section end-->  */}

            {/* <!--fun fact area-->  */}
            {/* <div className="fun-fact text-center ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-3 col-xs-12">
                            <div className="single-fun-fact float-left">
                                <div className="fun-icon">
                                    <a href="#"><i className="fa fa-trophy" aria-hidden="true"></i></a>
                                </div>
                                <p className="counter">200</p>
                                <h5>win awards</h5>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-3 col-xs-12">
                            <div className="single-fun-fact middle-margin-left">
                                <div className="fun-icon">
                                    <a href="#"><i className="zmdi zmdi-favorite"></i></a>
                                </div>
                                <p className="counter">150</p>
                                <h5>Happy client</h5>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-3 col-xs-12">
                            <div className="single-fun-fact middle-margin">
                                <div className="fun-icon">
                                    <a href="#"><i className="zmdi zmdi-male-female"></i></a>
                                </div>
                                <p className="counter">100</p>
                                <h5>trainer</h5>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-3 col-xs-12">
                            <div className="single-fun-fact float-right">
                                <div className="fun-icon">
                                    <a href="#"><i className="fa fa-pagelines" aria-hidden="true"></i></a>
                                </div>
                                <p className="counter">300</p>
                                <h5>Treatment</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* <!--fun fact area end-->  */}

            {/* <!--Gallery section start-->  */}

            {/* <Gallery /> */}

            {/* <!--Gallery section end-->  */}
            {/* <!--Offer section start-->  */}
            {/* <div className="special-offer">
               <div className="bg-img">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 col-md-offset-2">
                                <div className="section-title bg_grey text-center">
                                    <h2>you get our special offer</h2>
                                    <p>  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim nostrud exercitation ullamco laboris nisi.</p>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="offer-apoinment text-center">
                                    <a href="#">Make An Appoinment</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* <!--Offer section end-->  */}

            {/* <!--Our feature section-->  */}

            <Feature />

            
            {/* <!--Our feature section end-->  */}

            {/* <!--Video section start-->  */}
            {/* <div className="video-section text-center">
                <div className="bg-overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="video-section-inner">
                                <div className="video-icon">
                                    <a href="https://www.youtube.com/watch?v=E6ZgAyx8kWU"><i className="zmdi zmdi-play"></i></a>
                                </div>
                                <h2>how it works</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* <!--Video section end-->  */}

            {/* <!--pricing palaning start-->  */}
            <div className="pricing-plan ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2">
                            <div className="section-title text-center">
                                <h2>Nos tarifs </h2>
                                <p>  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim nostrud exercitation ullamco laboris nisi.</p>
                            </div>
                        </div>
                    </div>


                    <div className="row">

                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <div className="pricing-table text-center">
                                <div className="pricing-title">
                                    <h3>Epilations</h3>
                                </div>
                                <div className="pricing-desc">
                                    <p><span className="partir">à partir de </span></p>
                                    <h2>10<span className="currency">€</span></h2>
                                    {/* */}
                                    <ul>
                                        <li>Epilation</li>
                                        <li>d'une partie</li>
                                        <li>du</li>
                                        <li>corps</li>
                                    </ul>
                                    <div className="book-now">
                                        <a href="#">Réservez</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <div className="pricing-table text-center">
                                <div className="pricing-title">
                                    <h3>Soins du visage</h3>
                                </div>
                                <div className="pricing-desc">
                                    <p><span className="partir">à partir de </span></p>
                                    <h2>46<span className="currency">€</span></h2>
                                    {/* */}
                                    <ul>
                                        <li>Soins du</li>
                                        <li>visage</li>
                                        <li>complet</li>
                                        <li>50 minutes</li>
                                    </ul>
                                    <div className="book-now">
                                        <a href="#">Réservez</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <div className="pricing-table text-center">
                                <div className="pricing-title">
                                    <h3>Soins du corps</h3>
                                </div>
                                <div className="pricing-desc">
                                    <p><span className="partir">à partir de </span></p>
                                    <h2>42<span className="currency">€</span></h2>
                                    {/* */}
                                    <ul>
                                        <li>Soins du</li>
                                        <li>corps</li>
                                        <li>...</li>
                                        <li>...</li>
                                    </ul>
                                    <div className="book-now">
                                        <a href="#">Réservez</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <div className="col-md-4 col-sm-6 col-xs-12">
                            <div className="pricing-table text-center">
                                <div className="pricing-title">
                                    <h3>silver pack</h3>
                                </div>
                                <div className="pricing-desc">
                                    <h2><span className="date">à partir de </span>46<span className="currency">€</span></h2>
                                    <ul>
                                        <li>Nail cutting & styling</li>
                                        <li>Hot Ayurvedic spa</li>
                                        <li>Hot oil massage</li>
                                        <li>Body wraps</li>
                                    </ul>
                                    <div className="book-now">
                                        <a href="#">Book now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 hidden-sm col-xs-12">
                            <div className="pricing-table text-center">
                                <div className="pricing-title">
                                    <h3>silver pack</h3>
                                </div>
                                <div className="pricing-desc">
                                     <h2><span className="currency">à partir de</span>77<span className="date">€</span></h2>
                                    <ul>
                                        <li>Nail cutting & styling</li>
                                        <li>Hot Ayurvedic spa</li>
                                        <li>Hot oil massage</li>
                                        <li>Body wraps</li>
                                    </ul>
                                    <div className="book-now">
                                        <a href="#">Book now</a>
                                    </div>
                                </div>
                            </div>
                        </div> */}


                    </div>
                </div>
            </div>
            {/* <!--pricing palaning end-->  */}
            {/* <!--Testimonial start-->  */}
            <div className="testimonial">
                <div className="bg-img">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
                                <div className="testimonail-list owl_pagination">


                                   {/* <div className="single-testimonial">
                                        <p><i className="fa fa-quote-left" aria-hidden="true"></i>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley </p>
                                        <h3>sathi bhuiyan</h3>
                                        <p className="title">Manager</p>
                                    </div>
                                     <div className="single-testimonial">
                                        <p><i className="fa fa-quote-left" aria-hidden="true"></i>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley </p>
                                        <h3>sathi bhuiyan</h3>
                                        <p className="title">Manager</p>
                                    </div>*/}
                                    {/* <div className="single-testimonial">
                                        <p><i className="fa fa-quote-left" aria-hidden="true"></i>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley </p>
                                        <h3>sathi bhuiyan</h3>
                                        <p className="title">Manager</p>
                                    </div>
                                    <div className="single-testimonial">
                                        <p><i className="fa fa-quote-left" aria-hidden="true"></i>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley </p>
                                        <h3>sathi bhuiyan</h3>
                                        <p className="title">Manager</p>
                                    </div> */}

                                    <div className="single-testimonial">
                                        <p><i className="fa fa-quote-left" aria-hidden="true"></i>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley </p>
                                        <h3>Sophie B.</h3>
                                        {/* <p className="title">Manager</p> */}
                                    </div> 


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--Testimonial end-->  */}
            {/* <!--our blog start-->  */}
            <div className="our-blog pt-100">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2">
                            <div className="section-title text-center">
                                <h2>Notre Blog</h2>
                                <p>  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim nostrud exercitation ullamco laboris nisi.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-sm-12 col-xs-12">
                            <div className="single-blog">
                                <div className="single-blog-top fix">
                                    <div className="blog-img">
                                        <a href="#">
                                            <img src="https://images.unsplash.com/photo-1522108098940-de49801b5b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="" />
                                        </a>
                                    </div>
                                    <div className="blog-desc">
                                        <h6><a href="#">Lorem Ipsum is simply dummy</a></h6>
                                        <p>Lorem ipsum dolor sit amet, consectetur eiusmodm adipisicing elit, sed do eiusmod tempor incididuntm ut labore et dolore magna aliqua. </p>
                                        <a className="read-more" href="#">savoir plus<i className="zmdi zmdi-long-arrow-right"></i></a>
                                    </div>
                                </div>
                                <div className="blog-bottom-action">
                                    <div className="blog-publish">
                                        <p><i className="zmdi zmdi-time"></i>25 Juin 2020 </p>
                                    </div>
                                    <div className="blog-action-box">
                                        <ul>
                                            <li><a href="#"><i className="fas fa-heart"></i>(550)</a></li>
                                            <li><a href="#"><i className="fas fa-comments"></i>(200)</a></li>
                                            <li><a href="#"><i className="fas fa-share-alt"></i>(100)</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12 col-xs-12">
                            <div className="single-blog">
                                <div className="single-blog-top fix">
                                    <div className="blog-img">
                                        <a href="#">
                                            <img src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="" />
                                        </a>
                                    </div>
                                    <div className="blog-desc">
                                        <h6><a href="#">Lorem Ipsum is simply dummy</a></h6>
                                        <p>Lorem ipsum dolor sit amet, consectetur eiusmodm adipisicing elit, sed do eiusmod tempor incididuntm ut labore et dolore magna aliqua. </p>
                                        <a className="read-more" href="#">Savoir plus<i className="zmdi zmdi-long-arrow-right"></i></a>
                                    </div>
                                </div>
                                <div className="blog-bottom-action">
                                    <div className="blog-publish">
                                        <p><i className="zmdi zmdi-time"></i>25 Juin 2020  </p>
                                    </div>
                                    <div className="blog-action-box">
                                        <ul>
                                            <li><a href="#"><i className="fas fa-heart"></i>(550)</a></li>
                                            <li><a href="#"><i className="fas fa-comments"></i>(200)</a></li>
                                            <li><a href="#"><i className="fas fa-share-alt"></i>(100)</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--our blog end-->  */}

            {/* <!--Our partener start-->  */}
            
            {/* <div className="our-partner">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="partner-list">
                                <div className="single-partner">
                                    <a href="#"><img src="images/logo/1.png" alt="" /></a>
                                </div>
                                <div className="single-partner">
                                    <a href="#"><img src="images/logo/2.png" alt="" /></a>
                                </div>
                                <div className="single-partner">
                                    <a href="#"><img src="images/logo/3.png" alt="" /></a>
                                </div>
                                <div className="single-partner">
                                    <a href="#"><img src="images/logo/4.png" alt="" /></a>
                                </div>
                                <div className="single-partner">
                                    <a href="#"><img src="images/logo/2.png" alt="" /></a>
                                </div>
                                <div className="single-partner">
                                    <a href="#"><img src="images/logo/1.png" alt="" /></a>
                                </div>
                                <div className="single-partner">
                                    <a href="#"><img src="images/logo/2.png" alt="" /></a>
                                </div>
                                <div className="single-partner">
                                    <a href="#"><img src="images/logo/3.png" alt="" /></a>
                                </div>
                                <div className="single-partner">
                                    <a href="#"><img src="images/logo/4.png" alt="" /></a>
                                </div>
                                <div className="single-partner">
                                    <a href="#"><img src="images/logo/2.png" alt="" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
             */}
            {/* <!--Our partener end-->  */}

            
            
        </div>
    )
}


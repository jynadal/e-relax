import React from 'react'
import Slider from './Slider'

export default function Home ()  {
    return (
        <div>
            <Slider />
                        {/* <!--slider section start-->  */}
            <div className="slider-container">
                {/* <!-- Slider Image -->  */}
                <div id="mainSlider" className="nivoSlider slider-image">
                    <img src="../images/slider/1.jpg" alt="" title="#htmlcaption1"/>
                    <img src="images/slider/2.jpg" alt="" title="#htmlcaption2"/>
                    <img src="images/slider/3.jpg" alt="" title="#htmlcaption3"/>
                </div>
                {/* <!-- Slider Caption 1 -->  */}
                <div id="htmlcaption1" className="nivo-html-caption slider-caption-1">
                    <div className="slider-text-table">
                        <div className="slider-text-tablecell">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-12 col-sm-12 col-xs-12">
                                        <div className="slide1-text">
                                            <div className="middle-text">
                                                <div className="title-1 wow rotateInDownRight" data-wow-duration="0.9s" data-wow-delay="0s">
                                                    <h1>welcome our beauty house</h1>
                                                </div>	
                                                <div className="desc wow slideInRight" data-wow-duration="1.2s" data-wow-delay="0.2s">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel volutpat felis, eu condimentum<br/> massa.lorem ipsum dolor sit amet,consectetur adipicing elit.</p>
                                                </div>
                                                <div className="explore-now wow bounceInUp" data-wow-duration="1.3s" data-wow-delay=".5s">
                                                    <a href="#">Explore now</a>
                                                </div>	
                                            </div>	
                                        </div>				
                                    </div>
                                </div>	
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div id="htmlcaption2" className="nivo-html-caption slider-caption-1">
                    <div className="slider-text-table">
                        <div className="slider-text-tablecell">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-12 col-sm-12 col-xs-12">
                                        <div className="slide1-text">
                                            <div className="middle-text">
                                                <div className="title-1 wow rotateInDownRight" data-wow-duration="0.9s" data-wow-delay="0s">
                                                    <h1>welcome our beauty house</h1>
                                                </div>	
                                                <div className="desc wow slideInRight" data-wow-duration="1.2s" data-wow-delay="0.2s">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel volutpat felis, eu condimentum<br/> massa.lorem ipsum dolor sit amet,consectetur adipicing elit.</p>
                                                </div>
                                                <div className="explore-now wow bounceInUp" data-wow-duration="1.3s" data-wow-delay=".5s">
                                                    <a href="#">Explore now</a>
                                                </div>	
                                            </div>	
                                        </div>				
                                    </div>
                                </div>	
                            </div>
                        </div>
                    </div>
                </div>

                <div id="htmlcaption3" className="nivo-html-caption slider-caption-1">
                    <div className="slider-text-table">
                        <div className="slider-text-tablecell">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-12 col-sm-12 col-xs-12">
                                        <div className="slide1-text">
                                            <div className="middle-text">
                                                <div className="title-1 wow rotateInDownRight" data-wow-duration="0.9s" data-wow-delay="0s">
                                                    <h1>welcome our beauty house</h1>
                                                </div>	
                                                <div className="desc wow slideInRight" data-wow-duration="1.2s" data-wow-delay="0.2s">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel volutpat felis, eu condimentum<br/> massa.lorem ipsum dolor sit amet,consectetur adipicing elit.</p>
                                                </div>
                                                <div className="explore-now wow bounceInUp" data-wow-duration="1.3s" data-wow-delay=".5s">
                                                    <a href="#">Explore now</a>
                                                </div>	
                                            </div>	
                                        </div>				
                                    </div>
                                </div>	
                            </div>
                        </div>
                    </div>
                </div>

               */}


            </div>
            {/* <!--slider section end-->  */}

            {/* <!--welcome section start-->  */}
            <div className="welcome-about">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-12 col-xs-12">
                            <div className="about-img">
                                <img src="about1.jpg" alt="" />
                                {/* ../images/about/ */}
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
            <div className="fun-fact text-center ptb-100">
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
            </div>
            {/* <!--fun fact area end-->  */}
            {/* <!--Gallery section start-->  */}
            <div className="galllery ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2">
                            <div className="section-title text-center">
                                <h2>our latest gallery</h2>
                                <p>  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim nostrud exercitation ullamco laboris nisi.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="gallery-tab-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="gallery-tab-menu text-center">   
                                    <ul role="tablist">
                                        <li role="presentation"><a href="#all" aria-controls="all" data-toggle="tab">All</a></li>
                                        <li role="presentation"><a aria-controls="massage" href="#massage" data-toggle="tab">Lunch</a></li>
                                        <li role="presentation"><a href="#skin" aria-controls="skin" data-toggle="tab">skin care</a></li>
                                        <li role="presentation"  className="active"><a href="#hair" aria-controls="hair" data-toggle="tab">hair cut</a></li>
                                        <li role="presentation"><a href="#nail" aria-controls="nail" data-toggle="tab">nail care  </a></li>
                                        <li role="presentation"><a href="#beauty" aria-controls="beauty" data-toggle="tab"> beauty spa</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="gallery-tab-content">
                        <div className="tab-content">
                            <div role="tabpanel" className="tab-pane" id="all">
                                <div className="single-gallery-list owl_pagination">
                                    <div className="single-gallery">
                                        <div className="gallery-img">
                                            <img src="images/gallery/1.jpg" alt="" />
                                            <a href="images/gallery/1.jpg"><i className="zmdi zmdi-zoom-in"></i></a>
                                        </div>
                                    </div>
                                    <div className="single-gallery">
                                        <div className="gallery-img">
                                            <img src="images/gallery/2.jpg" alt="" />
                                            <a href="images/gallery/2.jpg"><i className="zmdi zmdi-zoom-in"></i></a>
                                        </div>
                                    </div>
                                    <div className="single-gallery">
                                        <div className="gallery-img">
                                            <img src="images/gallery/3.jpg" alt="" />
                                            <a href="images/gallery/3.jpg"><i className="zmdi zmdi-zoom-in"></i></a>
                                        </div>
                                    </div>
                                    <div className="single-gallery">
                                        <div className="gallery-img">
                                            <img src="images/gallery/4.jpg" alt="" />
                                             <a href="images/gallery/4.jpg"><i className="zmdi zmdi-zoom-in"></i></a>
                                        </div>
                                    </div>
                                    <div className="single-gallery">
                                        <div className="gallery-img">
                                            <img src="images/gallery/5.jpg" alt="" />
                                            <a href="images/gallery/5.jpg"><i className="zmdi zmdi-zoom-in"></i></a>
                                        </div>
                                    </div>
                                    <div className="single-gallery">
                                        <div className="gallery-img">
                                            <img src="images/gallery/3.jpg" alt="" />
                                            <a href="images/gallery/3.jpg"><i className="zmdi zmdi-zoom-in"></i></a>
                                        </div>
                                    </div>
                                    <div className="single-gallery">
                                        <div className="gallery-img">
                                            <img src="images/gallery/4.jpg" alt="" />
                                            <a href="images/gallery/4.jpg"><i className="zmdi zmdi-zoom-in"></i></a>
                                        </div>
                                    </div>
                                    <div className="single-gallery">
                                        <div className="gallery-img">
                                            <img src="images/gallery/5.jpg" alt="" />
                                            <a href="images/gallery/5.jpg"><i className="zmdi zmdi-zoom-in"></i></a>
                                        </div>
                                    </div>
                                    <div className="single-gallery">
                                        <div className="gallery-img">
                                            <img src="images/gallery/4.jpg" alt="" />
                                            <a href="images/gallery/4.jpg"><i className="zmdi zmdi-zoom-in"></i></a>
                                        </div>
                                    </div>
                                    <div className="single-gallery">
                                        <div className="gallery-img">
                                            <img src="images/gallery/3.jpg" alt="" />
                                            <a href="images/gallery/4.jpg"><i className="zmdi zmdi-zoom-in"></i></a>
                                        </div>
                                    </div>
                                    <div className="single-gallery">
                                        <div className="gallery-img">
                                            <img src="images/gallery/4.jpg" alt="" />
                                             <a href="images/gallery/4.jpg"><i className="zmdi zmdi-zoom-in"></i></a>
                                        </div>
                                    </div>
                                    <div className="single-gallery">
                                        <div className="gallery-img">
                                            <img src="images/gallery/5.jpg" alt="" />
                                            <a href="images/gallery/5.jpg"><i className="zmdi zmdi-zoom-in"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div role="tabpanel" className="tab-pane" id="massage">
                                <div className="single-gallery-list owl_pagination">
                                    <div className="single-gallery">
                                        <div className="gallery-img">
                                            <img src="images/gallery/1.jpg" alt="" />
                                            <a href="images/gallery/1.jpg"><i className="zmdi zmdi-zoom-in"></i></a>
                                        </div>
                                    </div>
                                    <div className="single-gallery">
                                        <div className="gallery-img">
                                            <img src="images/gallery/2.jpg" alt="" />
                                            <a href="images/gallery/2.jpg"><i className="zmdi zmdi-zoom-in"></i></a>
                                        </div>
                                    </div>
                                    <div className="single-gallery">
                                        <div className="gallery-img">
                                            <img src="images/gallery/3.jpg" alt="" />
                                            <span>  <a href=""><i className="zmdi zmdi-zoom-in"></i></a></span>
                                        </div>
                                    </div>
                                    <div className="single-gallery">
                                        <div className="gallery-img">
                                            <img src="images/gallery/4.jpg" alt="" />
                                             <a href="images/gallery/4.jpg"><i className="zmdi zmdi-zoom-in"></i></a>
                                        </div>
                                    </div>
                                    <div className="single-gallery">
                                        <div className="gallery-img">
                                            <img src="images/gallery/5.jpg" alt="" />
                                            <a href="images/gallery/5.jpg"><i className="zmdi zmdi-zoom-in"></i></a>
                                        </div>
                                    </div>
                                    <div className="single-gallery">
                                        <div className="gallery-img">
                                            <img src="images/gallery/3.jpg" alt="" />
                                            <a href="images/gallery/3.jpg"><i className="zmdi zmdi-zoom-in"></i></a>
                                        </div>
                                    </div>
                                    <div className="single-gallery">
                                        <div className="gallery-img">
                                            <img src="images/gallery/4.jpg" alt="" />
                                             <a href="images/gallery/4.jpg"><i className="zmdi zmdi-zoom-in"></i></a>
                                        </div>
                                    </div>
                                    <div className="single-gallery">
                                        <div className="gallery-img">
                                            <img src="images/gallery/5.jpg" alt="" />
                                            <a href="images/gallery/5.jpg"><i className="zmdi zmdi-zoom-in"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div role="tabpanel" className="tab-pane" id="skin">
                            <div className="single-gallery-list owl_pagination">
                                    <div className="single-gallery">
                                        <div className="gallery-img">
                                            <img src="images/gallery/1.jpg" alt="" />
                                            <a href="images/gallery/1.jpg"><i className="zmdi zmdi-zoom-in"></i></a>
                                        </div>
                                    </div>
                                    <div className="single-gallery">
                                        <div className="gallery-img">
                                            <img src="images/gallery/2.jpg" alt="" />
                                            <a href="images/gallery/2.jpg"><i className="zmdi zmdi-zoom-in"></i></a>
                                        </div>
                                    </div>
                                    <div className="single-gallery">
                                        <div className="gallery-img">
                                            <img src="images/gallery/3.jpg" alt="" />
                                            <a href="images/gallery/3.jpg"><i className="zmdi zmdi-zoom-in"></i></a>
                                        </div>
                                    </div>
                                    <div className="single-gallery">
                                        <div className="gallery-img">
                                            <img src="images/gallery/4.jpg" alt="" />
                                             <a href="images/gallery/4.jpg"><i className="zmdi zmdi-zoom-in"></i></a>
                                        </div>
                                    </div>
                                    <div className="single-gallery">
                                        <div className="gallery-img">
                                            <img src="images/gallery/5.jpg" alt="" />
                                            <a href="images/gallery/5.jpg"><i className="zmdi zmdi-zoom-in"></i></a>
                                        </div>
                                    </div>
                                    <div className="single-gallery">
                                        <div className="gallery-img">
                                            <img src="images/gallery/3.jpg" alt="" />
                                            <a href="images/gallery/4.jpg"><i className="zmdi zmdi-zoom-in"></i></a>
                                        </div>
                                    </div>
                                    <div className="single-gallery">
                                        <div className="gallery-img">
                                            <img src="images/gallery/4.jpg" alt="" />
                                             <a href="images/gallery/4.jpg"><i className="zmdi zmdi-zoom-in"></i></a>
                                        </div>
                                    </div>
                                    <div className="single-gallery">
                                        <div className="gallery-img">
                                            <img src="images/gallery/5.jpg" alt="" />
                                            <a href="images/gallery/5.jpg"><i className="zmdi zmdi-zoom-in"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div role="tabpanel" className="tab-pane active" id="hair">
                                <div className="single-gallery-list owl_pagination">
                                    <div className="single-gallery">
                                        <div className="gallery-img">
                                            <img src="images/gallery/1.jpg" alt="" />
                                            <a href="images/gallery/1.jpg"><i className="zmdi zmdi-zoom-in"></i></a>
                                        </div>
                                    </div>
                                    <div className="single-gallery">
                                        <div className="gallery-img">
                                            <img src="images/gallery/2.jpg" alt="" />
                                            <span><a href="images/gallery/2.jpg"><i className="zmdi zmdi-zoom-in"></i></a></span>
                                        </div>
                                    </div>
                                    <div className="single-gallery">
                                        <div className="gallery-img">
                                            <img src="images/gallery/3.jpg" alt="" />
                                            <a href="images/gallery/3.jpg"><i className="zmdi zmdi-zoom-in"></i></a>
                                        </div>
                                    </div>
                                    <div className="single-gallery">
                                        <div className="gallery-img">
                                            <img src="images/gallery/4.jpg" alt="" />
                                             <a href="images/gallery/4.jpg"><i className="zmdi zmdi-zoom-in"></i></a>
                                        </div>
                                    </div>
                                    <div className="single-gallery">
                                        <div className="gallery-img">
                                            <img src="images/gallery/5.jpg" alt="" />
                                            <a href="images/gallery/5.jpg"><i className="zmdi zmdi-zoom-in"></i></a>
                                        </div>
                                    </div>
                                    <div className="single-gallery">
                                        <div className="gallery-img">
                                            <img src="images/gallery/3.jpg" alt="" />
                                            <a href="images/gallery/3.jpg"><i className="zmdi zmdi-zoom-in"></i></a>
                                        </div>
                                    </div>
                                    <div className="single-gallery">
                                        <div className="gallery-img">
                                            <img src="images/gallery/4.jpg" alt="" />
                                             <a href="images/gallery/4.jpg"><i className="zmdi zmdi-zoom-in"></i></a>
                                        </div>
                                    </div>
                                    <div className="single-gallery">
                                        <div className="gallery-img">
                                            <img src="images/gallery/5.jpg" alt="" />
                                            <a href="images/gallery/5.jpg"><i className="zmdi zmdi-zoom-in"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div role="tabpanel" className="tab-pane" id="nail">
                                <div className="single-gallery-list owl_pagination">
                                    <div className="single-gallery">
                                        <div className="gallery-img">
                                            <img src="images/gallery/1.jpg" alt="" />
                                            <a href="images/gallery/1.jpg"><i className="zmdi zmdi-zoom-in"></i></a>
                                        </div>
                                    </div>
                                    <div className="single-gallery">
                                        <div className="gallery-img">
                                            <img src="images/gallery/2.jpg" alt="" />
                                            <a href="images/gallery/2.jpg"><i className="zmdi zmdi-zoom-in"></i></a>
                                        </div>
                                    </div>
                                    <div className="single-gallery">
                                        <div className="gallery-img">
                                            <img src="images/gallery/3.jpg" alt="" />
                                            <a href="images/gallery/3.jpg"><i className="zmdi zmdi-zoom-in"></i></a>
                                        </div>
                                    </div>
                                    <div className="single-gallery">
                                        <div className="gallery-img">
                                            <img src="images/gallery/4.jpg" alt="" />
                                             <a href="images/gallery/4.jpg"><i className="zmdi zmdi-zoom-in"></i></a>
                                        </div>
                                    </div>
                                    <div className="single-gallery">
                                        <div className="gallery-img">
                                            <img src="images/gallery/5.jpg" alt="" />
                                            <a href="images/gallery/5.jpg"><i className="zmdi zmdi-zoom-in"></i></a>
                                        </div>
                                    </div>
                                    <div className="single-gallery">
                                        <div className="gallery-img">
                                            <img src="images/gallery/3.jpg" alt="" />
                                            <a href="images/gallery/3.jpg"><i className="zmdi zmdi-zoom-in"></i></a>
                                        </div>
                                    </div>
                                    <div className="single-gallery">
                                        <div className="gallery-img">
                                            <img src="images/gallery/4.jpg" alt="" />
                                             <a href="images/gallery/4.jpg"><i className="zmdi zmdi-zoom-in"></i></a>
                                        </div>
                                    </div>
                                    <div className="single-gallery">
                                        <div className="gallery-img">
                                            <img src="images/gallery/5.jpg" alt="" />
                                            <a href="images/gallery/5.jpg"><i className="zmdi zmdi-zoom-in"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div role="tabpanel" className="tab-pane" id="beauty">
                                <div className="single-gallery-list owl_pagination">
                                    <div className="single-gallery">
                                        <div className="gallery-img">
                                            <img src="images/gallery/1.jpg" alt="" />
                                            <a href="images/gallery/1.jpg"><i className="zmdi zmdi-zoom-in"></i></a>
                                        </div>
                                    </div>
                                    <div className="single-gallery">
                                        <div className="gallery-img">
                                            <img src="images/gallery/2.jpg" alt="" />
                                            <a href="images/gallery/2.jpg"><i className="zmdi zmdi-zoom-in"></i></a>
                                        </div>
                                    </div>
                                    <div className="single-gallery">
                                        <div className="gallery-img">
                                            <img src="images/gallery/3.jpg" alt="" />
                                            <a href="images/gallery/3.jpg"><i className="zmdi zmdi-zoom-in"></i></a>
                                        </div>
                                    </div>
                                    <div className="single-gallery">
                                        <div className="gallery-img">
                                            <img src="images/gallery/4.jpg" alt="" />
                                             <a href="images/gallery/4.jpg"><i className="zmdi zmdi-zoom-in"></i></a>
                                        </div>
                                    </div>
                                    <div className="single-gallery">
                                        <div className="gallery-img">
                                            <img src="images/gallery/5.jpg" alt="" />
                                            <a href="images/gallery/5.jpg"><i className="zmdi zmdi-zoom-in"></i></a>
                                        </div>
                                    </div>
                                    <div className="single-gallery">
                                        <div className="gallery-img">
                                            <img src="images/gallery/3.jpg" alt="" />
                                            <a href="images/gallery/3.jpg"><i className="zmdi zmdi-zoom-in"></i></a>
                                        </div>
                                    </div>
                                    <div className="single-gallery">
                                        <div className="gallery-img">
                                            <img src="images/gallery/4.jpg" alt="" />
                                             <a href="images/gallery/4.jpg"><i className="zmdi zmdi-zoom-in"></i></a>
                                        </div>
                                    </div>
                                    <div className="single-gallery">
                                        <div className="gallery-img">
                                            <img src="images/gallery/5.jpg" alt="" />
                                            <a href="images/gallery/5.jpg"><i className="zmdi zmdi-zoom-in"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--Gallery section end-->  */}
            {/* <!--Offer section start-->  */}
            <div className="special-offer">
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
            </div>
            {/* <!--Offer section end-->  */}
            {/* <!--Our feature section-->  */}
            <div className="our-feature ptb-100">
                <div className="container">
                   <div className="row">
                        <div className="col-md-8 col-md-offset-2">
                            <div className="section-title text-center">
                                <h2>our Features</h2>
                                <p>  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim nostrud exercitation ullamco laboris nisi.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <div className="single-feature text-center">
                                <div className="feature-img">
                                    <img src="images/feature/1.png" alt="" />
                                </div>
                                <div className="feature-desc">
                                    <h3><a href="#">Face Treatment</a></h3>
                                    <p>$100</p>
                                    <a href="#">Book now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <div className="single-feature text-center">
                                <div className="feature-img">
                                    <img src="images/feature/2.png" alt="" />
                                </div>
                                <div className="feature-desc">
                                    <h3><a href="#">Body message</a></h3>
                                    <p>$300</p>
                                    <a href="#">Book now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 hidden-sm col-xs-12">
                            <div className="single-feature text-center">
                                <div className="feature-img">
                                    <img src="images/feature/3.png" alt="" />
                                </div>
                                <div className="feature-desc">
                                    <h3><a href="#">Nail Treatment</a></h3>
                                    <p>$200</p>
                                    <a href="#">Book now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--Our feature section end-->  */}
            {/* <!--Video section start-->  */}
            <div className="video-section text-center">
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
            </div>
            {/* <!--Video section end-->  */}
            {/* <!--pricing palaning start-->  */}
            <div className="pricing-plan ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2">
                            <div className="section-title text-center">
                                <h2>our pricing plan</h2>
                                <p>  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim nostrud exercitation ullamco laboris nisi.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <div className="pricing-table text-center">
                                <div className="pricing-title">
                                    <h3>silver pack</h3>
                                </div>
                                <div className="pricing-desc">
                                    <h2><span className="currency">$</span>77<span className="date">/month</span></h2>
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
                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <div className="pricing-table text-center">
                                <div className="pricing-title">
                                    <h3>silver pack</h3>
                                </div>
                                <div className="pricing-desc">
                                    <h2><span className="currency">$</span>77<span className="date">/month</span></h2>
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
                                     <h2><span className="currency">$</span>77<span className="date">/month</span></h2>
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
                                    <div className="single-testimonial">
                                        <p><i className="fa fa-quote-left" aria-hidden="true"></i>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley </p>
                                        <h3>sathi bhuiyan</h3>
                                        <p className="title">Manager</p>
                                    </div>
                                    <div className="single-testimonial">
                                        <p><i className="fa fa-quote-left" aria-hidden="true"></i>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley </p>
                                        <h3>sathi bhuiyan</h3>
                                        <p className="title">Manager</p>
                                    </div>
                                    <div className="single-testimonial">
                                        <p><i className="fa fa-quote-left" aria-hidden="true"></i>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley </p>
                                        <h3>sathi bhuiyan</h3>
                                        <p className="title">Manager</p>
                                    </div>
                                    <div className="single-testimonial">
                                        <p><i className="fa fa-quote-left" aria-hidden="true"></i>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley </p>
                                        <h3>sathi bhuiyan</h3>
                                        <p className="title">Manager</p>
                                    </div>
                                    <div className="single-testimonial">
                                        <p><i className="fa fa-quote-left" aria-hidden="true"></i>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley </p>
                                        <h3>sathi bhuiyan</h3>
                                        <p className="title">Manager</p>
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
                                <h2>our Blog</h2>
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
                                            <img src="images/blog/1.jpg" alt="" />
                                        </a>
                                    </div>
                                    <div className="blog-desc">
                                        <h6><a href="#">Lorem Ipsum is simply dummy</a></h6>
                                        <p>Lorem ipsum dolor sit amet, consectetur eiusmodm adipisicing elit, sed do eiusmod tempor incididuntm ut labore et dolore magna aliqua. </p>
                                        <a className="read-more" href="#">Read more <i className="zmdi zmdi-long-arrow-right"></i></a>
                                    </div>
                                </div>
                                <div className="blog-bottom-action">
                                    <div className="blog-publish">
                                        <p><i className="zmdi zmdi-time"></i>Jun 25, 2017 </p>
                                    </div>
                                    <div className="blog-action-box">
                                        <ul>
                                            <li><a href="#"><i className="zmdi zmdi-favorite-outline"></i>(550)</a></li>
                                            <li><a href="#"><i className="zmdi zmdi-comments"></i>(200)</a></li>
                                            <li><a href="#"><i className="zmdi zmdi-share"></i>(100)</a></li>
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
                                            <img src="images/blog/2.jpg" alt="" />
                                        </a>
                                    </div>
                                    <div className="blog-desc">
                                        <h6><a href="#">Lorem Ipsum is simply dummy</a></h6>
                                        <p>Lorem ipsum dolor sit amet, consectetur eiusmodm adipisicing elit, sed do eiusmod tempor incididuntm ut labore et dolore magna aliqua. </p>
                                        <a className="read-more" href="#">Read more <i className="zmdi zmdi-long-arrow-right"></i></a>
                                    </div>
                                </div>
                                <div className="blog-bottom-action">
                                    <div className="blog-publish">
                                        <p><i className="zmdi zmdi-time"></i>Jun 25, 2017 </p>
                                    </div>
                                    <div className="blog-action-box">
                                        <ul>
                                            <li><a href="#"><i className="zmdi zmdi-favorite-outline"></i>(550)</a></li>
                                            <li><a href="#"><i className="zmdi zmdi-comments"></i>(200)</a></li>
                                            <li><a href="#"><i className="zmdi zmdi-share"></i>(100)</a></li>
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
            <div className="our-partner">
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
            {/* <!--Our partener end-->  */}

            
            
        </div>
    )
}


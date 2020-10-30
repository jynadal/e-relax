import React from 'react'
import {Link} from 'react-router-dom'

import service1 from '../assets/images/feature/service1.png'
import service2 from '../assets/images/feature/service2.jpg'
import service3 from '../assets/images/feature/service3.jpg'
import service4 from '../assets/images/feature/service4.jpg'



const Feature = () => {

    // let featImg = [
    //     {
    //         url:{service1}, title:"Epilations Demi-jambes", price:"14€", link:"service1"
    //     },{
    //         url:{service4}, title:"Hydratationnnn intense", price:"53€", link:"service2"
    //     },{
    //         url:{service3}, title:"Soinnnn des mains", price:"31€", link:"service3"
    //     }
    // ]

    return (
        <div>
            <div className="our-feature ptb-100">
                <div className="container">
                   <div className="row">
                        <div className="col-md-8 col-md-offset-2">
                            <div className="section-title text-center">
                                <h2>Mes services </h2>
                                <p>  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim nostrud exercitation ullamco laboris nisi.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">

                        {/* {featImg.map((fImg,index) => {

                        <div className="col-md-4 col-sm-6 col-xs-12" key={index}>
                            <div className="single-feature text-center">
                                <div className="feature-img">
                                    <img src={fImg.url} alt="Service-1" />
                                </div>
                                <div className="feature-desc">
                                    <h3><a href="#">{fImg.title}</a></h3>
                                    <p>{fImg.price}</p>
                                    <Link to="service1">Réservez</Link>
                                </div>
                            </div>
                        </div>

                        })} */}

                        
                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <div className="single-feature text-center">
                                <div className="feature-img">
                                    <img src={service1} alt="Service-1" />
                                </div>
                                <div className="feature-desc">
                                    <h3><a href="#">Epilations Demi-jambes</a></h3>
                                    <p>14€</p>
                                    <Link to="service1">Réservez</Link>
                                </div>
                            </div>
                        </div>                        

                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <div className="single-feature text-center">
                                <div className="feature-img">
                                    <img src={service2} alt="" />
                                </div>
                                <div className="feature-desc">
                                    <h3><a href="#">Soins du corps</a></h3>
                                    <p>42€</p>
                                    <a href="#">Book now</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 hidden-sm col-xs-12">
                            <div className="single-feature text-center">
                                <div className="feature-img">
                                    <img src={service3} alt="" />
                                </div>
                                <div className="feature-desc">
                                    <h3><a href="#">Soins du visage</a></h3>
                                    <p>46€</p>
                                    <a href="#">Book now</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            
            
            
        </div>
    )
}

export default Feature;

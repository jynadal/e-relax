import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import logo from '../assets/images/logo/logo-escalerelax.png';

import {Avatar} from 'antd';
// import './_navigation.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {faPinterest, faFacebook, faTwitter, faInstagram, faDribbble } from "@fortawesome/free-brands-svg-icons";


const Navigation = ({user}) => {

    const navLinks = [
        {
            title:'Accueil',
            path:'/'
        },
        // {
        //     title:'A Propos',
        //     path:'/About-us'
        // },
        {
            title:'Nos Prestations',
            path:'/Prestations'
        },
        // {
        //     title:'Offre Spéciales',
        //     path:'/Specials'
        // },
        {
            title:'Idées Cadeaux',
            path:'/Gifts'
        },{
            title:'Blog',
            path:'/Blog'
        },{
            title:'Contact',
            path:'/Contact-us'
        }
    ]
    
    return (
    <Fragment>

        <div className="header">
            <div className="header-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-6 hidden-xs">
                            <div className="header-left">
                                <div className="call-center">
                                    <p><i className="zmdi zmdi-phone"></i>06 15 17 23 41</p>
                                </div>
                                <div className="mail-address">
                                    <p><i className="zmdi zmdi-email"></i>contact@escalerelax.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-12">
                            <div className="social-icons">
                            
                                <a href="https://www.facebook.com"><i className="fab fa-facebook"></i></a>
                                <a href="#"><i class="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-dribbble"></i></a>
                                <a href="#"><i className="fab fa-pinterest"></i></a>
                                <a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a>
                                
                                {/* <a href="https://www.instagram.com/"
                                className="instagra social">
                                <FontAwesomeIcon icon={faInstagram} size="1x" />
                                </a>
                                <a href="https://www.facebook.com"
                                className="facebook social">
                                <FontAwesomeIcon icon={faFacebook} size="1x" />
                                </a> */}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-bottom sticky-header">
                <div className="container">
                    <div className="mgea-full-width">
                        <div className="row">
                            <div className="col-md-2 col-sm-6 col-xs-9">
                                <div className="logo">
                                    <a href="Home">
                                        <img src={logo} alt="logo"/></a>
                                </div>
                            </div>
                            <div className="col-md-8 hidden-sm hidden-xs">
                                <div className="menu">
                                    <nav>
                                        <ul>
                                            {navLinks.map((link, index) =>(
                                            <li key={index}><Link to={link.path}>{link.title}</Link>                                           
                                            </li>
                                             ))}
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-md-2 col-sm-6 col-xs-3">
                                <div className="header-action-box">
                                    

                                     {/* <div className="mini-cart" >
                                        <div className="cart-icon">
                                            <a href="#"><i className="zmdi zmdi-shopping-cart"></i></a>
                                            <span>2</span>
                                        </div>
                                         <!-- Mini Cart --> 
                                        <div className="mini-cart-box right">
                                            <div className="mini-cart-product fix">
                                                <a href="#" className="image"><img src="images/cart/mini-1.jpg" alt="" /></a>
                                                <div className="content fix">
                                                    <a href="#" className="title">wooden furniture</a>
                                                    <p>Color: Black</p>
                                                    <p>Size: SL</p>
                                                    <button className="remove"><i className="zmdi zmdi-close"></i></button>
                                                </div>
                                            </div>
                                            <div className="mini-cart-product fix">
                                                <a href="#" className="image"><img src="images/cart/mini-1.jpg" alt="" /></a>
                                                <div className="content fix">
                                                    <a href="#" className="title">wooden furniture</a>
                                                    <p>Color: Black</p>
                                                    <p>Size: SL</p>
                                                    <button className="remove"><i className="zmdi zmdi-close"></i></button>
                                                </div>
                                            </div>
                                            <div className="mini-cart-product fix">
                                                <a href="#" className="image"><img src="images/cart/mini-1.jpg" alt="" /></a>
                                                <div className="content fix">
                                                    <a href="#" className="title">wooden furniture</a>
                                                    <p>Color: Black</p>
                                                    <p>Size: SL</p>
                                                    <button className="remove"><i className="zmdi zmdi-close"></i></button>
                                                </div>
                                            </div>
                                            <div className="mini-cart-checkout text-center">
                                                <a href="checkout.html">checkout</a>
                                            </div>
                                        </div>
                                        <!--mini cart end-->
                                    </div>*/}

                                    {/* <div className="search">
                                        <a href="#"><i className="fas fa-search"></i></a>
                                    </div> */}

                                </div>
                                <div className="search-box">
                                    <div className="search-form">
                                        <form action="#" id="search-form">
                                            <input type="search" name="search" placeholder="Search here..." />
                                            <button type="submit">
                                                <span><i className="fa fa-search"></i></span>
                                            </button>
                                        </form>                                
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Mobile menu start --> */}
                <div className="mobile-menu-area hidden-lg hidden-md">
                    <div className="container">
                        <div className="col-md-12">
                            <nav id="dropdown">
                                <ul>
                                {navLinks.map((link, index) =>(
                                    <li key={index}><Link to={link.path}>{link.title}</Link>                                           
                                    </li>
                                     ))}
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                {/* <!-- Mobile menu end --> */}
            </div>
         </div>

    </Fragment>
    

           
            
    )
}

export default Navigation;

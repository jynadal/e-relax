import React from 'react';
import {Link} from 'react-router-dom';
import './navigation.modules.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faPinterest,
    faFacebook,
    faTwitter,
    faInstagram, faDribbble
  } from "@fortawesome/free-brands-svg-icons";

import {SocialMediaIconsReact} from 'social-media-icons-react';

import { Facebook, Twitter, Dribbble, Pinterest, Instagram } from 'react-feather';

const Navigation = () => {

    const navLinks = [
        {
            title:'Accueil',
            path:'/'
        },{
            title:'A Propos',
            path:'/About-us'
        }, {
            title:'Nos Prestations',
            path:'/Prestations'
        },{
            title:'Offre Spéciales',
            path:'/Specials'
        }, {
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
    <div className=" site-navigation header">
            {/* <!--header section start--> */}
        
             <div className="header-top">
                <div className="container">
                    <div className="row">

                        <div className="col-md-6 col-sm-6 hidden-xs">
                            <div className="header-left">                                                               
                                
                                <div className="call-center">
                                <p><i className="zmdi zmdi-phone"></i>(+880) 01656300176</p>                               
                                </div>
                                <div className="mail-address">
                                <p><i className="zmdi zmdi-email"></i>breed@gmail.com</p>                               
                                </div>

                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-12">
                            <div className="social-icons">

                                <a href="https://www.facebook.com"
                                className="facebook social">
                                <FontAwesomeIcon icon={faFacebook} size="1x" />
                                </a>

                                <a href="https://twitter.com/?lang=fr/" className="twitter social">
                                <FontAwesomeIcon icon={faTwitter} size="1x" />
                                </a>
                                {/* <a href="https://dribbble.com/"
                                className="dribbble social">
                                <FontAwesomeIcon icon={faDribbble} size="1x" />
                                </a> */}
                                <a href="https://www.pinterest.fr/"
                                className="pinterest social">
                                <FontAwesomeIcon icon={faPinterest} size="1x" />
                                </a>
                                <a href="https://www.instagram.com/"
                                className="instagra social">
                                <FontAwesomeIcon icon={faInstagram} size="1x" />
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className=" header-bottom sticky-header">

                <div className="container">
                    <div className="mgea-full-width">
                        <div className="row">
                            <div className="col-md-2 col-sm-6 col-xs-9">

                                <div className="logo menu-title">
                                    <a href="index.html"><img src="../images/logo/logo.png" alt=""/><span>Escale Relax</span></a>
                                </div>

                            </div>

                            <div className="col-md-8 hidden-sm hidden-xs">

                                <div className="menu-content-container">
                                    <nav>
                                        <ul>
                                            {navLinks.map((link, index) =>(
                                                <li key={index}>
                                                    <Link to={link.path}>{link.title}</Link>
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
                                        {/* <!-- Mini Cart --> */}

                                        {/* <div className="mini-cart-box right">
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
                                        </div> */}

                                        {/* <!--mini cart end--> */}
                                    {/*</div> */}


                                    <div className="search">
                                        <a href="#"><i className="zmdi zmdi-search"/></a>
                                    </div>

                                </div>

                                <div className="search-box">
                                    <div className="search-form">
                                        <form action="#" id="search-form">
                                            <input type="search" name="search" placeholder="Search here..."/>
                                            <button type="submit">
                                                <span><i className="fa fa-search"/></span>
                                            </button>
                                        </form>                                
                                    </div>
                                </div>

                            </div>


                            
                        </div>
                        
                    </div>
                </div>
                {/* <!-- Mobile menu start --> */}
                
                {/* <div className="mobile-menu-area hidden-lg hidden-md">
                    <div className="container">
                        <div className="col-md-12">
                            <nav id="dropdown">
                                <ul>
                                    <li><a href="index.html">Home</a>
                                        <ul className="dropdown_menu">
                                            <li><a href="index-box-fixed.html">home page seven</a></li>
                                        </ul>
                                    </li>


                                    <li><a href="about-us.html">about</a></li>
                                    <li><a href="#">pages</a>
                                        <ul className="dropdown_menu">
                                            <li><a href="about-us.html">about us</a></li>
                                            <li><a href="404.html">404</a></li>
                                            <li><a href="contact-us.html">contact us</a></li>
                                            <li><a href="blog.html">Blog</a></li>
                                            <li><a href="blog-details.html">blog Deatils</a></li>
                                            <li><a href="gallery-2.html">gallery</a></li>
                                            <li><a href="shop.html">shop pages</a></li>
                                        </ul>
                                    </li>

                                    <li><a href="blog.html">blog</a></li>
                                    <li><a href="contact-us.html">contact</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div> */}

                {/* <!-- Mobile menu end --> */}
            </div>

             {/* <!--header section end--> */}
        
        
        
         </div>
           
            
    )
}

export default Navigation;

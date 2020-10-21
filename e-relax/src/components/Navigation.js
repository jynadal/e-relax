import React from 'react'

const Navigation = () => {
    return (
    <div className="header">
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
                                <a href="#"><i className="zmdi zmdi-facebook"></i></a>
                                <a href="#"><i className="zmdi zmdi-twitter"></i></a>
                                <a href="#"><i className="zmdi zmdi-dribbble"></i></a>
                                <a href="#"><i className="zmdi zmdi-pinterest"></i></a>
                                <a href="#"><i className="zmdi zmdi-instagram"></i></a>
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
                                    <a href="index.html"><img src="images/logo/logo.png" alt=""></a>
                                </div>
                            </div>
                            <div className="col-md-8 hidden-sm hidden-xs">
                                <div className="menu">
                                    <nav>
                                        <ul>
                                            <li><a href="index.html">Home</a>
                                                <ul className="dropdown_menu">
                                                    <li><a href="index.html">home page one</a></li>
                                                    <li><a href="index-2.html">home page two</a></li>
                                                    <li><a href="index-3.html">home page three</a></li>
                                                    <li><a href="index-4.html">home page four</a></li>
                                                    <li><a href="index-5.html">home page five</a></li>
                                                    <li><a href="index-box.html">home page six</a></li>
                                                    <li><a href="index-box-fixed.html">home page seven</a></li>
                                                </ul>
                                            </li>
                                            <li className="mega-parent item-2"><a href="shop.html">shop</a>
                                               <ul className="mgea-menu">
                                                    <li className="mega-sub"><a href="#">Column one</a>
                                                        <ul className="mega-sub-item">
                                                            <li><a href="shop.html">shop page</a></li>
                                                            <li><a href="shop.html">shop sidebar</a></li>
                                                            <li><a href="wishlist.html">wishlist</a></li>
                                                            <li><a href="product-details.html">product Details</a></li>
                                                            <li><a href="cart.html">cart</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="mega-sub"><a href="#">Column two</a>
                                                        <ul className="mega-sub-item">
                                                            <li><a href="checkout.html">checkout</a></li>
                                                            <li><a href="gallery-2.html">Gallery 2</a></li>
                                                            <li><a href="gallery.html">gallery</a></li>
                                                            <li><a href="elements-feature.html">Feature</a></li>
                                                            <li><a href="elements-fun-fact.html">Fun fact</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="mega-sub"><a href="#">Column Three</a>
                                                      <div className="mega-img">
                                                          <img src="images/product/mega.jpg" alt="">
                                                      </div>  
                                                    </li>
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
                                            <li className="mega-parent"><a href="#">Feature</a>
                                               <ul className="mgea-menu">
                                                    <li className="mega-sub"><a href="#">Column one</a>
                                                        <ul className="mega-sub-item">
                                                            <li><a href="elements-accordion.html">Accordion</a></li>
                                                            <li><a href="elements-tab.html">Tab</a></li>
                                                            <li><a href="elements-table.html">table</a></li>
                                                            <li><a href="elements-progessbar.html">progressbar</a></li>
                                                            <li><a href="elements-alerts.html">Alerts</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="mega-sub"><a href="#">Column two</a>
                                                        <ul className="mega-sub-item">
                                                            <li><a href="elements-audio.html">Audio</a></li>
                                                            <li><a href="elements-video.html">video</a></li>
                                                            <li><a href="elements-gallery.html">gallery one</a></li>
                                                            <li><a href="gallery-2.html">Gallery two</a></li>
                                                            <li><a href="elements-typhograpy.html">typhogrpahy</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="mega-sub"><a href="#">Column Three</a>
                                                        <ul className="mega-sub-item">
                                                            <li><a href="elements-testimonial.html">Testimonial</a></li>
                                                            <li><a href="elements-brand.html">brand</a></li>
                                                            <li><a href="elements-team.html">Team</a></li>
                                                            <li><a href="elements-button.html">Button</a></li>
                                                            <li><a href="elements-map.html">map</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="mega-sub"><a href="#">Column one</a>
                                                        <ul className="mega-sub-item">
                                                            <li><a href="elements-pricing.html">Pricing table</a></li>
                                                            <li><a href="elements-fun-fact.html">Fun fact</a></li>
                                                            <li><a href="elements-feature.html">Features</a></li>
                                                            <li><a href="elements-video-2.html">Video section</a></li>
                                                            <li><a href="elements-no-sticky.html">No sticky</a></li>
                                                        </ul>
                                                    </li>
                                                </ul> 
                                            </li>
                                            <li><a href="blog.html">blog</a></li>
                                            <li><a href="contact-us.html">contact</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-md-2 col-sm-6 col-xs-3">
                                <div className="header-action-box">
                                    <div className="mini-cart" >
                                        <div className="cart-icon">
                                            <a href="#"><i className="zmdi zmdi-shopping-cart"></i></a>
                                            <span>2</span>
                                        </div>
                                        {/* <!-- Mini Cart --> */}
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
                                    </div>
                                    <div className="search">
                                        <a href="#"><i className="zmdi zmdi-search"></i></a>
                                    </div>
                                </div>
                                <div className="search-box">
                                    <div className="search-form">
                                        <form action="#" id="search-form">
                                            <input type="search" name="search" placeholder="Search here...">
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
                                    <li><a href="index.html">Home</a>
                                        <ul className="dropdown_menu">
                                            <li><a href="index.html">home page one</a></li>
                                            <li><a href="index-2.html">home page two</a></li>
                                            <li><a href="index-3.html">home page three</a></li>
                                            <li><a href="index-4.html">home page four</a></li>
                                            <li><a href="index-5.html">home page five</a></li>
                                            <li><a href="index-box.html">home page six</a></li>
                                            <li><a href="index-box-fixed.html">home page seven</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="shop.html">shop</a>
                                       <ul className="mgea-menu">
                                            <li className="mega-sub"><a href="#">Column one</a>
                                                <ul className="mega-sub-item">
                                                    <li><a href="shop.html">shop page</a></li>
                                                    <li><a href="shop.html">shop sidebar</a></li>
                                                    <li><a href="wishlist.html">wishlist</a></li>
                                                    <li><a href="product-details.html">product Details</a></li>
                                                    <li><a href="cart.html">cart</a></li>
                                                </ul>
                                            </li>
                                            <li className="mega-sub"><a href="#">Column two</a>
                                                <ul className="mega-sub-item">
                                                    <li><a href="checkout.html">checkout</a></li>
                                                    <li><a href="gallery-2.html">Gallery 2</a></li>
                                                    <li><a href="gallery.html">gallery</a></li>
                                                    <li><a href="elements-feature.html">Feature</a></li>
                                                    <li><a href="elements-fun-fact.html">Fun fact</a></li>
                                                </ul>
                                            </li>
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
                                    <li><a href="#">Feature</a>
                                       <ul className="mgea-menu">
                                            <li className="mega-sub"><a href="#">Column one</a>
                                                <ul className="mega-sub-item">
                                                    <li><a href="elements-accordion.html">Accordion</a></li>
                                                    <li><a href="elements-tab.html">Tab</a></li>
                                                    <li><a href="elements-table.html">table</a></li>
                                                    <li><a href="elements-progessbar.html">progressbar</a></li>
                                                    <li><a href="elements-alerts.html">Alerts</a></li>
                                                </ul>
                                            </li>
                                            <li className="mega-sub"><a href="#">Column two</a>
                                                <ul className="mega-sub-item">
                                                    <li><a href="elements-audio.html">Audio</a></li>
                                                    <li><a href="elements-video.html">video</a></li>
                                                    <li><a href="elements-gallery.html">gallery one</a></li>
                                                    <li><a href="gallery-2.html">Gallery two</a></li>
                                                    <li><a href="elements-typhograpy.html">typhogrpahy</a></li>
                                                </ul>
                                            </li>
                                            <li className="mega-sub"><a href="#">Column Three</a>
                                                <ul className="mega-sub-item">
                                                    <li><a href="elements-testimonial.html">Testimonial</a></li>
                                                    <li><a href="elements-brand.html">brand</a></li>
                                                    <li><a href="elements-team.html">Team</a></li>
                                                    <li><a href="elements-button.html">Button</a></li>
                                                    <li><a href="elements-map.html">map</a></li>
                                                </ul>
                                            </li>
                                            <li className="mega-sub"><a href="#">Column one</a>
                                                <ul className="mega-sub-item">
                                                    <li><a href="elements-pricing.html">Pricing table</a></li>
                                                    <li><a href="elements-fun-fact.html">Fun fact</a></li>
                                                    <li><a href="elements-feature.html">Features</a></li>
                                                    <li><a href="elements-video-2.html">Video section</a></li>
                                                    <li><a href="elements-no-sticky.html">No sticky</a></li>
                                                </ul>
                                            </li>
                                        </ul> 
                                    </li>
                                    <li><a href="blog.html">blog</a></li>
                                    <li><a href="contact-us.html">contact</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                {/* <!-- Mobile menu end --> */}
            </div>
            
             {/* <!--header section end--> */}
         </div>
           
            
    )
}

export default Navigation;

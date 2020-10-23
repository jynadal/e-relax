import React from 'react'
import {Link} from 'react-router-dom'

export default function Footer()  {
    const footerLinks = [
        {
            title:'Accueil',
            path:'/'
        },
        {
            title:'A Propos',
            path:'/About-us'
        },
        {
            title:'Nos Prestations',
            path:'/Prestations'
        },
        {
            title:'Offre Spéciales',
            path:'/Specials'
        },
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
        <div class="footer">
            <div class="footer-top ptb-100">
                <div class="container">
                    <div class="row">
                        <div class="col-md-3 col-sm-6 col-xs-12">
                            <div class="single-footer contact">
                                <div class="footer-title">
                                    <h3>Contact us</h3>
                                </div>
                                <div class="contact-action mb-15">
                                    <span><i class="zmdi zmdi-pin"></i></span>
                                    <p>House No 08, Road No 08,<br/>Din Bari, Dhaka, Bangladesh</p>
                                </div>
                                <div class="contact-action mb-15">
                                    <span><i class="zmdi zmdi-email"></i></span>
                                    <p>Username@gmail.com<br/>Damo@gmail.com</p>
                                </div>
                                <div class="contact-action">
                                    <span>
                                        <i class="zmdi zmdi-phone"></i>
                                    </span>
                                    <p>(+660 256 24857)<br/>(+660 256 24857)</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-2 col-sm-6 col-xs-12">
                            <div class="single-footer quick-links">
                               <div class="footer-title">
                                    <h3>Quick links</h3>
                                </div>
                                <ul>
                                    {footerLinks.map((link, index) =>(
                                        <li key={index}><Link to={link.path}>{link.title}</Link></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6 col-xs-12">
                            <div class="single-footer open-hours">
                                <div class="footer-title">
                                    <h3>Open hours</h3>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetueiusmodm dost  adipisicing elit, sed do eiusmod is tempincididuntm ut 
                                    lorem ipsome do or sit amt  labore et dolor </p>
                                <ul>
                                    <li>Monday - Friday <span>8.00-5.00</span></li>
                                    <li>Saturday <span>12.00-5.00</span></li>
                                    <li>Sunday <span class="close">close</span></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6 col-xs-12">
                            <div class="single-footer widget">
                                <div class="footer-title">
                                    <h3>Flicker widget</h3>
                                </div>
                                <ul>
                                    <li><a href="#"><img src="images/widget/1.jpg" alt="" /></a></li>
                                    <li><a href="#"><img src="images/widget/2.jpg" alt="" /></a></li>
                                    <li><a href="#"><img src="images/widget/3.jpg" alt="" /></a></li>
                                    <li><a href="#"><img src="images/widget/4.jpg" alt="" /></a></li>
                                    <li><a href="#"><img src="images/widget/5.jpg" alt="" /></a></li>
                                    <li><a href="#"><img src="images/widget/6.jpg" alt="" /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-bottom text-center">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 col-sm-12 col-xs-12">
                            <div class="copyright">
                                <p>
                                    Copyright© 2020.All right reserved.
                                    <a target="_blank" href="https://monwebdev.fr">MonWebDev</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}



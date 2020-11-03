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
                                    <h3>Me Contactez</h3>
                                </div>
                                <div class="contact-action mb-15">
                                    <span><i class="fas fa-map-marker-alt" style={{color: "#6bc513"}}></i></span>
                                    <p>Servon, Lesigny, Santeny, ...<br/> Brie-Compte-Robert</p>
                                </div>
                                <div class="contact-action mb-15">
                                    <span><i class="fas fa-envelope" style={{color: "#6bc513"}}></i></span>
                                    <p>contact@escalerelax.com<br/></p>
                                </div>
                                <div class="contact-action">
                                    <span>
                                    <i class="fas fa-mobile-alt" style={{color:"#6bc513"}}></i>
                                    </span>
                                    <p>Tel: 06 15 17 23 41</p>
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
                                    <li>Lundi au Samedi <span>9h à 20h</span></li>
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



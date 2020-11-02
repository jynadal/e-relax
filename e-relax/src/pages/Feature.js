import React from 'react'
import {Link} from 'react-router-dom'

const Feature = () => {

    let featImg = [
        {
            url:'https://images.unsplash.com/photo-1526758097130-bab247274f58?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', title:"Epilations Demi-jambes", price:"14€", link:"service1"
        },{
            url:'https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80', title:"Hydratationnnn intense", price:"53€", link:"service2"
        },{
            url:'https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', title:"Soinnnn des mains", price:"31€", link:"service3"
        }
    ]

    return (
        <section>
            <div className="our-feature ptb-100">
                <div className="container">
                   <div className="row">
                        <div className="col-md-8 col-md-offset-2">
                            <div className="section-title text-center">
                                <h2>Nos services </h2>
                                <p>  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim nostrud exercitation ullamco laboris nisi.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">

                        {featImg.map((feat,index) => {
                         console.log(feat);

                        return(
                                                
                        <div className="col-md-4 col-sm-6 col-xs-12" key={index}>
                            <div className="single-feature text-center">
                                <div className="feature-img">
                                    <img src={feat.url} alt="Service-1" />
                                </div>
                                <div className="feature-desc">
                                    <h3><a href="#">{feat.title}</a></h3>
                                    <p>{feat.price}</p>
                                    <Link to="/Prestations">Réservez</Link>
                                </div>
                            </div>
                        </div>
                        )
                        })}
                        
                    </div>
                </div>
            </div>
            
            
            
        </section>
    )
}

export default Feature;

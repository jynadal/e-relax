import React from 'react'
import Img404 from '../images/404Poilu.jpg'

const QuatresCentsQuiatres = () => {
    return (
        <div>
            {/* <!--Breadcrumbs start--> */}
            <div class="breadcrumbs text-center">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 col-xs-12 col-sm-12">
                            <div class="breadcrumbs-title">
                                <h2>404</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="breadcrumbs-menu">
                    <ul>
                        <li><a href="#">hOME <span>//</span></a></li>
                        <li>404</li>
                    </ul>
                </div>
            </div>
            {/* <!--Breadcrumbs end--> */}
            
            <div class="error-area text-center ptb-100">
            <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="error-content ">
                                <img src={Img404} alt=""/>
                                <h2>404</h2>
                                <h3>Page non trouver!</h3>
                                <h4>Oops! il y a un petit souci.</h4>
                                <p>Je vais chercher des recharges de cire <br/>
                                    et on se rejoint à l'ACCUEIL</p>
                                <a class="go-home" href="Home">Allez à l'Accueil</a>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                
        </div>
    )
}

export default QuatresCentsQuiatres;

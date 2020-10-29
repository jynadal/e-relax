import React from 'react'

function ImgComp({src}) {
    let imgStyles = {
        width: 100 +"%",
        height: "auto"
    }
    return (
        <div>
            <img src={src} alt="slide-image" style={imgStyles}/>
                <div id="htmlcaption1" className="nivo-html-caption slider-caption-1">
                    <div className="slider-text-table">
                        <div className="slider-text-tablecell">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-12 col-sm-12 col-xs-12">
                                        <div className="slide1-text">
                                            <div className="middle-text">
                                                <div className="title-1 wow rotateInDownRight" data-wow-duration="0.9s" data-wow-delay="0s">
                                                    <h1>Soins esthétique à domicile</h1>
                                                </div>	
                                                <div className="desc wow slideInRight" data-wow-duration="1.2s" data-wow-delay="0.2s">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel volutpat felis, eu condimentum<br/> massa.lorem ipsum dolor sit amet,consectetur adipicing elit.</p>
                                                </div>
                                                <div className="explore-now wow bounceInUp" data-wow-duration="1.3s" data-wow-delay=".5s">
                                                    <a href="#">Savoir plus</a>
                                                </div>	
                                            </div>	
                                        </div>				
                                    </div>
                                </div>	
                            </div>
                        </div>
                    </div>
                </div>
            
        </div>
            
    ) 
}

export default ImgComp

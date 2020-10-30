import React from 'react'

function Gallery() {

    //let

    return (
        <>
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
                                        <li role="presentation"><a href="#all" aria-controls="all" data-toggle="tab">Tous</a></li>
                                        <li role="presentation"><a aria-controls="massage" href="#massage" data-toggle="tab">Epilations</a></li>
                                        <li role="presentation"><a href="#skin" aria-controls="skin" data-toggle="tab">Soins Visage</a></li>
                                        <li role="presentation"  className="active"><a href="#hair" aria-controls="hair" data-toggle="tab">Soin Corps</a></li>
                                        <li role="presentation"><a href="#nail" aria-controls="nail" data-toggle="tab">Modelage Corps</a></li>
                                        <li role="presentation"><a href="#beauty" aria-controls="beauty" data-toggle="tab"> Beauté mains&pieds</a></li>
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


            
        </>
    )
}

export default Gallery;

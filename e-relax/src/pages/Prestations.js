import React from 'react'

export default function Prestations() {

    let prestaImg = [
        {
            url:'https://images.unsplash.com/photo-1526758097130-bab247274f58?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=357&q=60', title:"Epilations Demi-jambes", price:"14€", link:"service1", filter:".wax"
        },{
            url:'https://images.unsplash.com/photo-1526758097130-bab247274f58?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=357&q=60', title:"Epilations Demi-jambes", price:"14€", link:"service1", filter:".face"
        },{
            url:'https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=357&q=60', title:"Hydratationnnn intense", price:"53€", link:"service2", filter:".skin"
        },{
            url:'https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=357&q=60', title:"Soinnnn des mains", price:"31€", link:"service3", filter:".body"
        },{
            url:'https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=500&q=60', title:"Hydratationnnn intense", price:"53€", link:"service2", filter:".beauty"
        },{
            url:'https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', title:"Soinnnn des mains", price:"31€", link:"service3", filter:".skin"
        }
    ]


    return (
        <div>
                 {/* <!--Breadcrumbs start-->*/}
            <div className="breadcrumbs text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="breadcrumbs-title">
                                <h2>Our gallery</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="breadcrumbs-menu">
                    <ul>
                        <li><a href="#">Accueil <span>//</span></a></li>
                        <li>Nos prestations et services</li>
                    </ul>
                </div>
            </div>
            {/* <!--Breadcrumbs end-->*/}
            {/* <!--Gallery section start-->*/}
            <div className="galllery item2">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2">
                            <div className="section-title text-center">
                                <h2>Nos prestations</h2>
                                <p>  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim nostrud exercitation ullamco laboris nisi.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="gallery-isotope-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="gallery-tab-menu isotope-menu text-center">   
                                    <ul>
                                        <li className="active" data-filter="*">Tous</li>
                                        <li data-filter=".wax">Epilations</li>
                                        <li data-filter=".face">Soins Visage</li>
                                        <li data-filter=".skin">Soin Corps</li>
                                        <li data-filter=".body">Modelage Corps</li>
                                        <li data-filter=".beaute"> Beauté mains&pieds</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="gallery-tab-content isotope-gallery">
                            <div className="row">
                                {/* {prestaImg.map((presta, index) => {
                                    return(
                                        <div className="col-md-4 col-sm-6 col-xs-12 massage nail gallery-item" className={presta.filte}>
                                            <div className="single-gallery">
                                                <div className="gallery-img">
                                                    <img src={presta.url} alt="image-prestations"/>
                                                    <a href={presta.url}><i className="fas fa-search-plus"></i></a>
                                                    <h3>{presta.title}</h3>
                                                    <p>à {presta.price}</p>
                                                </div>
                                            </div>
                                        </div>

                                    )
                                })} */}
                                 
                                <div className="col-md-4 col-sm-6 col-xs-12 wax hair beauty gallery-item">
                                    <div className="single-gallery">
                                        <div className="gallery-img">
                                            <img src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=500&q=60" alt=""/>
                                            <a href="https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=500&q=60"><i className="fas fa-search-plus"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 col-xs-12 wax hair beauty gallery-item">
                                    <div className="single-gallery">
                                        <div className="gallery-img">
                                            <img src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=500&q=60" alt=""/>
                                            <a href="https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=500&q=60"><i className="fas fa-search-plus"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 col-xs-12 face hair beauty gallery-item">
                                    <div className="single-gallery">
                                        <div className="gallery-img">
                                           <img src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=500&q=60" alt=""/>
                                            <a href="https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=500&q=60"><i className="fas fa-search-plus"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 col-xs-12 skin hair beauty gallery-item">
                                    <div className="single-gallery">
                                        <div className="gallery-img">
                                           <img src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=500&q=60" alt=""/>
                                            <a href="https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=500&q=60"><i className="fas fa-search-plus"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 col-xs-12 beaute hair beauty gallery-item">
                                    <div className="single-gallery">
                                        <div className="gallery-img">
                                           <img src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=500&q=60" alt=""/>
                                            <a href="https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=500&q=60"><i className="fas fa-search-plus"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 col-xs-12 skin hair beauty gallery-item">
                                    <div className="single-gallery">
                                        <div className="gallery-img">
                                           <img src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=500&q=60" alt=""/>
                                            <a href="https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=500&q=60"><i className="fas fa-search-plus"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 col-xs-12 skin hair beauty gallery-item">
                                    <div className="single-gallery">
                                        <div className="gallery-img">
                                           <img src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=500&q=60" alt=""/>
                                            <a href="https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=500&q=60"><i className="fas fa-search-plus"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 col-xs-12 wax hair beauty gallery-item">
                                    <div className="single-gallery">
                                        <div className="gallery-img">
                                           <img src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=500&q=60" alt=""/>
                                            <a href="https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=500&q=60"><i className="fas fa-search-plus"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 col-xs-12 face hair beauty gallery-item">
                                    <div className="single-gallery">
                                        <div className="gallery-img">
                                           <img src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=500&q=60" alt=""/>
                                            <a href="https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=500&q=60"><i className="fas fa-search-plus"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 col-xs-12 skin hair beauty gallery-item">
                                    <div className="single-gallery">
                                        <div className="gallery-img">
                                           <img src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=500&q=60" alt=""/>
                                            <a href="https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=500&q=60"><i className="fas fa-search-plus"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 col-xs-12 beaute hair beauty gallery-item">
                                    <div className="single-gallery">
                                        <div className="gallery-img">
                                           <img src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=500&q=60" alt=""/>
                                            <a href="https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=500&q=60"><i className="fas fa-search-plus"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 col-xs-12 skin hair beauty gallery-item">
                                    <div className="single-gallery">
                                        <div className="gallery-img">
                                           <img src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=500&q=60" alt=""/>
                                            <a href="https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=500&q=60"><i className="fas fa-search-plus"></i></a>
                                        </div>
                                    </div>
                                </div>

                                

                                {/* <div className="col-md-4 col-sm-6 col-xs-12 skin hair nail gallery-item">
                                    <div className="single-gallery">
                                        <div className="gallery-img">
                                            <img src="images/gallery/item2/3.jpg" alt=""/>
                                            <a href="images/gallery/item2/3.jpg"><i className="fas fa-search-plus"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 col-xs-12 massage skin beauty gallery-item">
                                    <div className="single-gallery">
                                        <div className="gallery-img">
                                            <img src="images/gallery/item2/4.jpg" alt=""/>
                                            <a href="images/gallery/item2/4.jpg"><i className="fas fa-search-plus"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 col-xs-12 skin skin nail gallery-item">
                                    <div className="single-gallery">
                                        <div className="gallery-img">
                                            <img src="images/gallery/item2/5.jpg" alt=""/>
                                            <a href="images/gallery/item2/5.jpg"><i className="fas fa-search-plus"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 col-xs-12 massage hair beauty gallery-item">
                                    <div className="single-gallery">
                                        <div className="gallery-img">
                                            <img src="images/gallery/item2/2.jpg" alt=""/>
                                            <a href="images/gallery/item2/2.jpg"><i className="fas fa-search-plus"></i></a>
                                        </div>
                                    </div>
                                </div> */}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--Gallery section end-->*/}            
        </div>
    )
}



import Header from 'components/header'
import Footer from 'components/footer'
import * as React from 'react'
import Head from 'next/head'
import Link from 'next/link'

function HomePage() {
    return (
        <main role="main">

            <div>
                <Head>
                    <title>VR Tours - Home</title>
                    <meta name="description" content="A VR Video Hosting platform" />
                </Head>
            </div>
            
            <Header />

            <div className="p-0 text-center bg-image" style={{ backgroundImage: "url('https://mdbcdn.b-cdn.net/img/new/slides/041.webp')", backgroundSize: "cover", height: "100vh" }}>
                <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)", height: "100vh" }}>
                    <div className="d-flex justify-content-center align-items-center h-100">
                        <div className="text-white">
                            <h1 className="mb-3">Welcome to</h1>
                            <h4 className="mb-3">Our VR Hosting Platform</h4>
                            <Link className="btn btn-outline-light btn-lg" href="/browse" role="button">Click here to start</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-0 text-center bg-image" style={{ backgroundImage: "url('http://cdn.backgroundhost.com/backgrounds/subtlepatterns/black_linen_v2.png')", backgroundSize: "cover", height: "100vh" }}>
                <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)", height: "100vh" }}>
                    <div className="Container">
                        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active" height="600" width="1200" >
                                    <iframe height="600" width="1000" flex-grow="1" border="none" margin="0" padding="0"
                                        src="https://www.youtube.com/embed/wnrHCMI1FNs" allowFullScreen>
                                    </iframe>
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>First slide label</h5>
                                        <p>Some representative placeholder content for the first slide.</p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <iframe height="600" width="1200" flex-grow="1" border="none" margin="0" padding="0"
                                        src="https://www.youtube.com/embed/wnrHCMI1FNs" allowFullScreen>
                                    </iframe>
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>Second slide label</h5>
                                        <p>Some representative placeholder content for the second slide.</p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <iframe height="600" width="1200" flex-grow="1" border="none" margin="0" padding="0"
                                        src="https://www.youtube.com/embed/wnrHCMI1FNs" allowFullScreen>
                                    </iframe>
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>Third slide label</h5>
                                        <p>Some representative placeholder content for the third slide.</p>
                                    </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div id="carouselVideoExample" className="carousel slide carousel-fade" data-mdb-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-mdb-target="#carouselVideoExample" data-mdb-slide-to="0" className="active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-mdb-target="#carouselVideoExample" data-mdb-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-mdb-target="#carouselVideoExample" data-mdb-slide-to="2"
                        aria-label="Slide 3"></button>
                </div>

                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <video className="img-fluid" autoPlay loop muted>
                            <source src="https://mdbcdn.b-cdn.net/img/video/Tropical.mp4" type="video/mp4" />
                        </video>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>
                                Nulla vitae elit libero, a pharetra augue mollis interdum.
                            </p>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <video className="img-fluid" autoPlay loop muted>
                            <source src="https://mdbcdn.b-cdn.net/img/video/forest.mp4" type="video/mp4" />
                        </video>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <video className="img-fluid" autoPlay loop muted>
                            <source src="https://mdbcdn.b-cdn.net/img/video/Agua-natural.mp4" type="video/mp4" />
                        </video>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </div>
                    </div>
                </div>

                <button className="carousel-control-prev" type="button" data-mdb-target="#carouselVideoExample"
                    data-mdb-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-mdb-target="#carouselVideoExample"
                    data-mdb-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <Footer />
        </main>
    )
}

export default HomePage
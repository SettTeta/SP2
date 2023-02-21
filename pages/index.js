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
                        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div class="carousel-inner">
                                <div class="carousel-item active" height="600" width="1200" >
                                    <iframe height="600" width="1200" flex-grow="1" border="none" margin="0" padding="0"
                                        src="https://www.youtube.com/embed/wnrHCMI1FNs" allowFullScreen>
                                    </iframe>
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5>First slide label</h5>
                                        <p>Some representative placeholder content for the first slide.</p>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <iframe height="600" width="1200" flex-grow="1" border="none" margin="0" padding="0"
                                        src="https://www.youtube.com/embed/wnrHCMI1FNs" allowFullScreen>
                                    </iframe>
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5>Second slide label</h5>
                                        <p>Some representative placeholder content for the second slide.</p>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <iframe hheight="600" width="1200" flex-grow="1" border="none" margin="0" padding="0"
                                        src="https://www.youtube.com/embed/wnrHCMI1FNs" allowFullScreen>
                                    </iframe>
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5>Third slide label</h5>
                                        <p>Some representative placeholder content for the third slide.</p>
                                    </div>
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    )
}

export default HomePage
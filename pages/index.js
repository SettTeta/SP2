import Header from 'components/header'
import Footer from 'components/footer'
import * as React from 'react'
import Head from 'next/head'

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
                            <a className="btn btn-outline-light btn-lg" href="/browse" role="button">Click here to start</a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default HomePage
import Head from "next/head"
import Link from "next/link"
import * as React from 'react'
import Header from 'components/header'
import Footer from 'components/footer'


const url = "https://sp-2-eta.vercel.app"
// const url = "http://localhost:3000"

// Step 2: This component is rendered from the server (Server-Side Rendering) SSR
export default function Video({ video }) {

    if (!video) return (
        <div>
            <p>Video not found</p>
            <Link href="/browse">Back</Link>
        </div>
    );

    return (
        <>
            <Head>
                <title>{video.title}</title>
            </Head>

            <Header />

            <section className="jumbotron">
                <div className="container">
                    <br></br>
                    <h1 className="jumbotron-heading">{video.title}</h1>
                    <p className="lead text-muted">
                        {video.desc}
                        <br></br>
                        Link to Video: <Link href={video.link}>{video.link}</Link>
                    </p>
                </div>
            </section>

            <div className="album py-5 bg-light">
                <div className="container-xxl content-row">

                    <div style={{ position: 'relative', paddingBottom: '56.25%', height: '0', overflow: 'hidden' }}>
                        <iframe className="vr-iframe" height="235" frameBorder="0" scrolling="yes" allowvr="yes" allow="vr,gyroscope,accelerometer" flex-grow="1" border="none" margin="0" padding="0"
                            src={video.link} style={{ width: '100%', height: '100%', position: 'absolute', top: '0', left: '0' }} allowFullScreen></iframe>
                    </div>

                    {/* <iframe className="vr-iframe" height="235" frameborder="0" scrolling="yes" allowvr="yes" allow="vr,gyroscope,accelerometer" flex-grow="1" border="none" margin="0" padding="0"
                            src={video.link} allowFullScreen>
                        </iframe> */}

                    {/* <div style={{ position: 'relative', paddingBottom: '56.25%', height: '0', overflow: 'hidden' }}>
                        <iframe className="vr-iframe" src={video.link} frameborder="0" allowvr="yes" allowfullscreen allow="vr; accelerometer; gyroscope; autoplay;"
                            style={{ width: '100%', height: '100%', position: 'absolute', top: '0', left: '0' }}></iframe>
                        <script src="https://studio.stornaway.io/embed/v1/player.js" defer></script>
                    </div> */}
                </div>
            </div>
            <Link href="/browse">Back</Link>

        </>
    )
}

// STEP 1: This function will be executed at the server before loading the page.
export async function getServerSideProps({ params }) {
    console.debug('params', params)
    const res = await fetch(`${url}/api/browse/videos/${params.id}`)
    const video = await res.json()
    console.debug('blog 1', video)
    return { props: { video } }
}
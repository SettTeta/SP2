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
                <title>{video.desc}</title>
            </Head>

            <Header />

            <section className="jumbotron text-center">
                <div className="container">
                    <br></br>
                    <h1 className="jumbotron-heading"><Link href={video.link}>{video.link}</Link></h1>
                    <p className="lead text-muted">
                        {video.desc}
                    </p>
                    <p>
                        <a href="#" className="btn btn-primary my-2" data-bs-toggle="modal" data-bs-target="#exampleModal">Add Video</a>
                        <a href="#" className="btn btn-secondary my-2">Secondary action</a>
                    </p>
                </div>
            </section>

            <div className="album py-5 bg-light">
                <div className="container-xxl content-row">
                <iframe height="600" width="100%" flex-grow="1" border="none" margin="0" padding="0"
                    src={video.link} allowFullScreen/>
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
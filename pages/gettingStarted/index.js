import * as React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Header from 'components/header'
import Image from 'next/image'

import iosIcon from 'public/iosIcon.jpg';
import andIcon from 'public/androidIcon.jpg';
import cardIcon from 'public/cardboardIcon.jpg';
import desktopIcon from 'public/desktopIcon.jpg';
import vrIcon from 'public/vrIcon.jpg';


function GettingStartedPage() {
    return (
        <main role="main">

            <Head>
                <title>Getting Started</title>
            </Head>

            <Header />

            <section className="jumbotron text-center">
                <div className="container">
                    <br></br>
                    <h1 className="jumbotron-heading">Choose your Device</h1>
                    <p className="lead text-muted">
                        The device that you will use will determine what kind of experience you will have. There are different ways to experience the same video.
                    </p>
                </div>
            </section>

            <div className="album py-5 bg-light">
                <div className='container'>
                    <table className="table table-borderless" style={{ textAlign: "center", tableLayout: "fixed", verticalAlign: "center" }}>

                        <thead>
                            <tr>
                                <td><Image
                                    src={iosIcon}
                                    alt="Picture of the author"
                                    width="130"
                                    height="130" /></td>
                                <td><Image
                                    src={andIcon}
                                    alt="Picture of the author"
                                    width="130"
                                    height="130" /></td>
                                <td><Image
                                    src={desktopIcon}
                                    alt="Picture of the author"
                                    width="130"
                                    height="130" /></td>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>iOS</td>
                                <td>Android</td>
                                <td>Computer</td>
                            </tr>
                        </tbody>

                        <tfoot>
                            <tr>
                                <td >iPhone and iPad</td>
                                <td>Google made Phones</td>
                                <td>Applies to both laptops and desktops</td>
                            </tr>
                        </tfoot>
                    </table>

                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>

                    <table className="table table-borderless" style={{ textAlign: "center", tableLayout: "fixed", verticalAlign: "center" }}>
                        <thead>
                            <tr>
                                <td><Image
                                    src={vrIcon}
                                    alt="Picture of the author"
                                    width="130"
                                    height="130" /></td>
                                <td><Image
                                    src={cardIcon}
                                    alt="Picture of the author"
                                    width="160"
                                    height="100" /></td>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td >VR Headset</td>
                                <td>Cardboard Goggles</td>
                            </tr>
                        </tbody>

                        <tfoot>
                            <tr>
                                <td >VR Headsets that is run by itself or requires a computer</td>
                                <td>Make these by yourselves or buy them cheap online and slide your phone inside.</td>
                            </tr>
                        </tfoot>
                    </table>

                </div>
            </div>


        </main>
    )
}

export default GettingStartedPage
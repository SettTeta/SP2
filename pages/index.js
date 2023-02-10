import Header from './header'
import Footer from './footer'
import * as React from 'react'
import VideoCard from './Card.js'
import Head from 'next/head'

const linkArray = require('./data.json')

function Home() {

  let videoCards = [];
  for (let i = 0; i < linkArray.length; i++) {
    let linkVideo = linkArray[i];
    videoCards.push(<VideoCard link={linkVideo.link} desc={linkVideo.desc} />);
  }

  return (
    <main role="main">

      <div>
        <Head>
          <title>My Next.js App</title>
          <meta name="description" content="A simple Next.js application" />
        </Head>
      </div>

      <Header />

      <section className="jumbotron text-center">
        <div className="container">
          <h1 className="jumbotron-heading">Album example</h1>
          <p className="lead text-muted">
            Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.
          </p>
          <p>
            <a href="#" className="btn btn-primary my-2">Main call to action</a>
            <a href="#" className="btn btn-secondary my-2">Secondary action</a>
          </p>
        </div>
      </section>

      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row">

            {videoCards}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

export default Home

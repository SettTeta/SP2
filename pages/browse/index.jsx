import Header from 'components/header'
import Footer from 'components/footer'
import * as React from 'react'
import VideoCard from 'components/Card.js'
import Head from 'next/head'
import { useState } from "react";


//  const url = "https://sp-2-eta.vercel.app"
const url = "http://localhost:3000"

export default function BrowsePage({ videos }) {

  const [videosToShow, setVideosToShow] = useState(6);
  const [showOnlyTrue, setShowOnlyTrue] = useState(false);


  function loadMoreVideos() {
    setVideosToShow(videosToShow + 3);
  }

  function renderVideoCard(video) {
    return (
      <VideoCard
        key={video._id}
        title={video.title}
        link={video.link}
        desc={video.desc}
        onView={video._id}
        onDelete={() => deleteVideo(video._id)}
      />
    );
  }



  function renderVideoCards() {
    const videosToDisplay = videos
      .filter(video => {
        if (showOnlyTrue) {
          return video.type === true;
        } else {
          return video.type === false;
        }
      })
      .slice(0, videosToShow);
    return videosToDisplay.map(renderVideoCard);
  }

  function handleShowAllClick() {
    setShowOnlyTrue(false);
  }


  function handleShowOnlyTrueClick() {
    setShowOnlyTrue(true);
  }

  function handleShowAllClick() {
    setShowOnlyTrue(false);
  }



  return (
    <main role="main">

      <div>
        <Head>
          <title>VR Tours</title>
          <meta name="description" content="A VR Video Hosting platform" />
        </Head>
      </div>

      <Header />

      <section className="jumbotron text-center">
        <div className="container">
          <br></br>
          <h1 className="jumbotron-heading">VR Videos just for you</h1>
          <p className="lead text-muted">
            Browse our collection of VR videos and view them with your full entertainment
          </p>
          <p>
            <a href="#" className="btn btn-primary my-2" onClick={handleShowOnlyTrueClick}>Interactive Tour</a>
            <a href="#" className="btn btn-secondary my-2" onClick={handleShowAllClick}>360 Virtual Tour</a>
          </p>
        </div>
      </section>

      <div className="album py-5 bg-light">
        <div className="container-xxl content-row">
          <div className="row">
            {renderVideoCards()}
            {videosToShow < videos.length && (
              <button className="btn btn-secondary" onClick={loadMoreVideos}>Load more</button>
            )}
          </div>
        </div>
      </div>


    </main>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`${url}/api/browse/videos/`)
  const videos = await res.json()
  return { props: { videos } }
}


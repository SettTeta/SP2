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
    const videosToDisplay = videos.slice(0, videosToShow);
    return videosToDisplay.map(renderVideoCard);
  }

  function deleteVideo(id) {
    if (window.confirm("Are you sure you want to delete")) {
      fetch(`${url}/api/browse/videos/${id}`,
        {
          method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
          window.location.reload(false);
        })
    }
  }

  function addNewVideo() {
    const title = document.getElementById("title").value;
    const link = document.getElementById("link").value;
    const desc = document.getElementById("desc").value;
  
    fetch(`${url}/api/browse/videos/`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json',},
      body: JSON.stringify({ title, link, desc }) 
    })
      .then((res) => res.json())
      .then((data) => {     
        console.log("addNewVideo", data);
        window.location.reload(false);
      })
      .catch((error) => console.error(error));
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
            <a href="#" className="btn btn-primary my-2" data-bs-toggle="modal" data-bs-target="#exampleModal">Add Video</a>
            <a href="#" className="btn btn-secondary my-2">Secondary action</a>
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

      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Add New Video</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor="title" className="col-form-label">Title of Video</label>
                  <input type="text" className="form-control" id="title" />
                </div>
                <div className="form-group">
                  <label htmlFor="recipient-name" className="col-form-label">URL Link of Video</label>
                  <input type="text" className="form-control" id="link" />
                </div>
                <div className="form-group">
                  <label htmlFor="message-text" className="col-form-label">Description</label>
                  <textarea className="form-control" id="desc"></textarea>
                </div>
              </form>
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => {
                addNewVideo();
              }}>Save changes</button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`${url}/api/browse/videos/`)
  const videos = await res.json()
  return { props: { videos } }
}


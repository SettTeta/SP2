import Header from './header'
import Footer from './footer'
import * as React from 'react'
import VideoCard from './Card.js'
import Head from 'next/head'
import { useState, useEffect } from 'react'
import { useLocalStorage } from 'react-use'

const linkArray = require('./data.json')



function Home() {

  let [linksLocalStorage, setLinksLocalStorage] = useLocalStorage("link", linkArray)
  let [videoCards, setVideoCards] = useState([]);


  useEffect(() => {
    let videos = [];
    for (let i = 0; i < linksLocalStorage.length; i++) {
      let linkVideoIndex = linksLocalStorage[i];
      videos.push(<VideoCard
        key={i}
        link={linkVideoIndex.link}
        desc={linkVideoIndex.desc}
        onDelete={() => deleteVideo(i)} />)


    }
    setVideoCards(videos)
  }, [linksLocalStorage]);


  function addNewVideo(links, descs) {
    const newLinksLocalStorage = [...linksLocalStorage, { link: links, desc: descs }];
    setLinksLocalStorage(newLinksLocalStorage);
    videoCards.push(<VideoCard key={linksLocalStorage.length} link={links} desc={descs} />);
    setVideoCards(videoCards);
  }

  function deleteVideo(index) {
    let newLinksLocalStorage = linksLocalStorage.filter((_, i) => i !== index);
    setLinksLocalStorage(newLinksLocalStorage);
    let newVideoCards = videoCards.filter((_, i) => i !== index);
    setVideoCards(newVideoCards);
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
          <h1 className="jumbotron-heading">Album example</h1>
          <p className="lead text-muted">
            Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.
          </p>
          <p>
            <a href="#" className="btn btn-primary my-2" data-bs-toggle="modal" data-bs-target="#exampleModal">Add Video</a>
            {/* <a href="#" className="btn btn-primary my-2" onClick={() => { addNewVideo("https://www.youtube.com/embed/-_nhjmLeGYw", "adsgaygf") }}>Add Video</a> */}
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

      <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                  <label for="recipient-name" className="col-form-label">URL Link of Video</label>
                  <input type="text" className="form-control" id="urlName" />
                </div>
                <div className="form-group">
                  <label for="message-text" className="col-form-label">Description</label>
                  <textarea className="form-control" id="videoDesc"></textarea>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => {
                let urlName = document.getElementById("urlName").value;
                let videoDesc = document.getElementById("videoDesc").value;
                addNewVideo(urlName, videoDesc);
              }}>Save changes</button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

export default Home

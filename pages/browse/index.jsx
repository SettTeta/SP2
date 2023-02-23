import Header from 'components/header'
import Footer from 'components/footer'
import * as React from 'react'
import VideoCard from 'components/Card.js'
import Head from 'next/head'


export default function BrowsePage({videos}) {


  function deleteVideo(id) {
    if (window.confirm("Are you sure you want to delete this video")){
    fetch(`https://sp-2-eta.vercel.app/api/browse/videos/${id}`,
      {
        method: 'DELETE'
      })
      .then(res => res.json())
      .then(data => {
        alert("Deleting " + id)
        window.location.reload(false);
      })
    }
  }

  function addNewVideo(link, desc) {
    fetch(`https://sp-2-eta.vercel.app/api/browse/videos/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ link, desc }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
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
            {
              videos.map(video => {
                return (
                  <VideoCard
                    key={video._id}
                    link={video.link}
                    desc={video.desc}
                    onView={video._id}
                    onDelete={() => deleteVideo(video._id)} />)
              })
            }
          </div>
        </div>
      </div>

      <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
        <iframe
          src="https://player.stornaway.io/embed/dd20538e"
          frameBorder="10"
          allowFullScreen
          allow="accelerometer; gyroscope;autoplay;"
          style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}
        ></iframe>
        <script src="https://studio.stornaway.io/embed/v1/player.js" defer></script>
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
                  <label htmlFor="recipient-name" className="col-form-label">URL Link of Video</label>
                  <input type="text" className="form-control" id="urlName" />
                </div>
                <div className="form-group">
                  <label htmlFor="message-text" className="col-form-label">Description</label>
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

export async function getServerSideProps() {
  const res = await fetch(`https://sp-2-eta.vercel.app/api/browse/videos/`)
  const videos = await res.json()
  // console.debug('blog 1', blogs)
  return { props: { videos } }
}


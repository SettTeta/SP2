import Header from 'components/header'
import Footer from 'components/footer'
import * as React from 'react'
import VideoCard from 'components/Card.js'
import Head from 'next/head'
import { useRouter } from 'next/router'




function BrowsePage() {

  const router = useRouter()
  const params = new URLSearchParams(router.asPath.split(/\?/)[1])
  console.log(params.get("a"))

  const apiUrl = 'http://localhost:3000/api/sp2/videos'

  const [videos, setVideos] = React.useState([])
  const [videoList, setVideoList] = React.useState([])
  const [loading, setLoading] = React.useState(true)

  const deleteVideo = (id) => {
    console.log(id)
    if (window.confirm("Are you sure?")) {
      fetch(apiUrl + '/' + id, {
        method: 'DELETE'
      })
      .then(res => {
        console.log(res); // Add this line
        console.log(typeof(res));
        return res.json();
      })
      .then(doc => {
        console.log("Deleted", doc);
        getVideos();
      })
      .catch(error => {
        console.error(error);
      });
    }
  }

  const getVideos = () => {
    fetch(apiUrl)
      .then(res => res.json())
      .then((data) => {
        console.table(data)
        setVideos(data)
        setLoading(false)
        setVideoList(data.map((video, index) => {
          return (
            <VideoCard
              key={video._id}
              link={video.link}
              desc={video.desc}
              onDelete={() => deleteVideo(video._id)} />

          )


        }))
      }).catch((err) => {
        console.error(err)
      })
  }

  React.useState(() => {
    getVideos()
  }, [])


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
          <h1 className="jumbotron-heading">VR Videos just for you</h1>
          <p className="lead text-muted">
            Browse our collection of VR videos and view them with your full entertainment
          </p>
          <p>
            <a href="#" className="btn btn-primary my-2" data-bs-toggle="modal" data-bs-target="#exampleModal">Add Video</a>
            {/* <a href="#" className="btn btn-primary my-2" onClick={() => { addNewVideo("https://www.youtube.com/embed/-_nhjmLeGYw", "adsgaygf") }}>Add Video</a> */}
            <a href="#" className="btn btn-secondary my-2">Secondary action</a>
          </p>
        </div>
      </section>

      <div className="album py-5 bg-light">
        <div className="container-fluid content-row">
          <div className="row">
            {videoList}
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

export default BrowsePage

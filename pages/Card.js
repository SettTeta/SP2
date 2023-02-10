import * as React from "react"

function CardTemplate(props) {
    const { link, desc } = props
    console.log('link in VideoCard', link)
    return (
        <div className="col-md-4">
            <div className="card mb-4 box-shadow">
                <iframe width="420" height="315"
                    src={link} allowFullScreen>
                </iframe>
                <div className="card-body">
                    <p className="card-text">{desc}</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                            <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                        </div>
                        <small className="text-muted">9 mins</small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardTemplate
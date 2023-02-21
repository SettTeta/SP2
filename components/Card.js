import * as React from "react"

function CardTemplate(props) {
    const { link, desc } = props
    return (
        <div className="col-md-4">
            <div className="card mb-4 box-shadow">
                <div className="card-header bg-light">
                    <p>Title</p>
                </div>
                <iframe height="315" flex-grow="1" border="none" margin="0" padding="0"
                    src={link} allowFullScreen>
                </iframe>
                <div className="card-body">
                    <p className="card-text">{desc}</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                            <button type="button" className="btn btn-sm btn-outline-secondary">Del</button>
                        </div>
                        <small className="text-muted">9 mins</small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardTemplate
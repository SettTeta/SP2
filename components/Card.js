import * as React from "react"

function CardTemplate(props) {
    const { title, link, desc, onView } = props
    return (
        <div className="col-md-4">
            <div className="card mb-4 box-shadow">
                <div className="card-header bg-light">
                    <p>{title}</p>
                </div>
                <iframe className="vr-iframe" height="235" frameBorder="0" scrolling="yes" allowvr="yes" allow="vr,gyroscope,accelerometer" flex-grow="1" border="none" margin="0" padding="0"
                    src={link} allowFullScreen>
                </iframe>
                <div className="card-body">
                    <p className="card-text">{desc}</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <a type="button" className="btn btn-sm btn-outline-secondary" href={`/browse/${onView}`}>View</a>
                        </div>
                        <small className="text-muted">9 mins</small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardTemplate
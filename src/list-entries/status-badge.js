import React from "react"

const StatusBadge = ({status}) => {
    switch(status) {
        case "Playing":
            return <span className="badge bg-primary float-end">{status}</span>
        case "Completed":
            return <span className="badge bg-success float-end">{status}</span>
        case "Plan to Play":
            return <span className="badge bg-secondary float-end">{status}</span>
        case "Dropped":
            return <span className="badge bg-danger float-end">{status}</span>
    }
}
export default StatusBadge;
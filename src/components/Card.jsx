import '../styles/Card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

export default function Card(props) {
    return (
        <section className="card">
            <img src={props.imageUrl} alt="location cover" />

            <span className='location'>
                <FontAwesomeIcon icon={faLocationDot} size="lg" style={{ color: "#f55a5a" }} />
                <h2>{props.location}</h2>
                <a href={props.googleMapsUrl} target="_blank" rel="noreferrer">View on Google Maps</a>
            </span>

            <h1>{props.title}</h1>

            <h3>{props.startDate} - {props.endDate}</h3>

            <p>{props.description}</p>
        </section>
    )
}
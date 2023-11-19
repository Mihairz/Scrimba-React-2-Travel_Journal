import '../styles/Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthEurope } from '@fortawesome/free-solid-svg-icons'

export default function Header(){
    return(
        <header>
            <FontAwesomeIcon icon={faEarthEurope} size="lg" style={{color: "#ffffff",}} />
            <h1>my travel journal.</h1>
        </header>
    )
}
import '../css/navbar.css'
import {useState} from 'react'
const Navbar = () => {
    const [hamburger, setHamburger] = useState(true)

    const handleclick = () => {
        setHamburger(!hamburger)
    }

    return(
        <>
        <navbar className={hamburger ? "active" : ""}>
            <div className={hamburger ? "hamburger active" : "hamburger"} onClick={handleclick}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <div className="nav-menu">
                <a href="/" className="nav-link">Home</a>
                <a href="/about/about-app" className="nav-link">About App</a>
                <a href="/about/about-author" className="nav-link">Author Authors</a>
            </div>
        </navbar>
        </>
    )
}

export default Navbar
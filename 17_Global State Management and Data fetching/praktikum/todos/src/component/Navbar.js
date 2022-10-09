import '../css/navbar.css'
import { Outlet } from "react-router-dom";
import {useState} from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    const [hamburger, setHamburger] = useState(false)

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
                <Link className="nav-link" to={'/'}>Home</Link>
                <Link className="nav-link" to={'/about/about-app'}>About App</Link>
                <Link className="nav-link" to={'/about/about-author'}>Author Authors</Link>
            </div>
        </navbar>
        <Outlet/>
        </>
    )
}

export default Navbar
import '../css/about.css'
import {useNavigate} from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate()

    return (
        <>
        <div className="about text-center">
            <h1 className="">Tersesat Kah?</h1>
            <button onClick={() => {navigate("/")}}>Go Home</button>
        </div>
        </>
    )
}

export default NotFound
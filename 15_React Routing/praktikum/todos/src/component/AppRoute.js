import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Index from "./Index";
import About from "./About";
import Authors from "./Authors";
// import Navbar from "./Navbar";
import NotFound from "./NotFound";

const AppRoute = () => {
    return (
        <>
        {/* <Navbar /> */}
        <Router>
            <Routes>
                <Route path="/" exact element={<Index />}/>
                <Route path="/about/about-app" exact element={<About />}/>
                <Route path="/about/about-author" exact element={<Authors />}/>
                <Route path="*" element={<NotFound />}/>
            </Routes>
        </Router>
        </>
    )
}

export default AppRoute
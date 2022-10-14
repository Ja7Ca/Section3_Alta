import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Index from "./Index";
import About from "./About";
import Authors from "./Authors";
import NotFound from "./NotFound";
import Navbar from "./Navbar";
const AppRoute = () => {
    return (
        <>
        <Router>
            <Routes>
                <Route path="/" element={<Navbar />}>
                    <Route index element={<Index />} />
                    <Route path="about/about-app" element={<About />} />
                    <Route path="about/about-author" element={<Authors />}/>
                </Route>
                <Route path="*" element={<NotFound />}/>
            </Routes>
        </Router>
        </>
    )
}

export default AppRoute
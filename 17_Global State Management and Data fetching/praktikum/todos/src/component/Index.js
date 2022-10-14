import '../css/index.css'
import Todos from './Todos'

const Index = () => {
    return (
        <>
        <div className="container">
            <h1 className="main-title">todos</h1>
            <Todos/>
        </div>
        </>
    )
}

export default Index
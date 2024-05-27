import { Link } from 'react-router-dom'
import './Main.css'
const Main = () => {
    return (
        <div className="main-container container">
            <button className='btn btn-secondary'>
                <Link to="/test"> Ir al test</Link>
            </button>
        </div>
    )
}

export default Main
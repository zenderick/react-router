import {Link} from 'react-router-dom'

const NotFound = () => {
    return (
        <>
            <h1>404</h1>
            <Link to="/" className='btn btn-dark'>Ir al Inicio</Link>
        </>
    )
}

export default NotFound;
import {useParams, Link} from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

const BlogDeails = () => {
    const params =useParams();
    console.log(params)

    const {data, loading, error} = useFetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)

    if(loading) return <p>Loading...</p>
    if(error) return <p>Error...</p>

    return (
        <>
            <h1>{data.id} - {data.title} </h1>
            <p>{data.body}</p>
            <Link to='/blog' className='btn btn-dark'>Volver</Link>
        </>
    )
}

export default BlogDeails;
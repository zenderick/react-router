import {useFetch} from '../hooks/useFetch'
import {Link, useSearchParams} from 'react-router-dom'

const Blog = () => {

    const [serch, setSerch] = useSearchParams();

    const {data, loading, error} = useFetch('https://jsonplaceholder.typicode.com/posts')

    if(loading) return <p>Loading...</p>
    if(error) return <p>Error...</p>

    const handleChange = (im) => {
        let filter = im.target.value
        if (filter){
            setSerch({filter})
        }else {
            setSerch({})
        }
    }

    return(
        <>
            <h1>Blog</h1>
            <input type="text" name="filter" onChange={handleChange} className="form-control my-3"value={serch.get("filter") || ""}/>
            <ul className="list-group">

                {
                    data.filter((item) => {
                        let filter = serch.get("filter");
                        if (!filter) return true;
                        let name = item.title.toLowerCase();
                        return name.startsWith(filter.toLowerCase());
                      })
                    .map((item) => (
                        <Link to={`/blog/${item.id}`} key={item.id} className="list-group-item"> {item.id} {item.title}</Link>
                    ))
                }
            </ul>
        </>
    )
}

export default Blog;
import {useState, useEffect} from 'react';

const ApiFetch = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch ('https://dummyjson.com/posts');
                if(!response.ok) {
                    throw new Error('Network error')
                }

                const result = await response.json();
                setData(result.posts);
                setError(null);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return(
            <div>Loading...</div>
        )
    }
    
    if (error) {
        return(
            <div>Error: {error}</div>
        )
    }

    return(
        <div>
            <div>
                {data.map(post => (
                    <article key={post.id}>
                        <br></br>
                        <h2>{post.title}</h2>
                        <br></br>
                        <p>{post.body}</p>
                        <div>
                            <br></br>
                            {post.reactions?.likes || 0} Likes <br></br>
                            {post.reactions?.dislikes || 0} Dislikes <br></br>
                            {post.reactions?.views|| 0} Comments
                        </div>
                    </article>
                ))}
            </div>

        </div>
    )
};
    export default ApiFetch;
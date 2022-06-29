import { useEffect, useState } from 'react';
import { myFetch } from '../utils';

const baseUrl = process.env.REACT_APP_BACKEND_URL;
if (!baseUrl) throw new Error('baseUrl nerastas');

function PostsPage() {
  const [postsArray, setPostsArray] = useState([]);
  const [token, setToken] = useState(localStorage.getItem('token'));

  async function getPosts(values) {
    const resp = await myFetch(`${baseUrl}/articles`, 'GET', values, token);
    setPostsArray(resp);
    console.log('resp ===', resp);
  }
  useEffect(() => {
    getPosts();
  }, []);
  return (
    <div>
      <h1>Posts page</h1>
      <div className='container row justify-content-center'>
        {postsArray.map((pObj) => (
          <div key={pObj.id} className='card m-1' style={{ width: 18 + 'rem' }}>
            <div className='card-body'>
              <h5 className='card-title'>{pObj.title}</h5>
              <h6 className='card-subtitle mb-2 text-muted'>
                {new Date(pObj.date).toLocaleString('lt-LT').split(' ')[0]}
              </h6>
              <p className='card-text'>{pObj.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostsPage;

import { useEffect, useState } from 'react';
import { myFetch } from '../utils';

const baseUrl = process.env.REACT_APP_BACKEND_URL;
if (!baseUrl) throw new Error('baseUrl nerastas');

function PostsPage() {
  const [postsArray, setPostsArray] = useState([]);

  async function getPosts(values) {
    const resp = await myFetch(`${baseUrl}/articles`, 'GET', values);
    setPostsArray(resp);
    console.log('reps ===', resp);
  }
  useEffect(() => {
    getPosts();
  }, []);
  return (
    <div className='container'>
      <h1>Posts page</h1>
      <div className='card' style={{ width: 18 + 'rem' }}>
        <div className='card-body'>
          <h5 className='card-title'>Card title</h5>
          <h6 className='card-subtitle mb-2 text-muted'>Card subtitle</h6>
          <p className='card-text'>
            Some quick example text to build on the card title and make up the bulk of the card's
            content.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PostsPage;

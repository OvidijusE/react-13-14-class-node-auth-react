import Card from '../components/Card/Card';
import { useState, useEffect } from 'react';
import { baseUrl, myFetchAuth } from '../utils';
import { useAuthCtx } from '../store/authContext';
import { useHistory } from 'react-router-dom';

function PostsPage() {
  const history = useHistory();
  const { token } = useAuthCtx();
  if (!token) history.push('/login');
  // console.log('token ===', token);
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const fetchResult = await myFetchAuth(`${baseUrl}/articles`, token);
    console.log('fetchResult ===', fetchResult);
    if (Array.isArray(fetchResult)) {
      setPosts(fetchResult);
    }
  };

  useEffect(() => {
    if (token) getPosts();
  }, []);

  return (
    <div className='container'>
      <h1 className='display-4 py-4'>Our Posts</h1>

      <div className='d-flex flex-wrap gap-1'>
        {posts.map((pObj) => (
          <Card key={pObj.id} {...pObj} />
        ))}
      </div>
    </div>
  );
}

export default PostsPage;

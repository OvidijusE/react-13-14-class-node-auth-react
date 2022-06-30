import Card from '../components/Card/Card';
import { useState, useEffect } from 'react';
import { baseUrl, myFetchAuth } from '../utils';
import { useAuthCtx } from '../store/authContext';

function PostsPage() {
  const { token } = useAuthCtx();
  // console.log('token ===', token);
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const fetchResult = await myFetchAuth(`${baseUrl}/articles`, token);
    console.log('fetchResult ===', fetchResult);
    setPosts(fetchResult);
  };

  useEffect(() => {
    getPosts();
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

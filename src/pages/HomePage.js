import { useAuthCtx } from '../store/authContext';

function HomePage() {
  const { isUserLoggedIn } = useAuthCtx();

  return (
    <div className='container jumbotron mt-4'>
      <h1 className='display-3'>Home Page</h1>
      {!isUserLoggedIn && <p className='lead'>To view content, please login.</p>}
      {isUserLoggedIn && <p className='lead'>Sveiki atvyke.</p>}
    </div>
  );
}

export default HomePage;

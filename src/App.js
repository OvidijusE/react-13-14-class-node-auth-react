import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';
import PostsPage from './pages/PostsPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  // console.log(process.env.REACT_APP_BACKEND_URL);

  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route path={'/register'}>
          <RegisterPage />
        </Route>
        <Route path={'/login'}>
          <LoginPage />
        </Route>
        <ProtectedRoute path={'/posts'}>
          <PostsPage />
        </ProtectedRoute>
        {/* <Route path={'/posts'}>
          {isUserLoggedIn && <PostsPage />}
          {!isUserLoggedIn && <h2>Please login</h2>}
        </Route> */}
        <Route exact path={'/'}>
          <HomePage />
        </Route>
        <Route path={'*'}>
          <NotFoundPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

import { Link, NavLink } from 'react-router-dom';
import { useAuthCtx } from '../../store/authContext';

function Header() {
  const { isUserLoggedIn, logout } = useAuthCtx();
  return (
    <header>
      <nav className='navbar navbar-expand-sm navbar-dark bg-dark'>
        <div className='container'>
          <Link to={'/'} className='navbar-brand'>
            Logo
          </Link>
          <button className='navbar-toggler'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
            <div className='navbar-nav ml-auto'>
              <NavLink className='nav-link' exact to={'/'}>
                Home
              </NavLink>

              {isUserLoggedIn && (
                <NavLink className='nav-link' to={'/posts'}>
                  Posts
                </NavLink>
              )}
              {!isUserLoggedIn && (
                <NavLink className='nav-link' to={'/login'}>
                  Login
                </NavLink>
              )}

              {!isUserLoggedIn && (
                <NavLink className='nav-link' to={'/register'}>
                  Register
                </NavLink>
              )}

              {isUserLoggedIn && (
                // preventDefault
                <NavLink onClick={logout} className='nav-link' to='/login'>
                  Logout
                </NavLink>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
export default Header;

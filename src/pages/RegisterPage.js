function RegisterPage() {
  return (
    <div className='container'>
      <h1 className='display-4 py-4 text-center'>Register here</h1>

      <form className='jumbotron w-50 mx-auto'>
        <div className='form-group'>
          <label htmlFor='emai'>Email</label>
          <input type='email' className='form-control' id='email' />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input type='password' className='form-control' id='password' />
        </div>
        <div className='form-group'>
          <label htmlFor='repeatPassword'>Repeat Password</label>
          <input type='password' className='form-control' id='repeatPassword' />
        </div>
        <button type='submit' className='btn btn-outline-dark'>
          Register
        </button>
      </form>
    </div>
  );
}

export default RegisterPage;

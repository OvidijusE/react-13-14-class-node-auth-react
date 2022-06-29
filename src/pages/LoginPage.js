import { useFormik } from 'formik';

const initValues = {
  email: '',
  password: '',
};

function LoginPage() {
  const formik = useFormik({
    initialValues: initValues,
    onSubmit: (values) => {
      console.log('values ===', values);
    },
  });
  return (
    <div className='container'>
      <h1 className='display-4 py-4 text-center'>Login Page</h1>

      <form onSubmit={formik.handleSubmit} className='jumbotron w-50 mx-auto'>
        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input
            onChange={formik.handleChange}
            value={formik.values.email}
            type='email'
            className='form-control'
            id='email'
            name='email'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input
            onChange={formik.handleChange}
            value={formik.values.password}
            type='password'
            className='form-control'
            id='password'
            name='password'
          />
        </div>
        <button type='submit' className='btn btn-outline-dark'>
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;

import { useFormik } from 'formik';
import * as Yup from 'yup';
const initValues = {
  email: '',
  password: '',
};
function LoginPage() {
  const formik = useFormik({
    initialValues: initValues,
    validationSchema: Yup.object({
      email: Yup.string().email('Patikrinkite savo email').required(),
      password: Yup.string().min(4, 'Maziausiai 4 simboliai').max(10).required(),
    }),
    onSubmit: (values) => {
      console.log('values ===', values);
    },
  });

  return (
    <div className='container'>
      <h1 className='display-4 py-4 text-center'>LoginPage</h1>

      <form onSubmit={formik.handleSubmit} className='jumbotron w-50 mx-auto'>
        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            type='email'
            // TODO: jei input yra touced ir nera klaidu tai prideam klase "is-valid"
            className={
              formik.touched.email && formik.errors.email
                ? 'is-invalid form-control'
                : 'form-control'
            }
            id='email'
            name='email'
          />
          <div className='invalid-feedback'>{formik.errors.email}</div>
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            type='password'
            className={
              formik.touched.password && formik.errors.password
                ? 'is-invalid form-control'
                : 'form-control'
            }
            id='password'
            name='password'
          />
          <div className='invalid-feedback'>{formik.errors.password}</div>
        </div>
        <button type='submit' className='btn btn-outline-dark'>
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;

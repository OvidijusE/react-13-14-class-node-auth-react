import { useFormik } from 'formik';
import * as Yup from 'yup';
import { myFetch } from '../utils';
const initValues = {
  email: '',
  password: '',
};

const baseUrl = process.env.REACT_APP_BACKEND_URL;
if (!baseUrl) throw new Error('baseUrl nerastas');

function LoginPage() {
  const formik = useFormik({
    initialValues: initValues,
    validationSchema: Yup.object({
      email: Yup.string().email('Patikrinkite savo email').required(),
      password: Yup.string().min(4, 'Maziausiai 4 simboliai').max(10).required(),
    }),
    onSubmit: async (values) => {
      console.log('values ===', values);
      const fetchResult = await myFetch(`${baseUrl}/login`, 'POST', values);
      // ar gavom token
      if (fetchResult.success) {
        // turim tokena
        // login(fetchResult.token)
      }
      console.log('fetchResult ===', fetchResult);
    },
  });

  return (
    <div className='container'>
      <h1 className='display-4 py-4 text-center'>LoginPage</h1>

      <form onSubmit={formik.handleSubmit} className='jumbotron small-container mx-auto'>
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

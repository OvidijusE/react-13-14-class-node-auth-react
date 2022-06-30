import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { useAuthCtx } from '../store/authContext';
import { baseUrl, myFetch } from '../utils';

const initValues = {
  email: '',
  password: '',
  repeatPassword: '',
};

function RegisterPage() {
  const history = useHistory();
  const ctx = useAuthCtx();
  const formik = useFormik({
    initialValues: initValues,
    validationSchema: Yup.object({
      email: Yup.string().email('Patikrinkite savo email').required(),
      password: Yup.string().min(4, 'Maziausiai 4 simboliai').max(10).required(),
      repeatPassword: Yup.string()
        .required()
        .oneOf([Yup.ref('password'), null], 'Passwords must match!'),
    }),

    onSubmit: async (values) => {
      const valuesCopy = { ...values };
      delete valuesCopy['repeatPassword'];
      console.log('values ===', values);
      console.log('valuesCopy ===', valuesCopy);
      const registerResult = await myFetch(`${baseUrl}/register`, 'POST', valuesCopy);
      if (registerResult.succcess) {
        ctx.register(registerResult.token, valuesCopy.email);
        history.replace('/login');
      }
      console.log('registerResult ===', registerResult);
      // if (!registerResult.token) {
      //   console.log('cannot register');
      //   return;
      // }
      // ctx.register(registerResult.token);
      // console.log('registerResult ===', registerResult);

      console.log('submiting values ===', values);
    },
  });

  function matchPass() {
    const { password, repeatPassword } = initValues;
    if (password !== repeatPassword) {
      console.log('Passwords does not match');
    }
  }

  function rightClassesForInput(field) {
    let resultClasses = 'form-control';

    if (formik.touched[field]) {
      resultClasses += formik.errors[field] ? ' is-invalid' : ' is-valid';
    }

    return resultClasses;
  }
  return (
    <div className='container'>
      <h1 className='display-4 py-4 text-center'>Register here</h1>

      <form onSubmit={formik.handleSubmit} onBlur={matchPass} className='jumbotron w-50 mx-auto'>
        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            type='email'
            className={rightClassesForInput('email')}
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
            className={rightClassesForInput('password')}
            id='password'
            name='password'
          />
          <div className='invalid-feedback'>{formik.errors.password}</div>
        </div>
        <div className='form-group'>
          <label htmlFor='repeatPassword'>Repeat Password</label>
          <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.repeatPassword}
            type='password'
            className={rightClassesForInput('repeatPassword')}
            id='repeatPassword'
            name='repeatPassword'
          />
          <div className='invalid-feedback'>{formik.errors.repeatPassword}</div>
        </div>
        <button type='submit' className='btn btn-outline-dark'>
          Register
        </button>
      </form>
    </div>
  );
}

export default RegisterPage;

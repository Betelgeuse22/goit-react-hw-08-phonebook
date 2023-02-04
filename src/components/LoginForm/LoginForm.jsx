import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { logIn } from 'redux/auth/operations';
import { LoginFormStyled, LoginLabel } from './LoginForm.styled';
import { Button, TextField } from '@mui/material';

const shema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().min(7).required(),
});

export const LoginForm = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      password: '',
      email: '',
    },

    validationSchema: shema,

    onSubmit: ({ email, password }) => {
      dispatch(
        logIn({
          email,
          password,
        })
      );
    },
  });
  return (
    <LoginFormStyled onSubmit={formik.handleSubmit}>
      <LoginLabel>
        <TextField
          label="Email"
          variant="standard"
          name="email"
          type="email"
          required
          onChange={formik.handleChange}
          color="warning"
          value={formik.values.email}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
      </LoginLabel>
      <LoginLabel>
        <TextField
          label="Password"
          variant="standard"
          name="password"
          type="password"
          required
          onChange={formik.handleChange}
          color="warning"
          value={formik.values.password}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
      </LoginLabel>
      <Button type="submit" variant="contained" color="warning">
        Submit
      </Button>
    </LoginFormStyled>
  );
};

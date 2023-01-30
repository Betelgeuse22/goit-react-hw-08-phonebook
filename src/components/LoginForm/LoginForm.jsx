import { useDispatch } from 'react-redux';
import { ErrorMessage, Formik } from 'formik';
import * as Yup from 'yup';
import { logIn } from 'redux/auth/operations';
import {
  ErrorMessageStyled,
  LoginFormStyled,
  LoginLabel,
  InputLogin,
} from './LoginForm.styled';
import { Button } from 'components/Form/Form.styled';

const initValues = {
  email: '',
  password: '',
};

const shema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().min(7).required(),
});

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = ({ email, password }, { resetForm }) => {
    dispatch(
      logIn({
        email,
        password,
      })
    );
    resetForm();
  };

  return (
    <Formik
      initialValues={initValues}
      validationSchema={shema}
      onSubmit={handleSubmit}
    >
      <LoginFormStyled autoComplete="off">
        <LoginLabel>
          Email
          <InputLogin type="email" name="email" />
          <ErrorMessage name="email">
            {msg => <ErrorMessageStyled>{msg}</ErrorMessageStyled>}
          </ErrorMessage>
        </LoginLabel>
        <LoginLabel>
          Password
          <InputLogin type="password" name="password" />
          <ErrorMessage name="password">
            {msg => <ErrorMessageStyled>{msg}</ErrorMessageStyled>}
          </ErrorMessage>
        </LoginLabel>
        <Button type="submit">Log In</Button>
      </LoginFormStyled>
    </Formik>
  );
};

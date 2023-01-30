import { toast } from 'react-hot-toast';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { register } from 'redux/auth/operations';
import {
  Form,
  IconPassword,
  Label,
  InputRegister,
} from './RegisterForm.styled';
import { Button } from 'components/Form/Form.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [toggleIcon, setToggleIcon] = useState(<AiOutlineEyeInvisible />);
  const [type, setType] = useState('password');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === 'name') {
      return setName(value);
    }
    if (name === 'email') {
      return setEmail(value);
    }
    if (name === 'password') {
      return setPassword(value);
    }
    if (name === 'confirmPassword') {
      return setConfirmPassword(value);
    }
    return;
  };

  const togglePassInput = () => {
    if (type === 'password') {
      setType('text');
      setToggleIcon(<AiOutlineEye />);
    } else {
      setType('password');
      setToggleIcon(<AiOutlineEyeInvisible />);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (
      email === '' ||
      password === '' ||
      name === '' ||
      confirmPassword === ''
    ) {
      toast('Please, fill in all fields');
      return;
    }
    if (password.length < 7) {
      toast('Password must be at least 7 symbols long');
      return;
    }
    if (password !== confirmPassword) {
      toast('Wrong confirmation of password');
      return;
    }
    dispatch(
      register({
        name,
        email,
        password,
      })
    );
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Username
        <InputRegister
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
        />
      </Label>
      <Label>
        Email
        <InputRegister
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </Label>
      <Label>
        Password
        <InputRegister
          type={type}
          name="password"
          value={password}
          onChange={handleChange}
        />
        <IconPassword onClick={togglePassInput}>{toggleIcon}</IconPassword>
      </Label>
      <Label>
        Confirm password
        <InputRegister
          type={type}
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
        />
      </Label>
      <Button type="submit">Register</Button>
    </Form>
  );
};

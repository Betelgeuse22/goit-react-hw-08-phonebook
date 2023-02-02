import { toast } from 'react-hot-toast';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Form, IconPassword, Label } from './RegisterForm.styled';
import { TextField, Button } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(show => !show);

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
    if (password.length < 8) {
      toast('Password must be at least 8 symbols long');
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
    <Form onSubmit={handleSubmit} autoComplete="on">
      <Label>
        <TextField
          label="Name"
          variant="standard"
          type="text"
          required
          name="name"
          value={name}
          onChange={handleChange}
        />
      </Label>
      <Label>
        <TextField
          label="Email"
          variant="standard"
          type="email"
          required
          name="email"
          value={email}
          onChange={handleChange}
        />
      </Label>
      <Label>
        <TextField
          label="Password"
          variant="standard"
          type={showPassword ? 'text' : 'password'}
          required
          name="password"
          value={password}
          onChange={handleChange}
        />
        <IconPassword onClick={handleClickShowPassword}>
          {showPassword ? <VisibilityOff /> : <Visibility />}
        </IconPassword>
      </Label>
      <Label>
        <TextField
          label="Confirm Password"
          variant="standard"
          type={showPassword ? 'text' : 'password'}
          required
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
        />
      </Label>
      <Button type="submit" variant="contained">
        Register
      </Button>
    </Form>
  );
};

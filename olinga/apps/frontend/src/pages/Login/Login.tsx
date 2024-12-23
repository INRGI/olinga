import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Button, Form, FormContainer, Header, Input } from './Login.styled';
import { toastError } from '../../helpers/toastify';
import { ToastContainer } from 'react-toastify';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async () => {
    const success = await login(username, password);
    if (success) {
      navigate('/admin');
    } else {
      toastError('Wrong username or password');
    }
  };

  return (
    <FormContainer>
      <Form>
        <Header>Login</Header>
        <Input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Name"
          required
        />
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <Button onClick={handleLogin}>Login</Button>
      </Form>
      <ToastContainer />
    </FormContainer>
  );
};

export default Login;

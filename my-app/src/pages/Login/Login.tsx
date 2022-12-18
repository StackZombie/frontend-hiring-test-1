import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Input } from '../../components/Input/Input';
import { loginStyles } from './style';
import { NavBar } from '../../components/Navbar/Navbar';
interface Authentication {
  email: string;
  password: string;
}

const Login = () => {
  const [auth, setAuth] = useState<Authentication>({
    email: '',
    password: '',
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(auth);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAuth({
      ...auth,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <NavBar />
      <Container component="main" maxWidth="md">
        <Box sx={loginStyles.box}>
          <Box
            textAlign="center"
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 2 }}
          >
            <Input
              label="Email"
              type="email"
              name="email"
              onChange={handleChange}
              value={auth.email}
              fullWidth={true}
            />

            <Input
              label="Password"
              type="password"
              name="password"
              onChange={handleChange}
              value={auth.password}
              fullWidth={true}
            />
            <Button type="submit" variant="contained">
              Log In
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Login;

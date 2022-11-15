import { useState } from 'react';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CircularProgress,
  TextField,
  Typography
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../../contexts';
import * as yup from 'yup';

const loginSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
});

interface ILogin {
  children: React.ReactNode;
}

export const Login: React.FC<ILogin> = ({ children }) => {
  const { isAuthenticated, login } = useAuthContext();

  const [isLoading, setIsLoading] = useState(false);

  const [passwordError, setPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    setIsLoading(true);

    loginSchema
      .validate({ email, password }, { abortEarly: false })
      .then(dadosValidados => {
        login(dadosValidados.email, dadosValidados.password)
          .then(() => {
            setIsLoading(false);
          });
      })
      .catch((errors: yup.ValidationError) => {
        setIsLoading(false);

        errors.inner.forEach(error => {
          if (error.path === 'email') {
            setEmailError(error.message);
          } else if (error.path === 'password') {
            setPasswordError(error.message);
          }
        });
      });
  };

  if (isAuthenticated) return (<>{children}</>);

  return (
    <Box 
      width='100vw' 
      height='100vh' 
      display='flex' 
      alignItems='center' 
      justifyContent='center'
    >
      <Card>
        <CardContent>
          <Box 
            display='flex' 
            alignItems="center" 
            flexDirection='column' 
            width={260}
            gap={2} 
          >
            <Box
              width="100%"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Avatar
                src="https://avatars.githubusercontent.com/u/6412038?s=280&v=4"
              />
            </Box>
            <Typography variant='h6' align='center'>Login</Typography>
            <TextField
              fullWidth
              variant="standard"
              type='email'
              label='Email'
              value={email}
              disabled={isLoading}
              error={!!emailError}
              helperText={emailError}
              onKeyDown={() => setEmailError('')}
              onChange={e => setEmail(e.target.value)}
            />
            <TextField
              fullWidth
              variant="standard"
              label='Password'
              type='password'
              value={password}
              disabled={isLoading}
              error={!!passwordError}
              helperText={passwordError}
              onKeyDown={() => setPasswordError('')}
              onChange={e => setPassword(e.target.value)}
            />
          </Box>
        </CardContent>
        <CardActions>
          <Box 
            width='100%' 
            display='flex' 
            alignItems="center" 
            justifyContent='center' 
            flexDirection='column' 
            gap={2}
          >
            <Button
              variant='contained'
              disabled={isLoading}
              onClick={handleSubmit}
              endIcon={isLoading ? 
                <CircularProgress 
                  variant='indeterminate' 
                  color='inherit' 
                  size={20} /> : 
                undefined}
            >
              Login
            </Button>
            <Link to='/register'>Register</Link>
          </Box>
        </CardActions>
      </Card>
    </Box>
  );
};
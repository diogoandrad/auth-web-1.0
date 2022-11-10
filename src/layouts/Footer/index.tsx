import { Link, Typography } from '@mui/material';

export const Footer = () => {
  return (
    <Typography variant="body2" color="text.secondary" align="center" sx={{ pt: 4 }}>
      {'Copyright © '}
      <Link color="inherit" href="https://www.linkedin.com/in/diogoalvesandrade/" target="_blank">
        Diogo Andrade
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};
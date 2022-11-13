import { useEffect } from 'react';
import { Api, headers } from '../../services/Api';
import { Box, Typography } from '@mui/material';

const Home = () => {  
  useEffect(() => {
    Api.get('/', { headers: headers })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error;
      });
  }, []);

  return (
    <Box>
      <Typography variant='h4' align="center">Home</Typography>
    </Box>
  );
};

export default Home;
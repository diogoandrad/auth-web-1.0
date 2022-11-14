import { useEffect, useState } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import BaseService from '../../services/BaseService';
import { IProfile } from '../../models/Profile';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const Profile = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    BaseService.getAll('/profiles')
      .then((response) => {
        return setProfiles(response);
      })
      .catch((error) => {
        return error;
      });
  }, []);

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Typography variant='h4' align="center" sx={{ mb: 2 }}>
        Profiles
        <IconButton aria-label="edit">
          <AddCircleIcon />
        </IconButton>
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align='center' width="10%">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {profiles.length === 0 ?
              <TableRow>
                <TableCell align='center' colSpan={2}>No results found</TableCell>
              </TableRow>
              : profiles.map((row: IProfile) => (
                <TableRow key={row.id}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell align='center' width="10%">
                    <IconButton aria-label="edit" size='small'>
                      <EditIcon fontSize="small" />
                    </IconButton>
                    <IconButton aria-label="delete" size='small' onClick={handleOpen}>
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Are you sure?
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            This profile will be permanently deleted.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose}>Agree</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Profile;
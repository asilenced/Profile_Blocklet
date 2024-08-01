import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
// import { validateField } from '../utils/validator';

function ProfileEditor({ open, setOpen, onSave, setEditForm, editForm }) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[+\d\s]+$/;
    const [errors, setErrors] = useState({ name: '', jobTitle: '', email: '', phone: '', bio: '' });

    const validateField = (name, value) => {
        let error = '';

        switch (name) {
            case 'email':
                if (!emailRegex.test(value)) {
                    error = 'Invalid email address';
                }
                break;
            case 'phone':
                if (!phoneRegex.test(value)) {
                    error = 'Invalid phone number';
                }
                break;
            default:
                if (!value) {
                    error = 'This field is required';
                }
                break;
        }

        return error;
    };

    const setError = (name, error) => {
        setErrors(prevErrors => ({
            ...prevErrors,
            [name]: error,
        }));
    };

    const handleClose = () => {
      setOpen(false);
    };
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      const error = validateField(name, value);
      setEditForm({ ...editForm, [name]: value });
      setError(name, error);
    };
    
    const validateForm = () => {
        const { name, email, phone, jobTitle, bio } = editForm;
        let valid = true;

        if (!name) {
            setError('name', 'This field is required');
            valid = false;
        }

        if (!jobTitle) {
            setError('jobTitle', 'This field is required');
            valid = false;
        }

        if (!emailRegex.test(email)) {
            setError('email', 'Invalid email address');
            valid = false;
        }

        if (!phoneRegex.test(phone)) {
            setError('phone', 'Invalid phone number');
            valid = false;
        }

        if (!bio) {
            setError('bio', 'This field is required');
            valid = false;
        }


        return valid;
    };

    const handleSave = () => {
    //   validateField(editForm);
      if (validateForm()) {
        onSave(editForm);
        setOpen(false);
      } else {
        alert('Please fill out all fields correctly.');
      }
    };

    return (
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Profile</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="name"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
            value={editForm.name}
            onChange={handleInputChange}
            error={!!errors.name}
            helperText={errors.name}
          />
          <TextField
            margin="dense"
            name="jobTitle"
            label="Job Title"
            type="text"
            fullWidth
            variant="standard"
            value={editForm.jobTitle}
            onChange={handleInputChange}
            error={!!errors.jobTitle}
            helperText={errors.jobTitle}
          />
          <TextField
            margin="dense"
            name="email"
            label="Email"
            type="email"
            fullWidth
            variant="standard"
            value={editForm.email}
            onChange={handleInputChange}
            error={!!errors.email}
            helperText={errors.email}
          />
          <TextField
            margin="dense"
            name="phone"
            label="Phone"
            type="text"
            fullWidth
            variant="standard"
            value={editForm.phone}
            onChange={handleInputChange}
            error={!!errors.phone}
            helperText={errors.phone}
          />
          <TextField
            margin="dense"
            name="bio"
            label="Bio"
            type="text"
            fullWidth
            multiline
            rows={4}
            variant="standard"
            value={editForm.bio}
            onChange={handleInputChange}
            error={!!errors.bio}
            helperText={errors.bio}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    );
};

export default ProfileEditor;

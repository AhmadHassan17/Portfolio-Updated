import React, { useEffect } from 'react';
import { usePageTitle } from '../contexts/PageTitleContext';
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
  name: yup.string().required('Your name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  message: yup.string().min(10, 'Message must be at least 10 characters').required('Message is required'),
});

const Contact = () => {
  const { setTitle } = usePageTitle();

  useEffect(() => {
    setTitle('Contact');
  }, [setTitle]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log('Contact Form Data:', data);
    alert('Message sent successfully!');
    reset();
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>Contact Me</Typography>

      <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
        <TextField
          fullWidth
          label="Name"
          margin="normal"
          {...register('name')}
          error={Boolean(errors.name)}
          helperText={errors.name?.message}
        />
        <TextField
          fullWidth
          label="Email"
          margin="normal"
          {...register('email')}
          error={Boolean(errors.email)}
          helperText={errors.email?.message}
        />
        <TextField
          fullWidth
          label="Message"
          margin="normal"
          multiline
          rows={4}
          {...register('message')}
          error={Boolean(errors.message)}
          helperText={errors.message?.message}
        />

        <Button type="submit" variant="contained" sx={{ mt: 2 }}>
          Send Message
        </Button>
      </Box>

      {isSubmitSuccessful && (
        <Typography variant="body2" color="success.main" sx={{ mt: 2 }}>
          ✅ Your message was submitted!
        </Typography>
      )}
    </Container>
  );
};

export default Contact;

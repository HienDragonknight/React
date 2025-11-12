import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import {
  Container, Typography, Box, Grid, Paper, Card, CardContent,
  TextField, Button, Alert, Snackbar
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import PublicIcon from '@mui/icons-material/Public';

// Validation Schema using Yup
const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must not exceed 50 characters')
    .required('Name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  subject: Yup.string()
    .min(5, 'Subject must be at least 5 characters')
    .max(100, 'Subject must not exceed 100 characters')
    .required('Subject is required'),
  message: Yup.string()
    .min(10, 'Message must be at least 10 characters')
    .max(500, 'Message must not exceed 500 characters')
    .required('Message is required')
});

const Contact = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const initialValues = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    setTimeout(() => {
      console.log('Form submitted:', values);
      setOpenSnackbar(true);
      setSubmitting(false);
      resetForm();
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <LocationOnIcon sx={{ fontSize: 40 }} />,
      title: 'Location',
      details: ['123 Orchid Garden Street', 'Ho Chi Minh City, Vietnam']
    },
    {
      icon: <PhoneIcon sx={{ fontSize: 40 }} />,
      title: 'Phone',
      details: ['+84 123 456 789', 'Mon-Fri: 8AM - 6PM']
    },
    {
      icon: <EmailIcon sx={{ fontSize: 40 }} />,
      title: 'Email',
      details: ['info@orchidscollection.com', 'support@orchidscollection.com']
    },
    {
      icon: <PublicIcon sx={{ fontSize: 40 }} />,
      title: 'Social Media',
      details: ['Facebook | Instagram | Twitter']
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box textAlign="center" mb={6}>
        <EmailIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
        <Typography variant="h3" component="h1" gutterBottom fontWeight="bold">
          Contact Us
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Have questions about orchids? We'd love to hear from you!
        </Typography>
      </Box>

      <Grid container spacing={4} mb={6}>
        <Grid item xs={12} md={4}>
          <Grid container spacing={3}>
            {contactInfo.map((info, index) => (
              <Grid item xs={12} key={index}>
                <Card elevation={2}>
                  <CardContent>
                    <Box display="flex" flexDirection="column" alignItems="center" textAlign="center">
                      <Box sx={{ color: 'primary.main', mb: 2 }}>
                        {info.icon}
                      </Box>
                      <Typography variant="h6" gutterBottom fontWeight="bold">
                        {info.title}
                      </Typography>
                      {info.details.map((detail, idx) => (
                        <Typography key={idx} variant="body2" color="text.secondary">
                          {detail}
                        </Typography>
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>

        <Grid item xs={12} md={8}>
          <Paper elevation={3} sx={{ p: 4 }}>
            <Typography variant="h5" gutterBottom fontWeight="bold" mb={3}>
              Send us a Message
            </Typography>

            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ errors, touched, isSubmitting }) => (
                <Form>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <Field
                        as={TextField}
                        fullWidth
                        name="name"
                        label="Your Name"
                        variant="outlined"
                        error={touched.name && Boolean(errors.name)}
                        helperText={touched.name && errors.name}
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <Field
                        as={TextField}
                        fullWidth
                        name="email"
                        label="Email Address"
                        variant="outlined"
                        type="email"
                        error={touched.email && Boolean(errors.email)}
                        helperText={touched.email && errors.email}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <Field
                        as={TextField}
                        fullWidth
                        name="subject"
                        label="Subject"
                        variant="outlined"
                        error={touched.subject && Boolean(errors.subject)}
                        helperText={touched.subject && errors.subject}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <Field
                        as={TextField}
                        fullWidth
                        name="message"
                        label="Message"
                        variant="outlined"
                        multiline
                        rows={6}
                        error={touched.message && Boolean(errors.message)}
                        helperText={touched.message && errors.message}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        fullWidth
                        endIcon={<SendIcon />}
                        disabled={isSubmitting}
                        sx={{ py: 1.5 }}
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </Button>
                    </Grid>
                  </Grid>
                </Form>
              )}
            </Formik>
          </Paper>
        </Grid>
      </Grid>

      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom fontWeight="bold" textAlign="center" mb={2}>
          Find Us
        </Typography>
        <Box
          component="iframe"
          title="Orchid Garden Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4245274181365!2d106.69522731533422!3d10.776619192321546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f4b3330bcc9%3A0xd9d7d394d5f052fc!2sHo%20Chi%20Minh%20City%2C%20Vietnam!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
          sx={{
            width: '100%',
            height: 400,
            border: 0,
            borderRadius: 2
          }}
          loading="lazy"
        />
      </Paper>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={() => setOpenSnackbar(false)} severity="success" sx={{ width: '100%' }}>
          Message sent successfully! We'll get back to you soon.
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Contact;

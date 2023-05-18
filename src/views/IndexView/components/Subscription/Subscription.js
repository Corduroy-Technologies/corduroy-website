/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
// import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import HubspotForm from 'react-hubspot-form';

// const validationSchema = yup.object({
//   name: yup
//     .string()
//     .trim()
//     .min(2, 'Please enter a valid name')
//     .max(50, 'Please enter a valid name')
//     .required('Please specify your name'),
//   email: yup
//     .string()
//     .trim()
//     .email('Please enter a valid email address')
//     .required('Email is required.'),
// });

const Subscription = () => {
  // const initialValues = {
  //   name: '',
  //   email: '',
  // };

  // const onSubmit = (values) => {
  //   //return values;
  //   console.log(values);
  // };

  // const formik = useFormik({
  //   initialValues,
  //   validationSchema: validationSchema,
  //   onSubmit,
  // });

  return (
    <Box>
      <Typography
        sx={{
          textTransform: 'uppercase',
          fontWeight: 'medium',
        }}
        gutterBottom
        color={'secondary'}
        align={'center'}
      >
        Get Started
      </Typography>
      <Typography fontWeight={700} variant={'h3'} gutterBottom align={'center'}>
        Delegate more. Grow with Corduroy.
      </Typography>
      <Typography
        variant={'h6'}
        component={'p'}
        color={'text.secondary'}
        align={'center'}
      >
        Share your name and email, and we'll reach out to get started.
        We look forward to meeting you.
      </Typography>
      {/* <Box marginTop={3} display={'flex'} justifyContent={'center'}>
        <Button
          component={'a'}
          href={'https://mui.com/store/items/the-front-landing-page/'}
          target={'_blank'}
          variant="contained"
          color="primary"
          size="large"
          endIcon={
            <svg
              width={16}
              height={16}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          }
        >
          Purchase now
        </Button>
      </Box> */}
      {/* <Box 
        marginTop={3}
        padding={{ xs: 3, sm: 6 }}
        width={1}
        component={Card}
        boxShadow={1}
        data-aos="fade-up"
      >
        <form
          noValidate
          autoComplete="off"
          onSubmit={formik.handleSubmit}
        >
          <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }}>
            <Box
              width={1}
              marginRight={{ xs: 0, md: 2 }}
              marginBottom={{ xs: 4, md: 0 }}
              display={'flex'}
              flexDirection={{ xs: 'column', md: 'row' }}
            >
              <TextField
                sx={{
                  height: 54,
                  marginRight: { xs: 0, md: 2 },
                  marginBottom: { xs: 4, md: 0 },
                }}
                variant="outlined"
                color="primary"
                size="medium"
                label="Name"
                fullWidth
                name={'name'}
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />
              <TextField
                sx={{
                  height: 54,
                }}
                variant="outlined"
                color="primary"
                size="medium"
                label="Email"
                fullWidth
                name={'email'}
                value={formik.values.email}
                onChange={formik.handleChange}
                error={
                  formik.touched.email && Boolean(formik.errors.email)
                }
                helperText={formik.touched.email && formik.errors.email}
              />
            </Box>
            <Box>
              <Button
                sx={{ height: 54, whiteSpace: 'nowrap', minWidth: 100 }}
                variant="contained"
                color="primary"
                size="medium"
                fullWidth
                type="submit"
              >
                Submit
              </Button>
            </Box>
          </Box>
        </form>
      </Box> */}
      <Box 
        marginTop={3}
        padding={{ xs: 3, sm: 6 }}
        width={1}
        component={Card}
        boxShadow={1}
        data-aos="fade-up"
      >
        <HubspotForm
          portalId='39775276'
          formId='91c4929b-b91f-45bf-910e-008bd4c7f61c'
          onSubmit={() => console.log('Submit!')}
          onReady={(form) => console.log('Form ready!')}
          loading={<div>Loading...</div>}
        />
      </Box>
    </Box>
  );
};

export default Subscription;

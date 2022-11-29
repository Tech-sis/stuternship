import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import { logIn, forgotPassword,  } from '../firebase'
import { addDoc, collection } from 'firebase/firestore';
import { sendEmailVerification, updateProfile } from 'firebase/auth';
import { signUp, auth, db, googleSignIn } from '../firebase';
import { useFormik, Form, FormikProvider } from 'formik';
import * as Yup from 'yup';
import styles from '../style/login.module.css'

export default function Signup() {
	const navigate = useNavigate();
	const [showPassword, setShowPassword] = useState(false);
	const [error, setError] = useState('');

	const RegisterSchema = Yup.object().shape({
		firstName: Yup.string()
			.min(2, 'Too Short!')
			.max(50, 'Too Long!')
			.required('First name required'),
		lastName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Last name required'),
		email: Yup.string().email('Email must be a valid email address').required('Email is required'),
		password: Yup.string()
			.required('Password is required')
			.min(6, 'Password must be at least 6 characters')
			.max(50, 'Password must be less than 50 characters'),
		phoneNumber: Yup.string().required('Phone number is required'),
	});

	const userRef = collection(db, 'users');

	const formik = useFormik({
		initialValues: {
			firstName: '',
			lastName: '',
			email: '',
			password: '',
			phoneNumber: '',
			// userType: 'customer'
		},
		validationSchema: RegisterSchema,
		onSubmit: async (values) => {
			console.log(values);
			try {
				await signUp(values.email, values.password);
				const user = auth.currentUser;
				await addDoc(userRef, {
					uid: user.uid,
					displayName: `${values.firstName} ${values.lastName}`,
					email: user.email,
					password: values.password,
					phoneNumber: values.phoneNumber,
					createdAt: new Date().toISOString()
				});
				navigate('/');
				await updateProfile(auth.currentUser, {
					displayName: `${values.firstName} ${values.lastName}`,
					phoneNumber: values.phoneNumber
				})
					.then(() => {
						console.log('Profile updated');
					})
					.catch((error) => {
						console.log(error);
					});
				await sendEmailVerification(auth.currentUser).then(() => {
					console.log('Email sent');
				});
				navigate('/');
			} catch (err) {
				setError(err.message);
			}
		}
	});

	const handleGoogle = async () => {
		try {
			await googleSignIn();
			navigate('/');
		} catch (err) {
			setError(err.message);
		}
	};

	const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik;

	return (
		<>
			<div className={styles.header}>
				<h1>Stuternship</h1>
			</div>
			<div className={styles.section}>
				<h4>Create an Account</h4>
				<section className={styles.innersec}>
					<div>
						<button type="submit" onClick={handleGoogle} className={styles.register}>Register with Google</button>
					</div>
					<hr />
					<FormikProvider value={formik}>
						<Form className={styles.form} autoComplete="off" noValidate onSubmit={handleSubmit}>
							<div className={styles.formgroup}>
								<label>First Name</label>
								<input type="text" placeholder="Ade" {...getFieldProps('firstName')}
									error={Boolean(touched.firstName && errors.firstName)}
									helperText={touched.firstName && errors.firstName} />
							</div>
							<div className={styles.formgroup}>
								<label>Last Name</label>
								<input type="text" placeholder="Ola" {...getFieldProps('lastName')}
									error={Boolean(touched.lastName && errors.lastName)}
									helperText={touched.lastName && errors.lastName} />
							</div>
							<div className={styles.formgroup}>
								<label>Phone Number</label>
								<input type="tel" placeholder="+2348012345678" {...getFieldProps('phoneNumber')}
									error={Boolean(touched.phoneNumber && errors.phoneNumber)}
									helperText={touched.phoneNumber && errors.phoneNumber} />
							</div>
							<div className={styles.formgroup}>
								<label htmlFor="email">Email</label>
								<input type="email" placeholder="example@yahoo.com"  {...getFieldProps('email')}
									error={Boolean(touched.email && errors.email)}
									helperText={touched.email && errors.email} />
							</div>
							<div className={styles.formgroup}>
								<label htmlFor="password">Password</label>
								<input type="password" placeholder="********"  {...getFieldProps('password')} error={Boolean(touched.password && errors.password)}
									helperText={touched.password && errors.password} />
							</div>
							<div>
								<button type="submit" className={styles.login} onClick={isSubmitting}>Register</button>
							</div>
						</Form>
					</FormikProvider>
					<div className={styles.terms}>
						<a href='login'>Already have an account? Login!</a>
					</div>
				</section>
			</div>
		</>
	)
}

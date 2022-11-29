import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from '../style/login.module.css'
import { logIn, forgotPassword, googleSignIn } from '../firebase'
import { useFormik, Form, FormikProvider } from 'formik';
import * as Yup from 'yup';


// handle auth errors
const mapAuthCodeToMessage = (authCode) => {
	switch (authCode) {
		case 'auth/invalid-email':
			return 'Invalid email';
		case 'auth/invalid-password':
			return 'Invalid password';
		case 'auth/user-not-found':
			return 'User not found';
		default:
			return 'Invalid password';
	}
};

export default function Login() {
	const navigate = useNavigate();
	const [showPassword, setShowPassword] = useState(false);
	const [error, setError] = useState('');

	const LoginSchema = Yup.object().shape({
		email: Yup.string().email('Email must be a valid email address').required('Email is required'),
		password: Yup.string().required('Password is required')
	});

	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
			remember: true
		},
		validationSchema: LoginSchema,
		onSubmit: async (values) => {
			console.log(values);
			try {
				await logIn(values.email, values.password);
				navigate('/');
			} catch (error) {
				setError(mapAuthCodeToMessage(error.code));
			}
		}
	});

	const handleGoogle = async () => {
		try {
			await googleSignIn();
			navigate('/');
		} catch (error) {
			setError(mapAuthCodeToMessage(error.code));
		}
	};

	const handlePasswordReset = () => {
		try {
			forgotPassword(values.email);
			console.log('Email sent');
		} catch (err) {
			setError(err.message);
		}
	};

	const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } = formik;

	useEffect(() => {
		localStorage.getItem('user');
	}, []);

	return (
		<>
			<div className={styles.header}>
				{/* <img src alt="logo" /> */}
				<h1>Stuternship</h1>
			</div>
			<div className={styles.section}>
				<h1>Login</h1>
				<FormikProvider value={formik}>
					<section className={styles.innersec}>
						<Form className={styles.form} autoComplete="off" noValidate onSubmit={handleSubmit}>
							<div className={styles.formgroup}>
								<label htmlFor="email">Email</label>
								<input type="email" placeholder="example@yahoo.com" {...getFieldProps('email')}
									error={Boolean(touched.email && errors.email)} />
							</div>
							<div className={styles.formgroup}>
								<label htmlFor="password">Password</label>
								<input type={showPassword ? 'text' : 'password'}  {...getFieldProps('password')} error={Boolean(touched.password && errors.password)} placeholder="********" />
							</div>
							<div className={styles.formgroup}>
								<input type="checkbox" {...getFieldProps('remember')} className={styles.checkbox} />
								<span className={styles.span}>Remember me</span>
							</div>
							<div>
								<button type="submit" className={styles.login} onClick={isSubmitting}>Sign in</button>
							</div>
							<div>
								<button onClick={handleGoogle} className={styles.register}>Login with Google</button>
							</div>
						</Form>

					</section>
				</FormikProvider>
				<hr />
				<section className={styles.lastsec}>
					<div className={styles.terms}>
						<Link to="/" onClick={handlePasswordReset}>Forgot Password?</Link>
						<Link to="/signup">Create an Account</Link>
					</div>
				</section>
			</div>
		</>
	)
}

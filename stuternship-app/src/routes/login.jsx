import React from 'react'
import styles from '../style/login.module.css'

const login = () => {
	return (
		<>
			<div className={styles.header}>
				{/* <img src alt="logo" /> */}
				<h1>Stuternship</h1>
			</div>
			<div className={styles.section}>
				<h1>Login</h1>
				<section className={styles.innersec}>

					<form className={styles.form}>
						<div className={styles.formgroup}>
							<label htmlFor="email">Email</label>
							<input type="email" placeholder="example@yahoo.com" />
						</div>
						<div className={styles.formgroup}>
							<label htmlFor="password">Password</label>
							<input type="password" placeholder="********" />
						</div>
						<div className={styles.formgroup}>
							<input type="checkbox" />
							<span className={styles.span}>Remember me</span>
						</div>
						<div>
							<button type="submit" className={styles.login}>Sign in</button>
						</div>
						<div>
							<button className={styles.register}><a href="signup" >Create an Account</a></button>
						</div>
					</form>
					<div className={styles.terms}>
						<a href>Forgot Password?</a>
						<a href>Terms of Service</a>
					</div>
				</section>
			</div>
		</>
	)
}

export default login
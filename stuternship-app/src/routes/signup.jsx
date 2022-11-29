import React from 'react'
import styles from '../style/login.module.css'

const signup = () => {
	return (
		<>
			<div className={styles.header}>
				{/* <img src alt="logo" /> */}
				<h1>Stuternship</h1>
			</div>
			<div className={styles.section}>

				<h4>Create an Account</h4>

				<section className={styles.innersec}>
					<div>
						<button type="submit" className={styles.register}>Register with Google</button>
					</div>
					<hr />
					<form className={styles.form}>

						<div className={styles.formgroup}>
							<label>First Name</label>
							<input type="text" placeholder="Ade" />
						</div>
						<div className={styles.formgroup}>
							<label>Last Name</label>
							<input type="text" placeholder="Ola" />
						</div>
						<div className={styles.formgroup}>
							<label>Phone Number</label>
							<input type="number" placeholder="+2348012345678" />
						</div>
						<div className={styles.formgroup}>
							<label htmlFor="email">Email</label>
							<input type="email" placeholder="example@yahoo.com" />
						</div>
						<div className={styles.formgroup}>
							<label htmlFor="password">Password</label>
							<input type="password" placeholder="********" />
						</div>
						<div>
							<button type="submit" className={styles.login}>Register</button>
						</div>
					</form>
					<div className={styles.terms}>
						<a href='login'>Already have an account? Login!</a>
					</div>
				</section>
			</div>
		</>
	)
}

export default signup

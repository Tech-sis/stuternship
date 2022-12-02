import React from "react";
import { Link } from 'react-router-dom'
import styles from "../style/landing.module.css"

export default function Root() {
	return (
		<>
			<header className={styles.header}>
				<ul className={styles.nav}>
					<li><Link to="/"><h1>Stuternship</h1></Link></li>
					<li><a href="#feature">Features</a></li>
					<li><a href="#about">About</a></li>
					<li className={styles.getbtn}><a href="/signup">Get Started</a></li>
				</ul>
			</header>
			<main className={styles.main}>
				<section className={styles.coverbg}>
					<div className={styles.content}>
						<h1 className={styles.title}>Stuternship</h1>
						<p className={styles.description}>A platform for students to find internships and companies to find interns</p>
						<div className={styles.buttons}>
							<button>
								<a href="/signup" className={styles.button}>Get Started</a>
							</button>
						</div>
					</div>

				</section>
				<section className={styles.feature} id="feature">
					<h1 className={styles.title}>Features</h1>
					<div className={styles.featureDiv}>
						<div className={styles.featureCard}>
							<div className={styles.featureImage}>
								<img src="../feature1.jpg" alt="feature1" />
							</div>
							<div className={styles.featureContent}>
								<h2>Find Internships</h2>
								<p>Find internships that are available for you to apply to</p>
							</div>
						</div>
						<div className={styles.featureCard}>
							<div className={styles.featureImage}>
								<img src="../feature2.jpg" alt="feature2" />
							</div>
							<div className={styles.featureContent}>
								<h2>Apply for Internships</h2>
								<p>Apply for internships that you are interested in</p>
							</div>
						</div>
						<div className={styles.featureCard}>
							<div className={styles.featureImage}>
								<img src="../feature3.jpg" alt="feature3" />
							</div>
							<div className={styles.featureContent}>
								<h2>Get Hired</h2>
								<p>Get hired for the internship you applied for</p>
							</div>
						</div>
					</div>
				</section>
				<section className={styles.about} id="about">
					<h1 className={styles.title}>About</h1>
					<div className={styles.aboutText}>
						<p>Stuternship is a platform for students to find internships and companies to find interns. It is a platform that connects students to companies that are looking for interns. Students can find internships that are available for them to apply to and companies can post internships that they are looking for interns to fill. Students can apply for internships that they are interested in and companies can hire students for the internships they applied for.</p>
					</div>
					<div className={styles.aboutMembers}>
						<div>
							<h2 className={styles.h2}>Team Members</h2>
						</div>
						<div className={styles.member}>
							<div className={styles.memberCard}>
								<div className={styles.memberImage}>
									<img src="../member.JPG" alt="member1" />
								</div>
								<div className={styles.memberContent}>
									<h3>Adeola Abilawon</h3>
									<p>ALX Student</p>
									<a href="https://www.linkedin.com/in/adeola-abilawon-bb99279a"><img src="../icons8-linkedin.svg" alt="github" className={styles.memberIcon} /></a>
									<a href="https://github.com/Tech-sis"><img src="../icons8-github.svg" alt="github" className={styles.memberIcon} /></a>
									<a href="https://twitter.com/profade_ola"><img src="../icons8-twitter.svg" alt="github" className={styles.memberIcon} /></a>
								</div>
							</div>
							<div className={styles.memberCard}>
								<div className={styles.memberImage}>
									<img src="https://avatars.githubusercontent.com/u/58123024?v=4" alt="member1" />
								</div>
								<div className={styles.memberContent}>
									<h3>Tijani Mukhtar</h3>
									<p>ALX Student</p>
									<a href="https://www.linkedin.com/in/adeola-abilawon-bb99279a"><img src="../icons8-linkedin.svg" alt="github" className={styles.memberIcon} /></a>
									<a href="https://github.com/tijanimukhtar"><img src="../icons8-github.svg" alt="github" className={styles.memberIcon} /></a>
									<a href="https://twitter.com/profade_ola"><img src="../icons8-twitter.svg" alt="github" className={styles.memberIcon} /></a>
								</div>
							</div>
							<div className={styles.memberCard}>
								<div className={styles.memberImage}>
									<img src="https://pps.whatsapp.net/v/t61.24694-24/227014503_351962623072501_5680746135482980313_n.jpg?ccb=11-4&oh=01_AdQmElCvfzjg9klgdb8zrFVprXxy8bKQQ6DF-V90_qU5Ow&oe=6396BE43" alt="member1" />
								</div>
								<div className={styles.memberContent}>
									<h3>Junaid-Eko Raimat Temidayo</h3>
									<p>ALX Student</p>
									<a href="https://www.linkedin.com/in/adeola-abilawon-bb99279a"><img src="../icons8-linkedin.svg" alt="github" className={styles.memberIcon} /></a>
									<a href="https://github.com/junaideko"><img src="../icons8-github.svg" alt="github" className={styles.memberIcon} /></a>
									<a href="https://twitter.com/profade_ola"><img src="../icons8-twitter.svg" alt="github" className={styles.memberIcon} /></a>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
			<footer className={styles.footer}>
				<div className={styles.footerContent}>
					<div className={styles.footerLinks}>
						<div className={styles.footerLink}>
							<h3>About Stuternship</h3>
							<ul>
								<li><a href="/">Home</a></li>
								<li><a href="#about">About</a></li>
								<li><a href="#feature">Features</a></li>
							</ul>
						</div>
						<div className={styles.footerLink}>
							<h3>Demo App</h3>
							<ul>
								<li><a href="/signup">Get Started</a></li>
								<li><a href="/login">Login</a></li>
							</ul>
						</div>
					</div>
					<div className={styles.footerCopy}>
						<p>&copy; 2022 ALX. All rights reserved.</p>
					</div>
				</div>
			</footer>
		</>
	);
}

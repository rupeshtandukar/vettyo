import React from 'react';
import './Footer.css'

export default function Footer() {
	return(
	<div className="container">
		<div className="flex-wrap">
			<div className="flex-left">
				© 2020 Vettyo.com
			</div>
		<div className="flex-center">
			<ul className="social-links">				 
				<li>
					<a href="https://www.facebook.com/vettyo" target="_blanks">
						<i className="fab fa-facebook-square"></i>
					</a>
				</li>
				<li>
					<a href="https://twitter.com/VettyoNepal" target="_blanks">
						<i className="fab fa-twitter"></i>
					</a>
				</li>
				<li>
					<a href="https://instagram.com/vett.yo" target="_blanks">
						<i className="fab fa-instagram"></i>
					</a>
				</li>
				<li>
					
						<i className="fab fa-youtube"></i>
				</li>
			</ul>
		</div>
					
		<div className="flex-right">								
				<ul className="bottom-menu-wrap">
					<li className="footer-links "><a title="FAQ" href="https://vettyo.com/faq/" target="_blanks">FAQ</a></li>
					<li className="footer-links "><a title="How It Works" href="https://vettyo.com/how-it-works/" target="_blanks">How It Works</a></li>
					<li className="footer-links "><a title="Privacy" href="https://vettyo.com/privacy-policy-2/" target="_blanks">Privacy</a></li>
					<li className="footer-links "><a title="Our Story" href="https://vettyo.com/our-story/" target="_blanks">Our Story</a></li>
					<li className="footer-links "><a title="Contact" href="https://vettyo.com/contact/" target="_blanks">Contact</a></li>
				</ul>
		</div>
		</div>
	</div>
	);
}
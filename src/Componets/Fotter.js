import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
	FaFacebookF,
	FaInstagram,
	FaTwitter,
	FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
	return (
		<div className="Footer">
			<div className="Line"></div>

			<Row>
				<Col xl={3} lg={3} md={6} sm={12}>
					<div className="Foot1">
						<h3>Connect With Us</h3>
						<ul className="flex">
							<li>
								<a href="">
									<FaFacebookF />
								</a>
							</li>
							<li>
								<a href="">
									<FaInstagram />
								</a>
							</li>
							<li>
								<a href="">
									<FaTwitter />
								</a>
							</li>
							<li>
								<a href="">
									<FaLinkedin />
								</a>
							</li>
						</ul>
					</div>
				</Col>
				<Col xl={3} lg={3} md={6} sm={12}>
					<div className="Foot">
						<div className="Quick_Links">
							<h3>Quick Links</h3>
							<ul>
								<li>Resume</li>
								<li>Templates</li>
								<li>Examples</li>
								<li>Letter Examples</li>
							</ul>
						</div>
					</div>
				</Col>
				<Col xl={3} lg={3} md={6} sm={12}>
					<div className="Foot">
						<div className="Learn">
							<h3>Learn</h3>
							<ul>
								<li>Resume Writing Guide</li>
								<li>Career</li>
								<li>Blog</li>
								<li>How to Write a Cover Letter</li>
								<li>How to Write a CV</li>
								<li>Job Interview</li>
							</ul>
						</div>
					</div>
				</Col>
				<Col xl={3} lg={3} md={6} sm={12}>
					<div className="Foot">
						<div className="Other">
							<h3>Other</h3>
							<ul>
								<li>About Us</li>
								<li>Privacy Policy</li>
								<li>Terms and Conditions</li>
							</ul>
						</div>
					</div>
				</Col>
			</Row>
		</div>
	);
};

export default Footer;

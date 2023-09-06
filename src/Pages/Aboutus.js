import React from "react";
import { Link } from "react-router-dom";
import Curveimg from "../Componets/Vector 2.png";
import png2 from "../Componets/Frame (1).png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
	FaFacebookF,
	FaInstagram,
	FaTwitter,
	FaLinkedin,
} from "react-icons/fa";
import Photo1 from "../Componets/Ellipse 3.png";
import Photo2 from "../Componets/Ellipse 3 (1).png";
import Photo3 from "../Componets/Ellipse 3 (2).png";
import Photo4 from "../Componets/Ellipse 3 (3).png";

const Aboutus = () => {
	return (
		<>
			<div className="Templete">
				<h2>About Us</h2>
				<div className="Templete_text flex001">
					<Link to="/" className="Templete_text1">
						Home
					</Link>
					<img src={Curveimg}></img>
					<p>About Us</p>
				</div>
			</div>

			<div className="About_Sec-1">
				<div className="Dots_blue01"></div>
				<h1>
					<span className="Color-1">RESUME </span>
					is your ultimate career toolbox.
				</h1>
			</div>

			<div className="About_sec-3">
				<Row className="Pad_0">
					<Col xl={6} lg={6} md={12} sm={12}>
						<div className="About_sec-3_img">
							<img src={png2}></img>
							<div className="Dots_yel01"></div>
						</div>
					</Col>
					<Col xl={6} lg={6} md={12} sm={12}>
						<div className="About_sec-3_txt ">
							<h1>
								We Are Here To Make Your
								<span className="Color-2"> Resume Faster </span>
								Without Any
								<span className="Color-2"> Efforts </span>.
							</h1>
							<p>
								We are Building the website for your benefits. It's easy to use
								the Resume Builder to make build your resume fast without any
								Efforts and it make seamlessly to make your resume beautiful.
								Our team has done this for your growth and we make sure that it
								will never disagree your needs.
							</p>
						</div>
					</Col>
				</Row>
			</div>

			<div className="About_Sec-4">
				<h1>OUR TEAM</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
					mi.
					<br /> Aliquam in hendrerit urna. Lorem ipsum dolor sit amet,
					consectetur <br />
					adipiscing elit.
				</p>
			</div>
			<div className="About_Sec_5">
				<div className="w-1340">
					<Row className="About_Sec_5_Cards">
						<Col xl={3} lg={6} md={6} sm={6}>
							<div className="About_Sec_5_Card border-blue Curve_Boder">
								<div className="About_Sec5_InnerCard">
									<img src={Photo1}></img>
								</div>
								<h3>Jordan Wangner</h3>
								<h6>Founder</h6>
								<ul className="About_Sec5_Logo flex">
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
						<Col xl={3} lg={6} md={6} sm={6}>
							<div className="About_Sec_5_Card border-yellow Curve_Boder ">
								<div className="About_Sec5_InnerCard">
									<img src={Photo2}></img>
								</div>
								<h3>Rose Murray</h3>
								<h6>HR Manager</h6>
								<ul className="About_Sec5_Logo flex">
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
						<Col xl={3} lg={6} md={6} sm={6}>
							<div className="About_Sec_5_Card border-blue Curve_Boder">
								<div className="About_Sec5_InnerCard">
									<img src={Photo3}></img>
								</div>
								<h3>Jane Morris</h3>
								<h6>UI Designer </h6>
								<ul className="About_Sec5_Logo flex">
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
						<Col xl={3} lg={6} md={6} sm={6}>
							<div className="About_Sec_5_Card border-yellow Curve_Boder">
								<div className="About_Sec5_InnerCard">
									<img src={Photo4}></img>
								</div>
								<h3>Paul Freeman</h3>
								<h6>Web Developer</h6>
								<ul className="About_Sec5_Logo flex">
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
					</Row>
				</div>
			</div>
			<div className="About_Sec-6">
				<h1>WHAT OUR USERS SAY?</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing <br />
					elit. Ut et massa mi.
				</p>
			</div>
			<div className="About_Sec_5">
				<div className="w-1340">
					<Row className="About_Sec_5_Cards">
						<Col xl={4} lg={4} md={4} sm={6}>
							<div className="About_Sec_5_Card border-blue Curve_Boder">
								<div className="About_Sec7_InnerCard flex">
									<div className="About_Sec7_img">
										<img src={Photo1}></img>
									</div>
									<div className="About_Sec7_txt">
										<h3>Jordan Wangner</h3>
										<h6>HR Manager</h6>
									</div>
								</div>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
									massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
									sapien fringilla, mattis ligula consectetur, ultrices mauris.
									Maecenas vitae mattis tellus. Nullam quis imperdiet augue.
								</p>
							</div>
						</Col>
						<Col xl={4} lg={4} md={4} sm={6}>
							<div className="About_Sec_5_Card border-yellow Curve_Boder">
								<div className="About_Sec7_InnerCard flex">
									<div className="About_Sec7_img">
										<img src={Photo1}></img>
									</div>
									<div className="About_Sec7_txt">
										<h3>Jordan Wangner</h3>
										<h6>HR Manager</h6>
									</div>
								</div>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
									massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
									sapien fringilla, mattis ligula consectetur, ultrices mauris.
									Maecenas vitae mattis tellus. Nullam quis imperdiet augue.
								</p>
							</div>
						</Col>
						<Col xl={4} lg={4} md={4} sm={6}>
							<div className="About_Sec_5_Card border-blue Curve_Boder">
								<div className="About_Sec7_InnerCard flex">
									<div className="About_Sec7_img">
										<img src={Photo1}></img>
									</div>
									<div className="About_Sec7_txt">
										<h3>Jordan Wangner</h3>
										<h6>HR Manager</h6>
									</div>
								</div>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
									massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
									sapien fringilla, mattis ligula consectetur, ultrices mauris.
									Maecenas vitae mattis tellus. Nullam quis imperdiet augue.
								</p>
							</div>
						</Col>
					</Row>
				</div>
			</div>
			<div className="Template_button">
				<button>Read More</button>
			</div>
		</>
	);
};

export default Aboutus;

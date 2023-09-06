import React from "react";
import card_image1 from "../Componets/1 1.png";
import card_image2 from "../Componets/2 1.png";
import card_image3 from "../Componets/3 1.png";
import pngimg1 from "../Componets/Frame.png";
import png2 from "../Componets/Frame (3).png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import card_png1 from "../Componets/resume 1.png";
import card_png2 from "../Componets/antivirus 1.png";
import card_png3 from "../Componets/warranty 1.png";
import card_png4 from "../Componets/tracking-app 1.png";
import card_png5 from "../Componets/resume (1) 1.png";
import card_png6 from "../Componets/approval 1.png";
import card_img4 from "../Componets/1 2.png";

const Home = () => {
	return (
		<>
			<div className="Header">
				<h1>
					Create A Resume <span className="Color-1 Curve_Under_txt">Fast </span>
					With Our
					<span className="Color-1 Curve_Under_txt"> Easy</span> And
					<span className="Color-1 Curve_Under_txt"> Free</span> Resume Builder
				</h1>
				<p>
					Use professional field-tested resume templates that follow the exact
					‘resume rules’ employers look for. Easy to use and done within minutes
					- try now for free!
				</p>

				<button className="Create_Resume">Create Your Resume Now</button>

				<div className="Dots_blue"></div>
				<div className="Dots_yellow"></div>
			</div>

			<div className="Cards_Main">
				<Row>
					<Col xl={4} lg={4} md={4} sm={12}>
						<div className="temp">
							<img src={card_image1}></img>
						</div>
					</Col>
					<Col xl={4} lg={4} md={4} sm={12}>
						<div className="temp">
							<img src={card_image2}></img>
						</div>
					</Col>
					<Col xl={4} lg={4} md={4} sm={12}>
						<div className="temp">
							<img src={card_image3}></img>
						</div>
					</Col>
				</Row>
			</div>
			<div className="Our_Builder flex flex-wrap">
				<div className="Our_Builder_txt">
					<h1>
						Try Our <span className="Color-1"> Professional Resume </span>
						Builder Now!
					</h1>
					<p>
						Save Time With Our Easy 3-Step Resume Builder. No More Writer’s
						Block Or Formatting Diffciculty In Word. Rapidly Make A Perfect
						Resume Employers love.
					</p>
					<div className="Buttons flex flex-wrap">
						<button className="Buttons_1">Create Your Resume Now</button>
						<button className="Buttons_2">Resume Examples</button>
					</div>
				</div>
				<div className="Our_Builder_img">
					<img src={pngimg1}></img>
					<div className="Dots_blue1"></div>
				</div>
			</div>

			<div className="Cover_Letter flex flex-wrap">
				<div className="Cover_Letter_img">
					<img src={png2}></img>
					<div className="Dots_yel1"></div>
				</div>
				<div className="Cover_Letter_txt">
					<h1>
						Create A <span className="Color-2"> Professional </span>
						Story In Minute. Use Our
						<span className="Color-2"> Cover Letter Maker.</span>
					</h1>
					<p>
						Our cover letter maker allows you to write amazing professional
						pitches in minutes rather than hours. No more writer’s block, no
						more searching for the convincing phrases or agonizing over
						formatting. Be persuasive without effort!
					</p>
					<div className="Buttons flex flex-wrap">
						<button className="Buttons_3">Create Cover Letter</button>
					</div>
				</div>
			</div>
			<div className="Features">
				<h1 className="Features_txt">
					Features designed to help you win your dream job
				</h1>
				<div className="Cards">
					<Row>
						<Col xl={4} lg={4} md={6} sm={6}>
							<div className="Cards_inner border-blue">
								<div className="Card_pur_img m-top effect-1">
									<img src={card_png1}></img>
								</div>
								<h2 className="txt1">Easyes Online Resume 's Builder</h2>
								<p>
									Create an awesome resume, cover letter or online profile
									without leaving your web browser.
								</p>
							</div>
						</Col>
						<div className="Dots_blue2"></div>
						<Col xl={4} lg={4} md={6} sm={6}>
							<div className="Cards_inner border-yellow">
								<div className="Card_yel_img m-top effect-2">
									<img src={card_png2}></img>
								</div>
								<h2 className="txt2">Your Data Is Safe</h2>
								<p>
									Your data is kept private and protected by strong 256-bit
									encryption.It's Secured by us.
								</p>
							</div>
						</Col>
						<Col xl={4} lg={4} md={6} sm={6}>
							<div className="Cards_inner border-blue">
								<div className="Card_pur_img m-top effect-1">
									<img src={card_png3}></img>
								</div>
								<h2 className="txt1 line-height">Approved Templates</h2>
								<p>
									Professionally-designed resume templates and examples
									(+guides). Just download in 5 minutes.
								</p>
							</div>
							<div className="Dots_yel2"></div>
						</Col>
						<Col xl={4} lg={4} md={6} sm={6}>
							<div className="Cards_inner border-yellow">
								<div className="Card_yel_img m-top effect-2">
									<img src={card_png4}></img>
								</div>
								<h2 className="txt2">Job Tracking</h2>
								<p>
									We’ll keep you ahead of the competition by tracking the
									employers and jobs you apply to.
								</p>
							</div>
						</Col>
						<Col xl={4} lg={4} md={6} sm={6}>
							<div className="Cards_inner border-blue">
								<div className="Card_pur_img m-top effect-1">
									<img src={card_png5}></img>
								</div>
								<h2 className="txt1">Multi-Format Resume Options</h2>
								<p>
									Save your perfect resume in any common format, including
									Microsoft Word and PDF in a click.
								</p>
							</div>
						</Col>
						<Col xl={4} lg={4} md={6} sm={6}>
							<div className="Cards_inner border-yellow">
								<div className="Card_yel_img m-top effect-2">
									<img src={card_png6}></img>
								</div>
								<h2 className="txt2">Approved Templates</h2>
								<p>
									Professionally-designed resume templates and examples
									(+guides). Just download in 5 minutes.
								</p>
							</div>
						</Col>
					</Row>
				</div>
				<div className="Our_Builder flex flex-wrap">
					<div className="Our_Builder_txt">
						<h1>
							Create perfect <span className="Color-1"> Resumes </span>
							For The Modern <span className="Color-1"> Job Market </span>
						</h1>
						<p>
							Creating a resume or cover letter has never been this easy! In
							three simple steps, create the perfect document to impress hiring
							managers and employers. Minimum time, maximum professional
							quality.
						</p>
						<div className="Buttons flex flex-wrap">
							<button className="Buttons_1">Create Your Resume Now</button>
						</div>
					</div>
					<div className="Our_Builder_img">
						<img src={card_img4}></img>
						<div className="Dots_blue1"></div>
					</div>
				</div>
				<div className="Steps">
					<Row>
						<Col xl={4} lg={4} md={12} sm={12}>
							<div className="Step-1">
								<div className="Top-Color"></div>
								<h3>1. Sign Up</h3>
								<h5>Your First Step</h5>
								<p>
									Export your new resume, CV or application letter in one of the
									available formats. PDF will provide you with the best and most
									consistent visual formatting. Word files allow you to edit the
									document further or submit the resume to an online application
									system. You can also share your career updates online.
								</p>
							</div>
						</Col>
						<Col xl={4} lg={4} md={12} sm={12}>
							<div className="Step-1">
								<div className="Top-Color"></div>
								<h3>2. Create</h3>
								<h5>Achieve Beauty With Ease</h5>
								<p>
									Choose one of our beautiful, professionally designed resume or
									cover letter formats. Add your personal info and choose and
									edit the necessary sections.formatting Customize the layout
									and visuals as much (or as little) as you want. We provide a
									ton of ready content with of room for your own creativity and
									needs.
								</p>
							</div>
						</Col>
						<Col xl={4} lg={4} md={12} sm={12}>
							<div className="Step-1">
								<div className="Top-Color"></div>
								<h3>3. Download</h3>
								<h5>Now It’s Yours!</h5>
								<p>
									Export your new resume, CV or application letter in one of the
									available formats. PDF will provide you with the best and most
									consistent visual formatting. Word files allow you to edit the
									document further or submit the resume to an online application
									system. You can also share your career updates online.
								</p>
							</div>
						</Col>
					</Row>
				</div>
			</div>
		</>
	);
};

export default Home;

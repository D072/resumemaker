import { Link } from "react-router-dom";

import Curveimg from "../Componets/Vector 2.png";
import card_image1 from "../Componets/1 1.png";
import card_image2 from "../Componets/2 1.png";
import card_image3 from "../Componets/3 1.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React from "react";

const Templete = () => {
	return (
		<>
			<div className="Templete">
				<h2>Templetes</h2>
				<div className="Templete_text flex001">
					<Link to="/" className="Templete_text1">
						Home
					</Link>
					<img src={Curveimg}></img>
					<p>Templetes</p>
				</div>
			</div>
			<div className="Cards_Main">
				<div className="Dots_blue3"></div>
				<Row>
					<Col xl={4} lg={4} md={6} sm={6}>
						<div className="temp">
							<img src={card_image1}></img>
						</div>
					</Col>
					<Col xl={4} lg={4} md={6} sm={6}>
						<div className="temp">
							<img src={card_image2}></img>
						</div>
					</Col>
					<Col xl={4} lg={4} md={6} sm={6}>
						<div className="temp">
							<img src={card_image3}></img>
						</div>
					</Col>
					<Col xl={4} lg={4} md={6} sm={6}>
						<div className="temp">
							<img src={card_image1}></img>
						</div>
					</Col>
					<Col xl={4} lg={4} md={6} sm={6}>
						<div className="temp">
							<img src={card_image2}></img>
						</div>
					</Col>
					<Col xl={4} lg={4} md={6} sm={6}>
						<div className="temp">
							<img src={card_image3}></img>
						</div>
					</Col>
				</Row>
			</div>
			<div className="Dots_yellow"></div>
			<div className="Template_button">
				<button>Browse More</button>
			</div>
		</>
	);
};

export default Templete;

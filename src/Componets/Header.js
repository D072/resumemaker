import React from "react";

import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Modal from "react-bootstrap/Modal";
import {
	Formik,
	Form as Formf,
	Field,
	ErrorMessage,
	useFormikContext,
} from "formik";
import { use, useState } from "react";
import * as Yup from "yup";

function MyVerticallyCenteredModal(props) {
	const [data, setdata] = useState([]);

	const handleSave = (values) => {
		const cpy = [...data];
		console.log("cpy ", values);
	};

	const SignupSchema = Yup.object().shape({
		firstName: Yup.string()
			.min(3, "Too Short!")
			.max(15, "Too Long!")
			.required("Required"),
		lastName: Yup.string()
			.min(2, "Too Short!")
			.max(20, "Too Long!")
			.required("Required"),
		email: Yup.string().email("Invalid email").required("Required"),
		password: Yup.string()
			.required("Please Enter your password")
			.matches(
				/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
				"Must Contain 8 Characters, 1 Uppercase, 1 Number and 1 special case Character"
			),
	});

	return (
		<Modal
			{...props}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter" className="sign-main">
					<h2>Sign up</h2>
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<h4 className="sign_h2_txt">Start Your Journy Today</h4>
				<div className="contact-form-section w-100">
					<Formik
						initialValues={{ firstName: "", lastName: "", email: "" }}
						validationSchema={SignupSchema}
						onSubmit={(values, { resetForm }) => {
							setdata((curretval) => [...curretval, values]);
							handleSave(values);
							resetForm();
						}}>
						{({ handleSubmit }) => (
							<Form onSubmit={handleSubmit}>
								<div className="flex">
									<Field
										id="firstName"
										name="firstName"
										placeholder="Jane"
										className="form_field_1"
									/>
									<div className="color_red">
										<ErrorMessage name="firstName" />
									</div>

									<Field
										id="lastName"
										name="lastName"
										placeholder="Doe"
										className="form_field_1"
									/>
									<div className="color_red">
										<ErrorMessage name="lastName" />
									</div>
								</div>

								<Field
									id="email"
									name="email"
									placeholder="jane@acme.com"
									type="email"
									className="form_field"
								/>
								<div className="color_red">
									<ErrorMessage name="email" />
								</div>

								<Field
									id="password"
									name="password"
									placeholder="Abcd123@"
									type="password"
									className="form_field"
								/>
								<div className="color_red">
									<ErrorMessage name="password" />
								</div>
								<button type="submit" className="submit_button">
									Submit
								</button>
								<br />
								<br />
							</Form>
						)}
					</Formik>
				</div>
			</Modal.Body>
		</Modal>
	);
}

const Header = () => {
	const [modalShow, setModalShow] = React.useState(false);

	let location = useLocation();

	return (
		<div>
			<div className="Navbar">
				<Navbar bg="black" expand="lg">
					<Container fluid>
						<h1 href="#" className="Navbar-Logo">
							RESUME
						</h1>
						<Navbar.Toggle aria-controls="navbarScroll" className="Colo" />
						<Navbar.Collapse id="navbarScroll">
							<Nav
								className="me-auto my-2 my-lg-0 justi-cen demo"
								style={{ maxHeight: "500px" }}
								navbarScroll>
								<Nav.Link
									href="#action1"
									className="Navbar-Text1 color_white Active">
									<Link
										to="/"
										className={location.pathname == "/" ? "Active" : " "}>
										Home
									</Link>
								</Nav.Link>
								<Nav.Link href="#action2" className="Navbar-Text2">
									<Link
										to="/Aboutus"
										className={
											location.pathname == "/Aboutus" ? "Active" : " "
										}>
										About us
									</Link>
								</Nav.Link>
								<Nav.Link href="#action2" className="Navbar-Text3">
									<Link
										to="/Templete"
										className={
											location.pathname == "/Templete" ? "Active" : " "
										}>
										Templete
									</Link>
								</Nav.Link>
								<Nav.Link href="#action2" className="Navbar-Text4">
									<Link
										to="/Contact"
										className={
											location.pathname == "/Contact" ? "Active" : " "
										}>
										Contact
									</Link>
								</Nav.Link>
							</Nav>
							<Form className="d-flex">
								<Button variant="outline-success" className="Nav-btn1">
									Log in
								</Button>
								<Button variant="outline-success" className=""></Button>
								<Button
									variant="primary"
									className="Nav-btn2"
									onClick={() => setModalShow(true)}>
									Sign up
								</Button>
								<MyVerticallyCenteredModal
									show={modalShow}
									onHide={() => setModalShow(false)}
								/>
							</Form>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			</div>
		</div>
	);
};

export default Header;

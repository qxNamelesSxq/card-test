	import { Button, Col, Form, Modal } from "react-bootstrap";
	import React from "react";
	import { Formik } from "formik";
	import * as yup from "yup";
	import { IModalProps, NewCardState } from "./Modal.type";
	import ReactDOM from "react-dom";

	
	export const ModalComponent: React.FC<IModalProps> = ({
		isOpen,
		openModalCallback,
		handleCloseModal,
		submitModalCallback,
		card,
	}) => {

	const schema = yup.object().shape({
		title: yup.string().required("Title is required"),
		description: yup.string().required("Description is required"),
	});

	const handleSubmit = (values: NewCardState) => {
		schema
		.validate(values)
		.then(() => {
			submitModalCallback(values);
			handleCloseModal();
		})
		.catch((error) => {
			console.error(error)
		});
	};

	return ReactDOM.createPortal(
		<Modal
			show={isOpen}
			onHide={openModalCallback}
			size="sm"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
		<Modal.Header closeButton>
			<Modal.Title id="contained-modal-title-vcenter">
			{card.description.length > 0 ? "EDIT CARD" : "ADD NEW CARD"}
			</Modal.Title>
		</Modal.Header>
		
			<Formik
				validationSchema={schema}
				onSubmit={handleSubmit}
				initialValues={card}
  				enableReinitialize={true}
			>
			{({ handleSubmit, handleChange, handleBlur, values, touched, isValid, errors }) => (
				<Form noValidate onSubmit={handleSubmit}>
					<Modal.Body>
						<Col>
							<Form.Group
								as={Col}
								md="4"
								controlId="validationFormik101"
								className="position-relative w-100"
							>
							<Form.Label>Title</Form.Label>
							<Form.Control
								type="text"
								name="title"
								value={values.title}
								onChange={handleChange}
								onBlur={handleBlur}
								isValid={touched.title && !errors.title}
								isInvalid={!!errors.title}
								readOnly
							/>
							<Form.Control.Feedback tooltip>
								Looks good!
							</Form.Control.Feedback>
							</Form.Group>
							<Form.Group
								as={Col}
								md="4"
								controlId="validationFormik101"
								className="position-relative w-100"
							>
							<Form.Label>Description</Form.Label>
							<Form.Control
								type="text"
								name="description"
								value={values.description}
								onChange={handleChange}
								onBlur={handleBlur}
								isValid={touched.description && !errors.description}
								isInvalid={!!errors.description}
							/>
							<Form.Control.Feedback tooltip>
								Looks good!
							</Form.Control.Feedback>
							</Form.Group>
						</Col>
					</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={openModalCallback}>
							Cancel
						</Button>
						<Button disabled={!isValid} type="submit">
							OK
						</Button>
					</Modal.Footer>
				</Form>
			)}
			</Formik>
		
		
		</Modal>,
		document.body
	);
	};

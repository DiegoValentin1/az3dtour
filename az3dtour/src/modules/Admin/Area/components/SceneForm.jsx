import React, { useContext } from 'react';
import AuthContext from '../../../login/authContext';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import { useFormik } from 'formik';
import AxiosClient from '../../../../shared/plugins/axios';

const SceneForm = ({ isOpen, onClose }) => {
    const user = useContext(AuthContext);
    const { token } = user;


    const form = useFormik({
        initialValues: {
            name_of_the_area: "",
            main_goal_of_the_area: "",
            main_lead_name: "",
            web_link_area: "",
        },
        onSubmit: async (values) => {
            try {
                const response = await AxiosClient({
                    method: "POST",
                    url: "/area/create",
                    data: JSON.stringify(values),

                });
                if (!response.error) {
                    data();
                    handleClose();
                }
            } catch (error) {
                console.log(error);
            }
        }
    })

    const handleClose = () => {
        form.resetForm();
        onClose();
    };


    return (
        <Modal show={isOpen} onHide={onClose} backdrop="static">
            <Modal.Title className='m-2'>Create area</Modal.Title>
            <Modal.Body>
                <Form onSubmit={form.handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="name_of_the_area">Name of the area</Form.Label>
                        <Form.Control
                            name="name_of_the_area"
                            placeholder=""
                            value={form.values.name_of_the_area}
                            onChange={form.handleChange}
                            type="text"
                        />
                        {form.errors.name_of_the_area && (
                            <span className="error-text">{form.errors.name_of_the_area}</span>
                        )}
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="main_goal_of_the_area">Main goal of the area</Form.Label>
                        <Form.Control
                            name="main_goal_of_the_area"
                            placeholder=""
                            value={form.values.main_goal_of_the_area}
                            onChange={form.handleChange}
                            type="text"
                        />
                        {form.errors.main_goal_of_the_area && (
                            <span className="error-text">{form.errors.main_goal_of_the_area}</span>
                        )}
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="main_lead_name">Main lead name</Form.Label>
                        <Form.Control
                            name="main_lead_name"
                            placeholder=""
                            value={form.values.main_lead_name}
                            onChange={form.handleChange}
                            type="text"
                        />
                        {form.errors.main_lead_name && (
                            <span className="error-text">{form.errors.main_lead_name}</span>
                        )}
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="web_link_area">Web link area</Form.Label>
                        <Form.Control
                            name="web_link_area"
                            placeholder=""
                            value={form.values.web_link_area}
                            onChange={form.handleChange}
                            type="text"
                        />
                        {form.errors.web_link_area && (
                            <span className="error-text">{form.errors.web_link_area}</span>
                        )}
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Row>
                            <Col className="text-end">
                                <Button
                                    variant="outline-danger"
                                    className="me-2"
                                    onClick={handleClose}
                                >
                                    Cancel
                                </Button>
                                <Button variant="outline-success" type="submit">
                                    Save
                                </Button>
                            </Col>
                        </Row>
                    </Form.Group>
                </Form>
            </Modal.Body>
        </Modal>
    );
}

export default SceneForm;

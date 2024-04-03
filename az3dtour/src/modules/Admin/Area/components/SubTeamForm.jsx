import React, { useContext, useState, useEffect, useMemo} from 'react';
import AuthContext from '../../../login/authContext';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import { useFormik } from 'formik';
import AxiosClient from '../../../../shared/plugins/axios';

const SubTeamForm = ({ isOpen, onClose, idArea, subs}) => {
    const user = useContext(AuthContext);
    const { token } = user;

    const [subTeams, setSubTeams] = useState([]);

    const addSubTeam = () => {
        setSubTeams([...subTeams, { sub_team: '', dl: '', assignment_group: '' }]);
    };

    const handleSubTeamChange = (index, event) => {
        const { name, value } = event.target;
        const newSubTeams = [...subTeams];
        newSubTeams[index][name] = value;
        setSubTeams(newSubTeams);
    };

    const handleRemoveSubTeam = index => {
        const newSubTeams = [...subTeams];
        newSubTeams.splice(index, 1);
        setSubTeams(newSubTeams);
    };

    const form = useFormik({
        initialValues: {
            sub_team: "",
            dl: "",
            assignment_group: "",
        },
        onSubmit: async (values) => {
            console.log(subTeams)
            try {
                const response = await AxiosClient({
                    method: "PUT",
                    url: `/area/updateSub/${idArea}`,
                    data: JSON.stringify({sub_teams: subTeams}),
                });
                if (!response.error) {
                    console.log(response.data);
                    handleClose();
                }
            } catch (error) {
                console.log(error);
            }
        }
    });

    const handleClose = () => {
        form.resetForm();
        onClose();
    };

    useEffect(() => {
        setSubTeams(subs);
    }   , [subs]);

    return (
        <Modal show={isOpen} onHide={onClose} backdrop="static">
            <Modal.Title className='m-2'>Create scenes</Modal.Title>
            <Modal.Body>
                <Form onSubmit={form.handleSubmit}>
                    {subTeams.map((subTeam, index) => (
                        <div key={index}>
                            <Form.Group className="mb-3">
                                <Form.Label htmlFor={`sub_team_${index}`}>Sub team</Form.Label>
                                <Form.Control
                                    name="sub_team"
                                    placeholder=""
                                    value={subTeam.sub_team}
                                    onChange={event => handleSubTeamChange(index, event)}
                                    type="text"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label htmlFor={`dl_${index}`}>DL</Form.Label>
                                <Form.Control
                                    name="dl"
                                    placeholder=""
                                    value={subTeam.dl}
                                    onChange={event => handleSubTeamChange(index, event)}
                                    type="text"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label htmlFor={`assignment_group_${index}`}>Assignment Group</Form.Label>
                                <Form.Control
                                    name="assignment_group"
                                    placeholder=""
                                    value={subTeam.assignment_group}
                                    onChange={event => handleSubTeamChange(index, event)}
                                    type="text"
                                />
                            </Form.Group>
                            <Button variant="danger" onClick={() => handleRemoveSubTeam(index)}>Remove</Button>
                        </div>
                    ))}
                    <Button variant="primary" onClick={addSubTeam}>Add SubTeam</Button>
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

export default SubTeamForm;
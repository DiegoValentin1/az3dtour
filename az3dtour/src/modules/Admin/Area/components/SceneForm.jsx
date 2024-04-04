import React, { useContext, useState, useEffect, useMemo} from 'react';
import AuthContext from '../../../login/authContext';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import { useFormik } from 'formik';
import AxiosClient from '../../../../shared/plugins/axios';
import UploadPicture from './UploadPicture';

const SceneForm = ({ isOpen, onClose, idArea, scenesL}) => {

    const [scenes, setScenes] = useState([]);

    const addScene = () => {
        setScenes([...scenes, { title: '', base64Image: '' }]);
    };

    const handleSubTeamChange = (index, event) => {
        const { name, value } = event.target;
        const newScenes = [...scenes];
        console.log(newScenes);
        newScenes[index][name] = value;
        setScenes(newScenes);
    };

    const handleRemoveSubTeam = index => {
        const newScenes = [...scenes];
        newScenes.splice(index, 1);
        setScenes(newScenes);
    };

    const form = useFormik({
        initialValues: {
            sub_team: "",
            dl: "",
            assignment_group: "",
        },
        onSubmit: async (values) => {
            console.log(scenes)
            try {
                console.log({scenes:scenes});
                const response = await AxiosClient({
                    method: "PUT",
                    url: `/area/updateScene/${idArea}`,
                    data: JSON.stringify({scenes: scenes}),
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

    // useMemo(() => {
    //     setScenes(scenesL);
    // }   , [scenesL, isOpen]);

    return (
        <Modal show={isOpen} onHide={onClose} backdrop="static">
            <Modal.Title className='m-2'>Create scenes</Modal.Title>
            <Modal.Body>
                <Form onSubmit={form.handleSubmit}>
                    {scenes && scenes.map((scene, index) => (
                        <div key={index}>
                            <Form.Group className="mb-3">
                                <Form.Label htmlFor={`sub_team_${index}`}>Sub team</Form.Label>
                                <Form.Control
                                    name="title"
                                    placeholder="First Scene"
                                    value={scene.title}
                                    onChange={event => handleSubTeamChange(index, event)}
                                    type="text"
                                />
                            </Form.Group>
                            <UploadPicture setValueImage={(valor)=>{handleSubTeamChange(index,{target:{name:"base64Image", value:valor}})}}/>
                            <Button variant="danger" onClick={() => handleRemoveSubTeam(index)}>Remove</Button>
                        </div>
                    ))}
                    <Button variant="primary" onClick={()=>addScene()}>Add Scene</Button>
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
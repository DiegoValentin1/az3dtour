import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

const UploadPicture = ({ setValueImage }) => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [isLoading, setLoading] = useState(false);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
    
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            let reader = new FileReader();
            reader.onloadend = function() {
                let base64String = reader.result.replace('data:', '')
                    .replace(/^.+,/, '');
                console.log(base64String);
                setValueImage(base64String);
            }
            reader.readAsDataURL(img);
        }
    };

    return (
        <div>
            <h2>Subir Archivo</h2>
            <form onSubmit={handleSubmit}>
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Selecciona una Imagen</Form.Label>
                    <Form.Control type="file" onChange={handleSubmit} />
                </Form.Group>
            </form>
        </div>
    );
};

export default UploadPicture;

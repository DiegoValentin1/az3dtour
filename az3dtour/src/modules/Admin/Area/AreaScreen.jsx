import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../login/authContext';
import AxiosClient from '../../../shared/plugins/axios';
import DataTable from 'react-data-table-component'
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import { Badge, Button, Card, Col, Row } from "react-bootstrap";
import AreaForm from './components/AreaForm';
import EditAreaForm from './components/EditAreaForm';
const AreaScreen = () => {
    const user = useContext(AuthContext);
    const { token } = user;

    const [areas, setAreas] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenEdit, setIsOpenEdit] = useState(false);
    const [object, setObject] = useState({});


    const getAreas = async () => {
        try {
            const response = await AxiosClient({
                url: "/area/getAll",
                method: "GET",
               
            })
            console.log(response.data)
            setAreas(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getAreas();
    }, []);
    const deleteArea = async (id) => {
        try {
            const response = await AxiosClient({
                url: `/area/delete/${id}`,
                method: "DELETE",
            });
            if (!response.error) {
                getAreas();
            }
        } catch (error) {
            alert("Error");
        }
    }
    const columns = React.useMemo(() => [
            {
                name: "UID",
                selector: (row) => row.id,
                cell:(row) => <div>{row.id}</div>,
            },
            {
                name: "Name Of the Area",
                grow:2,
                selector: (row) => row.name_of_the_area,
                cell:(row) => <div>{row.name_of_the_area}</div>,
                sortable: true,
                fixed: true,
            },
            {
                name: "main_goal_of_the_area",
                grow:2,
                selector: (row) => row.main_goal_of_the_area,
                cell:(row) => <div>{row.main_goal_of_the_area}</div>,
                sortable: true,
                fixed: true,
            },
            {
                name: "main_lead_name",
                grow:2,
                selector: (row) => row.main_lead_name,
                cell:(row) => <div>{row.main_lead_name}</div>,
                sortable: true,
                fixed: true,
            },
            {
                name: "web_link_area",
                grow:2,
                selector: (row) => row.web_link_area,
                cell:(row) => <div>{row.web_link_area}</div>,
                sortable: true,
                fixed: true,
            },
            {
                name: "sub_teams",
                cell:(row) => <div><Button variant='none'><FeatherIcon icon={"eye"}/></Button></div>,
                sortable: true,
                fixed: true,
            },
            {
                name: "scenes",
                cell:(row) => <div><Button variant='none'><FeatherIcon icon={"aperture"}/></Button></div>,
                sortable: true,
                fixed: true,
            },
            {
                name: "Actions",
                cell: (row) => (
                    <>
                    <Button variant='warning' onClick={() => {
                        setIsOpenEdit(true)
                        setObject(row)
                    }}><FeatherIcon icon={"edit-2"}/></Button>
                    <Button variant='danger'><FeatherIcon icon={"trash"}/> </Button>
                    </>
                )
            },
        ],
        []
    );

    return (
        <Row>
            <Col>
            <Card className='mt-2'>
                <Card.Title>Area <Button onClick={() => setIsOpen(true)}>Agregar</Button></Card.Title>
                <Card.Body>
                    <DataTable columns={columns} data={areas} />
                </Card.Body>
            </Card>
            </Col>
            <AreaForm  isOpen={isOpen} data={getAreas} onClose={()=> setIsOpen(false)}/>
            <EditAreaForm isOpen={isOpenEdit} data={getAreas} object={object} onClose={()=> setIsOpenEdit(false)}/>
        </Row>
    );
}

export default AreaScreen;

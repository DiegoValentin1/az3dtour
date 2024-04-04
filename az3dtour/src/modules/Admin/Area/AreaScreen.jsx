import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../login/authContext';
import AxiosClient from '../../../shared/plugins/axios';
import DataTable from 'react-data-table-component'
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import { Badge, Button, Card, Col, Row } from "react-bootstrap";
import AreaForm from './components/AreaForm';
import EditAreaForm from './components/EditAreaForm';
import SubTeamForm from './components/SubTeamForm';
import SceneForm from './components/SceneForm';

const AreaScreen = () => {
    const user = useContext(AuthContext);
    const { token } = user;

    const [areas, setAreas] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenEdit, setIsOpenEdit] = useState(false);
    const [isOpenSubTeam, setIsOpenSubTeam] = useState(false);
    const [object, setObject] = useState({});
    const [area, setArea] = useState([]);
    const [subteams, setSubTeams] = useState([]);
    const [scenes, setScenes] = useState([]);
    const [isScene, setIsScene] = useState(false)


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

    const getSubByid = async (id) => {
        try {
            const response = await AxiosClient({
                url: `/area/getSubById/${id}`,
                method: "GET",
            });
            console.log(response.data)
            setSubTeams(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    const getSceneByid = async (id) => {
        try {
            const response = await AxiosClient({
                url: `/area/getSceneById/${id}`,
                method: "GET",
            });
            console.log(response.data)
            setScenes(response.data);
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
        // {
        //     name: "UID",
        //     selector: (row) => row.id,
        //     cell: (row) => <div>{row.id}</div>,
        // },
        {
            name: "Name Of the Area",
            grow: 2,
            selector: (row) => row.name_of_the_area,
            cell: (row) => <div>{row.name_of_the_area}</div>,
            sortable: true,
            fixed: true,
        },
        {
            name: "main_goal_of_the_area",
            grow: 2,
            selector: (row) => row.main_goal_of_the_area,
            cell: (row) => <div>{row.main_goal_of_the_area}</div>,
            sortable: true,
            fixed: true,
        },
        {
            name: "main_lead_name",
            grow: 2,
            selector: (row) => row.main_lead_name,
            cell: (row) => <div>{row.main_lead_name}</div>,
            sortable: true,
            fixed: true,
        },
        {
            name: "web_link_area",
            grow: 2,
            selector: (row) => row.web_link_area,
            cell: (row) => <div>{row.web_link_area}</div>,
            sortable: true,
            fixed: true,
        },
        {
            name: "sub_teams",
            cell: (row) => <div><Button variant='none'
                onClick={() => {
                    setIsOpenSubTeam(true)
                    setArea(row)
                    getSubByid(row.id)
                }}><FeatherIcon icon={"eye"} /></Button></div>,
            sortable: true,
            fixed: true,
        },
        {
            name: "scenes",
            cell: (row) => <div>
                <Button variant='none' onClick={()=>{setArea(row); setIsScene(true); getSceneByid(row.id)}} >
                    <FeatherIcon icon={"aperture"} />
                </Button>
            </div>,
            sortable: true,
            fixed: true,
        },
        {
            name: "Actions",
            cell: (row) => (
                <>
                    <Button variant='warning' className='mr-2' onClick={() => {
                        setIsOpenEdit(true)
                        setObject(row)
                    }}>
                        <FeatherIcon icon={"edit-2"} /></Button>
                    <Button variant='danger' onClick={() => { deleteArea(row.id); }}><FeatherIcon icon={"trash"} /> </Button>
                </>
            )
        },
    ],
        []
    );

    return (
        <div className='w-[100vw] h-[100vh] p-10 bg-[#f2f2f2]'>
            <div onClick={()=>setIsOpen(true)} >Add Area</div>
            <div className='flex flex-col bg-[#fafafa] h-[100%] w-[100%] rounded-[2rem] p-3'>
                <DataTable columns={columns} data={areas} pagination paginationRowsPerPageOptions={[2, 4, 6, 8]} paginationPerPage={8} />
            </div>

            <AreaForm isOpen={isOpen} data={getAreas} onClose={() => setIsOpen(false)} />
            <EditAreaForm isOpen={isOpenEdit} data={getAreas} object={object} onClose={() => setIsOpenEdit(false)} />
            <SubTeamForm isOpen={isOpenSubTeam} onClose={() => setIsOpenSubTeam(false)} idArea={area.id} subs={subteams} />
            <SceneForm isOpen={isScene} onClose={() => setIsScene(false)} idArea={area.id} scenesL={scenes} />
        </div>
    );
}

export default AreaScreen;

import React, { useEffect, useRef, useState } from 'react';
import Modal from './modal';
import dataScene from '../helpers/dataScene';
import { UseModal } from '../hooks/useModal';
import ModelContainer from './modelContainer';
import { Pannellum } from 'pannellum-react';
import '../styles/scena.css';
export default function SceneTemp() {
    const { isOpen, openModal, closeModal } = UseModal(false);
    const [scene, setScene] = useState(dataScene['insideOne']);
    const [model, setModel] = useState(null);
    

    const mountRef = useRef(null);
    const panImage = useRef(null);



    useEffect(() => {
        console.log(<Pannellum/>);
        const currentRef = mountRef.current;
        console.log(currentRef);

        return () => {
            for (let i = currentRef.children.length - 1; i >= 0; i--) {
                const child = currentRef.children[i];
                currentRef.removeChild(child);
            }
        }
    }, []);
    return (
        <div ref={mountRef}>
            <Pannellum
                ref={panImage}
                ontouchstart={(evt)=>{console.log("Touch Start", evt);}}
                width={'100%'}
                height={'90vh'}
                title={scene.title}
                image={scene.image}
                pitch={scene.pitch}
                maxPitch={50}
                minPitch={-50}
                yaw={scene.yaw}
                maxHfov={50}
                minHfov={150}
                hfov={80}
                haov={360}
                vaov={100}
                autoLoad
                showFullscreenCtrl={false}
                draggable
                keyBoardZoom={true}
                showZoomCtrl={true}
                orientationOnByDefault={false}
                hotspotDebug={false}
                onMouseup={(event) => {
                    console.log(panImage.current.getViewer().mouseEventToCoords(event)[0]);
                    console.log(panImage.current.getViewer().mouseEventToCoords(event)[1]);

                }}          >
                {scene.hotSpots.map((spot, index) => (
                    <Pannellum.Hotspot
                        key={index}
                        id={spot.id}
                        type={spot.type}
                        pitch={spot.pitch}
                        yaw={spot.yaw}
                        text={spot.text}
                        handleClick={(evt, name) => {
                            if (spot.action === 'changeScene') {
                                setScene(dataScene[spot.targetScene]);
                            } else {
                                setModel(name);
                                openModal();
                            }
                        }}
                        createTooltipFunc={(hotSpotDiv, args) => {
                            hotSpotDiv.classList.add('custom-tooltip');
                            hotSpotDiv.innerHTML = args;
                        }}
                    />
                ))}
            </Pannellum>
            <Modal isOpen={isOpen} close={() => closeModal()}>
                {isOpen && <ModelContainer nameModel={model} />}
            </Modal>
        </div>
    );
}

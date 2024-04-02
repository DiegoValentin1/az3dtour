import React, { useEffect, useRef, useState } from 'react';
import Modal from '../components/modal';
import dataScene from '../helpers/dataScene';
import { UseModal } from '../hooks/useModal';
import ModelContainer from './modelContainer';
import { Pannellum } from 'pannellum-react';
import '../styles/scena.css';
export default function Scene() {
    const { isOpen, openModal, closeModal } = UseModal(false);
    const [scene, setScene] = useState(dataScene['insideOne']);
    const [model, setModel] = useState(null);
    const [hfov, setHfov] = useState(40); // Estado para almacenar el valor de hfov

    const mountRef = useRef(null);

    useEffect(() => {
        const currentRef = mountRef.current;

        return () => {
            for (let i = currentRef.children.length - 1; i >= 0; i--) {
                const child = currentRef.children[i];
                currentRef.removeChild(child);
            }
        }
    }, []);
    useEffect(() => {

        // Función para manejar el evento de cambio de tamaño de la ventana
        const handleResize = () => {
            // Actualizar el valor de hfov dependiendo del tamaño de la ventana
            if (window.innerWidth < 768) {
                setHfov(40); // Para dispositivos móviles
            } else {
                setHfov(150); // Para computadoras
            }
        };

        // Agregar el event listener para el evento de cambio de tamaño de la ventana
        window.addEventListener('resize', handleResize);

        return () => {
            // Remover el event listener al desmontar el componente
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <div ref={mountRef}>
            <Pannellum
                width={'100%'}
                height={'100vh'}
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
                showControls={false}
                showFullscreenCtrl={false}
                draggable
                showZoomCtrl={false}
                orientationOnByDefault={false}
                hotspotDebug={false}            >
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

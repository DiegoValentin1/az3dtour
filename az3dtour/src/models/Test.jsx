import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import Stats from 'three/examples/jsm/libs/stats.module';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
const img = require('./1.jpg')
const img2 = require('./2.jpg')

const StreetView = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Mostrar el rendimiento (FPS)
    const stats = new Stats();
    document.body.appendChild(stats.domElement);

    // Configuración de la escena
    const scene = new THREE.Scene();

    // Configuración de la cámara
    const fov = 35;
    const aspect = window.innerWidth / window.innerHeight;
    const near = 0.1;
    const far = 1000;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.set(0, 0, 25);
    scene.add(camera);

    // Crear el renderizador
    const renderer = new THREE.WebGLRenderer({
        antialias: true,
        canvas: mountRef.current,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.autoClear = false;
    renderer.setClearColor(0x000000, 0.0);

    // Añadir controles de órbita
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.minDistance = 10;
    controls.maxDistance = 40;

    // Cargar texturas
    const loader = new THREE.TextureLoader();
    const texturePromises = [
        loader.load(img),
        loader.load(img2),

    ];

    Promise.all(texturePromises).then(textures => {
        // Crear materiales
        const materials = textures.map(texture => new THREE.MeshBasicMaterial({ map: texture }));
        
        // Configurar materiales para caras traseras
        for(let i = 0; i < materials.length; i++) {
            materials[i].side = THREE.BackSide;
        }

        // Crear skybox
        const cubeGeometry = new THREE.BoxGeometry(100, 100, 100);
        const skyBox = new THREE.Mesh(cubeGeometry, materials);
        scene.add(skyBox);

        // Función para renderizar la escena
        const render = () => {
            renderer.render(scene, camera);
        };

        // Función para animar la escena
        const animate = () => {
            requestAnimationFrame(animate);
            render();
            stats.update();
        };
        animate();

        // Función para ajustar el tamaño de la ventana y hacerla responsiva
        const windowResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
            render();
        };

        window.addEventListener('resize', windowResize, false);
    });

    // Limpieza
    return () => {
      document.body.removeChild(stats.domElement);
    };
  }, []);

  return <canvas ref={mountRef} className="web-gl" />;
};

export default StreetView;

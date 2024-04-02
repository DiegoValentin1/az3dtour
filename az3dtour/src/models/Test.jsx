import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';


const Test = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load('./testimage.jpg');
    console.log(texture);
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry(10,10,10);
    const material = new THREE.MeshBasicMaterial({color: 0xffffff});
    const cube = new THREE.Mesh(geometry, material);

    const ambientLight = new THREE.AmbientLight(0xffffff, 5); // Luz ambiental
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5); // Luz direccional
    directionalLight.position.set(15, 5, 5);
    scene.add(directionalLight);
    scene.add(cube);

    camera.position.z = 10;
    camera.position.x = 1;
    camera.position.y = 1;

    const animate = function () {
      requestAnimationFrame(animate);

      renderer.render(scene, camera);
    };

    animate();

    return () => mountRef.current.removeChild(renderer.domElement);
  }, []);

  return <div ref={mountRef} />;
}

export default Test;
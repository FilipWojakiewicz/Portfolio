import React, { Suspense, useRef, useMemo } from 'react';
import { Canvas, useFrame } from "@react-three/fiber";
import "./style.scss";
import { Route, Routes } from 'react-router-dom';
import { softShadows, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import Layout from './components/Layout';
import Home from './components/Home';
import { useGLTF } from '@react-three/drei'

// softShadows();

const CanvasComponent = () => {
  const mesh = useRef();
  useFrame(() => {
    if (mesh.current){
      mesh.current.rotation.y += 0.001
    }
  });

  const moon = useRef();
  useFrame(() => {
    if (moon.current){
      moon.current.rotation.y -= 0.001
    }
  });
 
  return (
    <>
        <PerspectiveCamera/>
        <OrbitControls position={[0, 0, 0]} target={[3, 0, 0]} />
        <mesh castShadow={true} onClick={() => console.log('earth')} ref={mesh} rotation={[0, 0, 0]} position={[3, 0, 0]} scale={[12, 12, 12]}>
          <ControllerModel/>
          {/* <MoonModel/> */}
          <mesh castShadow={true} onClick={() => console.log('moon')} ref={moon} rotation={[0, 0, 0]} position={[0.3, 0.3, 0]} scale={[0.001, 0.001, 0.001]}>
            <MoonModel/>
          </mesh>
          {/* <mesh castShadow={true} onClick={() => console.log('moon')} ref={moon} rotation={[0, 0, 0]} position={[-0.3, 0.3, 0]} scale={[0.001, 0.001, 0.001]}>
            <MoonModel/>
          </mesh> */}
        </mesh>
        {/* <mesh castShadow={true} onClick={() => console.log('hi')} ref={moon} rotation={[0, 0, 0]} position={[-1, 1, 0]} scale={[0.01, 0.01, 0.01]}>
          <MoonModel/>
        </mesh> */}
        {/* <mesh receiveShadow={true} rotation={[-Math.PI/2, 0, 0]} position={[3, -2.4, 0]} scale={[12, 12, 12]}>
          <planeGeometry args={[7, 7]}/>
          <meshStandardMaterial color={'#ffffff'}/>
        </mesh> */}
    </>
  );
}

const TestComponent = () => {
  return (
    <div className='canvas'>  
      <Suspense fallback={null}>
        <Canvas shadows>
          <Lights />
          <CanvasComponent/>
        </Canvas>
      </Suspense>
    </div>
  );
}

const Lights = () => {
  return (
    <>
      <ambientLight intensity={0.3}/>
      <directionalLight castShadow position={[10, 10, 5]} intensity={2} 
      shadow-mapSize-width={1024}
      shadow-mapSize-height={1024}
      shadow-camera-far={50}
      shadow-camera-left={-10}
      shadow-camera-right={10}
      shadow-camera-top={10}
      shadow-camera-bottom={-10}/>
      <directionalLight position={[0, 10, 0]} intensity={1.5} />
      <spotLight castShadow position={[1000, 1000, 0]} intensity={1} />
      </>
  );
}

const ControllerModel = (props) => {
  // const gltf = useGLTF('/scene.gltf', true);
  // return <primitive object={gltf.scene} {...props}/>
  const { nodes, scene } =useGLTF('/scene.gltf', true);
  useMemo(() => Object.values(nodes).forEach(obj =>
    obj.isMesh && Object.assign(obj, { castShadow: true })), [nodes])
  return <primitive object={scene} dispose={null} />
}

const MoonModel = (props) => {
  // const { nodes, scene } =useGLTF('/scene1.gltf', true);
  const { nodes, scene } =useGLTF('/text3d.gltf', true);
  useMemo(() => Object.values(nodes).forEach(obj =>
    obj.isMesh && Object.assign(obj, { castShadow: true })), [nodes])
  return <primitive object={scene} dispose={null} />
}

function App() {
  return (
    <>
    <div>
    <TestComponent></TestComponent>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}>
        </Route>
      </Route>
    </Routes>
    </div>
    </>
  );
}

export default App;

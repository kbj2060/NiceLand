// import React, { Suspense, useRef} from "react";
// import { Canvas, useFrame } from "react-three-fiber";
// import { OrbitControls, useGLTF } from "@react-three/drei";


// function Model({path}) {
//     const { scene } = useGLTF(process.env.PUBLIC_URL + path);
//     const mesh = useRef()
//     // useFrame(({ clock, camera }) => {
//     //     const t = clock.getElapsedTime()/3;
//     //     const x = Math.sin(t);
//     //     const z = Math.cos(t);
//     //     camera.position.x = x/2;
//     //     camera.position.z = z/2;
//     // })
//     // useFrame((state, delta) => {
//     //     mesh.current.rotation.y += 0.005
//     //     state.camera.position.y = 1
//     // })

//     return <primitive ref={mesh} object={scene} />;
// }


// export default function ModelWrapper({path}) {

    
//     return (
//         <Canvas  camera={{  fov: 5 }}>
//             <ambientLight intensity={1} />
//             <Suspense fallback={null}>
//                 <Model path={path} />
//             </Suspense>
//             <OrbitControls  enableZoom={false} />
//         </Canvas>
//     );
// }

import {  useRef } from "react"
import {
    useFrame,
} from "react-three-fiber"
import { FramerCanvas } from "./FramerCanvas"


function Torus() {
    const ref = useRef<any>()
    useFrame(() => (ref.current.rotation.x = ref.current.rotation.y += 0.01))
    return (
        <mesh ref={ref}>
            <torusKnotGeometry args={[1.4, 0.5, 256, 64]} />
            <meshNormalMaterial />
        </mesh>
    )
}

export default function Shape() {
    return (
        <FramerCanvas>
            <color args={["#f0f0ff"]} attach="background" />
            <ambientLight />
            <Torus />
        </FramerCanvas>
    )
}

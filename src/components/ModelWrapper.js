import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Model({path}) {
    const { scene } = useGLTF(process.env.PUBLIC_URL + path);
    const mesh = useRef()

    useFrame(({ clock, camera }) => {
        const t = clock.getElapsedTime()/3;
        const x = Math.sin(t);
        const z = Math.cos(t);
        camera.position.x = x;
        camera.position.z = z;
    })

    return <primitive ref={mesh} object={scene} />;
}

export default function ModelWrapper({path}) {
    return (
        <Canvas  camera={{ position: [1, 0.2, 1], fov: 30 }} >
            <ambientLight intensity={1} />
            <Suspense fallback={null}>
                <Model path={path} />
            </Suspense>
            <OrbitControls  enableZoom={false} />
        </Canvas>
    );
}
import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Model({path}) {
    const { scene } = useGLTF(process.env.PUBLIC_URL + path);
    const mesh = useRef()

    useFrame(({ clock, camera }) => {
        const t = clock.getElapsedTime()/2;
        const x = Math.sin(t);
        const z = Math.cos(t);
        camera.position.z = x;
        camera.position.x = z;
    })

    return <primitive ref={mesh} object={scene} />;
}

export default function ModelWrapper({path}) {
    // useThree(({camera}) => {
    //     camera.rotation.set(deg2rad(30), 0, 0);
    // });

    return (
        <Canvas camera={{ position: [-3, 0.1, 10], fov: 25 }}>
            <ambientLight intensity={1} />
            <Suspense fallback={null}>
                <Model path={path} />
            </Suspense>
            <OrbitControls autoRotateSpeed={0.4} enableZoom={false} />
        </Canvas>
    );
}
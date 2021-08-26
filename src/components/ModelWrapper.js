import { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Model({path}) {
    const { scene } = useGLTF(process.env.PUBLIC_URL + path);
    // const mesh = useRef()

    // useFrame(() => (
    //     mesh.current.rotation.x += 1 / 100,
    //     mesh.current.rotation.z -= 1 / 100
    // ))

    return <primitive object={scene} />;
}

export default function ModelWrapper({path}) {
    return (
        <Canvas pixelRatio={[1, 1]} camera={{ position: [0.5, 0.5, 2], fov: 20 }}>
            <ambientLight intensity={1} />
            <Suspense fallback={null}>
                <Model path={path} />
            </Suspense>
            <OrbitControls autoRotate={true} enableZoom={false} />
        </Canvas>
    );
}
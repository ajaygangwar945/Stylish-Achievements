import { Canvas } from '@react-three/fiber';
import { Float, PerspectiveCamera, OrbitControls, Environment, ContactShadows, Stars } from '@react-three/drei';
import { Suspense } from 'react';

const GeometricShapes = () => {
    return (
        <group>
            {/* Main Torus */}
            <Float
                speed={2}
                rotationIntensity={1}
                floatIntensity={1}
                position={[0, 0, 0]}
            >
                <mesh castShadow receiveShadow>
                    <torusKnotGeometry args={[1, 0.3, 128, 16]} />
                    <meshStandardMaterial
                        color="#3b82f6" // blue-500
                        roughness={0.1}
                        metalness={0.8}
                        emissive="#1d4ed8"
                        emissiveIntensity={0.2}
                    />
                </mesh>
            </Float>

            {/* Floating Icosahedron */}
            <Float
                speed={2}
                rotationIntensity={2}
                floatIntensity={1}
                position={[-2, 2, -2]}
            >
                <mesh castShadow receiveShadow>
                    <icosahedronGeometry args={[0.8, 0]} />
                    <meshStandardMaterial
                        color="#ec4899" // pink-500
                        roughness={0.1}
                        metalness={0.5}
                    />
                </mesh>
            </Float>

            {/* Small Sphere */}
            <Float
                speed={4}
                rotationIntensity={0.5}
                floatIntensity={2}
                position={[2.5, -1.5, -1]}
            >
                <mesh castShadow receiveShadow>
                    <sphereGeometry args={[0.5, 32, 32]} />
                    <meshStandardMaterial
                        color="#8b5cf6" // violet-500
                        roughness={0.1}
                        metalness={0.8}
                    />
                </mesh>
            </Float>

            {/* Extra small shapes for detail */}
            <Float speed={3} rotationIntensity={1.5} position={[2, 2, 0]}>
                <mesh>
                    <octahedronGeometry args={[0.4]} />
                    <meshStandardMaterial color="#06b6d4" roughness={0.1} metalness={0.9} />
                </mesh>
            </Float>
        </group>
    );
}

const Scene3D = () => {
    return (
        <div className="w-full h-[400px] md:h-[600px] cursor-grab active:cursor-grabbing">
            <Canvas shadows dpr={[1, 2]}>
                <Suspense fallback={null}>
                    <PerspectiveCamera makeDefault position={[0, 0, 7]} fov={50} />

                    <OrbitControls
                        enableZoom={false}
                        autoRotate
                        autoRotateSpeed={1}
                        maxPolarAngle={Math.PI / 2}
                        minPolarAngle={Math.PI / 3}
                    />

                    <ambientLight intensity={0.5} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
                    <pointLight position={[-10, -10, -10]} intensity={1} />

                    <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

                    <GeometricShapes />

                    <ContactShadows resolution={1024} scale={20} blur={2} opacity={0.25} far={10} color="#000000" />
                    <Environment preset="city" />
                </Suspense>
            </Canvas>
        </div>
    );
};

export default Scene3D;

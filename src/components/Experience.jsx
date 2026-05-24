import { Float, MeshDistortMaterial, useScroll, Environment, ContactShadows, PresentationControls, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const vec = new THREE.Vector3();

export const Experience = () => {
  const scroll = useScroll();
  const sphereRef = useRef();
  const groupRef = useRef();

  useFrame((state, delta) => {
    const offset = scroll.offset;

    // Smooth camera movement based on scroll
    // Page 0: [0, 2, 5] -> Page 1: [2, 0, 4] -> Page 2: [-2, 1, 3] -> Page 3: [0, 0, 2]

    if (offset < 0.33) {
        const t = offset / 0.33;
        vec.set(0 + t * 5, 2 - t * 2, 5 - t * 1);
        state.camera.position.lerp(vec, 0.1);
    } else if (offset < 0.66) {
        const t = (offset - 0.33) / 0.33;
        vec.set(5 - t * 10, 0 + t * 2, 4 - t * 2);
        state.camera.position.lerp(vec, 0.1);
    } else {
        const t = (offset - 0.66) / 0.34;
        vec.set(-5 + t * 5, 2 - t * 4, 2 + t * 3);
        state.camera.position.lerp(vec, 0.1);
    }

    state.camera.lookAt(0, 0, 0);

    if (sphereRef.current) {
        sphereRef.current.rotation.x += delta * 0.5;
        sphereRef.current.rotation.y += delta * 0.3;
    }

    if (groupRef.current) {
        groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, -offset * 2, 0.1);
    }
  });

  return (
    <>
      <Environment preset="city" />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />

      <group ref={groupRef}>
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
          <mesh ref={sphereRef} castShadow>
            <sphereGeometry args={[1.5, 64, 64]} />
            <MeshDistortMaterial
              color="#1a1a1a"
              speed={4}
              distort={0.3}
              radius={1}
              metalness={0.8}
              roughness={0.1}
            />
          </mesh>
        </Float>

        {/* Floating rings */}
        {[...Array(3)].map((_, i) => (
            <mesh key={i} rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}>
                <torusGeometry args={[2.5 + i * 0.5, 0.02, 16, 100]} />
                <meshStandardMaterial color="white" emissive="white" emissiveIntensity={2} transparent opacity={0.5} />
            </mesh>
        ))}

        {/* Particles */}
        <group>
            {[...Array(100)].map((_, i) => (
                <mesh
                    key={i}
                    position={[
                        (Math.random() - 0.5) * 20,
                        (Math.random() - 0.5) * 20,
                        (Math.random() - 0.5) * 20
                    ]}
                >
                    <sphereGeometry args={[0.02, 8, 8]} />
                    <meshStandardMaterial color="white" emissive="white" emissiveIntensity={5} />
                </mesh>
            ))}
        </group>
      </group>

      <ContactShadows
        position={[0, -2.5, 0]}
        opacity={0.4}
        scale={20}
        blur={2}
        far={4.5}
      />

      {/* Grid helper for that techy look */}
      <gridHelper args={[100, 50, "#222", "#111"]} position={[0, -2.5, 0]} />
    </>
  );
};

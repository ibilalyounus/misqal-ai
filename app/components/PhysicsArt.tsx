"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Float } from "@react-three/drei";
import {
  BallCollider,
  CuboidCollider,
  Physics,
  RapierRigidBody,
  RigidBody,
} from "@react-three/rapier";

import { useMemo, useRef } from "react";
import * as THREE from "three";

const GOLD = "#C6A15B";

function CursorCollider() {
  const cursorRef = useRef<RapierRigidBody>(null);
  const { viewport, pointer } = useThree();

  useFrame(() => {
    if (!cursorRef.current) return;

    cursorRef.current.setNextKinematicTranslation({
      x: pointer.x * viewport.width * 0.5,
      y: pointer.y * viewport.height * 0.5,
      z: 0,
    });
  });

  return (
    <RigidBody
      ref={cursorRef}
      type="kinematicPosition"
      colliders={false}
      position={[0, 0, 0]}
    >
      <BallCollider args={[1.15]} />
      <mesh visible={false}>
        <sphereGeometry args={[1.15, 32, 32]} />
        <meshBasicMaterial color="white" />
      </mesh>
    </RigidBody>
  );
}

function GeometricModule({
  position,
  rotation,
  color,
  scale,
}: {
  position: [number, number, number];
  rotation: [number, number, number];
  color: string;
  scale: number;
}) {
  const bodyRef = useRef<RapierRigidBody>(null);

  useFrame(() => {
    if (!bodyRef.current) return;

    const translation = bodyRef.current.translation();

    // Pull pieces gently back toward center so scene stays composed
    const pull = new THREE.Vector3(
      -translation.x * 0.002,
      -translation.y * 0.002,
      -translation.z * 0.002
    );

    bodyRef.current.applyImpulse(
      {
        x: pull.x,
        y: pull.y,
        z: pull.z,
      },
      true
    );
  });

  return (
    <RigidBody
      ref={bodyRef}
      position={position}
      rotation={rotation}
      linearDamping={2.2}
      angularDamping={2.5}
      restitution={0.75}
      friction={0.2}
      colliders={false}
    >
      {/* two cuboids make an abstract cross/star module */}
      <CuboidCollider args={[0.52 * scale, 0.08 * scale, 0.08 * scale]} />
      <CuboidCollider
        args={[0.08 * scale, 0.52 * scale, 0.08 * scale]}
        rotation={[0, 0, Math.PI / 2]}
      />

      <group scale={scale}>
        <mesh>
          <boxGeometry args={[1.05, 0.16, 0.16]} />
          <meshStandardMaterial
            color={color}
            metalness={0.35}
            roughness={0.28}
            emissive={color}
            emissiveIntensity={color === GOLD ? 0.12 : 0.04}
          />
        </mesh>

        <mesh rotation={[0, 0, Math.PI / 2]}>
          <boxGeometry args={[1.05, 0.16, 0.16]} />
          <meshStandardMaterial
            color={color}
            metalness={0.35}
            roughness={0.28}
            emissive={color}
            emissiveIntensity={color === GOLD ? 0.12 : 0.04}
          />
        </mesh>

        <mesh rotation={[0, 0, Math.PI / 4]}>
          <boxGeometry args={[0.72, 0.09, 0.09]} />
          <meshStandardMaterial
            color="#111111"
            metalness={0.5}
            roughness={0.25}
          />
        </mesh>

        <mesh rotation={[0, 0, -Math.PI / 4]}>
          <boxGeometry args={[0.72, 0.09, 0.09]} />
          <meshStandardMaterial
            color="#111111"
            metalness={0.5}
            roughness={0.25}
          />
        </mesh>

        <mesh>
          <sphereGeometry args={[0.12, 24, 24]} />
          <meshStandardMaterial
            color={GOLD}
            emissive={GOLD}
            emissiveIntensity={0.8}
            roughness={0.2}
          />
        </mesh>
      </group>
    </RigidBody>
  );
}

function SceneObjects() {
  const modules = useMemo(() => {
    return Array.from({ length: 36 }, (_, index) => {
      const angle = (index / 36) * Math.PI * 2;
      const radius = 1.2 + Math.random() * 4.2;

      return {
        id: index,
        position: [
          Math.cos(angle) * radius,
          Math.sin(angle) * radius * 0.62,
          (Math.random() - 0.5) * 2.6,
        ] as [number, number, number],
        rotation: [
          Math.random() * Math.PI,
          Math.random() * Math.PI,
          Math.random() * Math.PI,
        ] as [number, number, number],
        color:
          index % 5 === 0
            ? GOLD
            : index % 5 === 1
            ? "#0F766E"
            : index % 5 === 2
            ? "#F5F1E8"
            : "#111111",
        scale: 0.55 + Math.random() * 0.45,
      };
    });
  }, []);

  return (
    <>
      {modules.map((module) => (
        <GeometricModule
          key={module.id}
          position={module.position}
          rotation={module.rotation}
          color={module.color}
          scale={module.scale}
        />
      ))}
    </>
  );
}
function CrescentMoon() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;

    const time = state.clock.elapsedTime;
    groupRef.current.rotation.z = Math.sin(time * 0.4) * 0.08;
    groupRef.current.rotation.y = Math.sin(time * 0.25) * 0.2;
    groupRef.current.position.y = Math.sin(time * 0.7) * 0.08;
  });

  return (
    <group ref={groupRef} position={[-2.65, 1.65, -0.4]} scale={0.95}>
      {/* gold disk */}
      <mesh>
        <circleGeometry args={[0.62, 72]} />
        <meshBasicMaterial color={GOLD} transparent opacity={0.88} />
      </mesh>

      {/* dark cutout creates crescent */}
      <mesh position={[0.26, 0.04, 0.01]}>
        <circleGeometry args={[0.58, 72]} />
        <meshBasicMaterial color="#050505" />
      </mesh>

      {/* soft glow */}
      <mesh position={[-0.08, 0, -0.02]} scale={1.35}>
        <circleGeometry args={[0.62, 72]} />
        <meshBasicMaterial color={GOLD} transparent opacity={0.08} />
      </mesh>
    </group>
  );
}

function EightPointStar({
  position,
  scale = 1,
  opacity = 0.55,
}: {
  position: [number, number, number];
  scale?: number;
  opacity?: number;
}) {
  const shape = useMemo(() => {
    const star = new THREE.Shape();
    const points = 16;
    const outerRadius = 0.55;
    const innerRadius = 0.24;

    for (let i = 0; i <= points; i++) {
      const radius = i % 2 === 0 ? outerRadius : innerRadius;
      const angle = (i / points) * Math.PI * 2 - Math.PI / 2;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;

      if (i === 0) star.moveTo(x, y);
      else star.lineTo(x, y);
    }

    return star;
  }, []);

  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;

    const time = state.clock.elapsedTime;
    ref.current.rotation.z = time * 0.08;
    ref.current.rotation.y = Math.sin(time * 0.3) * 0.22;
  });

  return (
    <mesh ref={ref} position={position} scale={scale}>
      <shapeGeometry args={[shape]} />
      <meshBasicMaterial
        color={GOLD}
        transparent
        opacity={opacity}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

function IslamicSymbolLayer() {
  return (
    <group>
      <CrescentMoon />

      <EightPointStar position={[2.7, 1.5, -0.7]} scale={0.72} opacity={0.42} />
      <EightPointStar position={[-3.15, -1.55, -1.1]} scale={0.48} opacity={0.32} />
      <EightPointStar position={[2.95, -1.8, -0.9]} scale={0.42} opacity={0.28} />

      {/* subtle celestial path */}
      <mesh rotation={[0, 0, 0.35]} position={[0, 0, -1.4]}>
        <torusGeometry args={[3.25, 0.006, 16, 240]} />
        <meshBasicMaterial color={GOLD} transparent opacity={0.18} />
      </mesh>

      <mesh rotation={[0, 0, -0.45]} position={[0, 0, -1.55]}>
        <torusGeometry args={[3.85, 0.005, 16, 240]} />
        <meshBasicMaterial color="#F5F1E8" transparent opacity={0.08} />
      </mesh>
    </group>
  );
}


function CentralAstrolabe() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;

    const time = state.clock.elapsedTime;

    groupRef.current.rotation.x = Math.sin(time * 0.25) * 0.18;
    groupRef.current.rotation.y = time * 0.12;
    groupRef.current.rotation.z = Math.sin(time * 0.18) * 0.12;
  });

  return (
    <Float speed={1.2} floatIntensity={0.25} rotationIntensity={0.25}>
      <group ref={groupRef}>
        <mesh>
          <torusGeometry args={[2.1, 0.018, 24, 220]} />
          <meshBasicMaterial color={GOLD} transparent opacity={0.5} />
        </mesh>

        <mesh rotation={[Math.PI / 2.5, 0, 0]}>
          <torusGeometry args={[1.45, 0.014, 24, 180]} />
          <meshBasicMaterial color="#F5F1E8" transparent opacity={0.22} />
        </mesh>

        <mesh rotation={[0, Math.PI / 2.8, 0]}>
          <torusGeometry args={[1.1, 0.012, 24, 180]} />
          <meshBasicMaterial color="#0F766E" transparent opacity={0.42} />
        </mesh>

        <mesh rotation={[0.5, 0.2, 0.7]}>
          <octahedronGeometry args={[0.75, 0]} />
          <meshBasicMaterial color={GOLD} wireframe transparent opacity={0.75} />
        </mesh>
      </group>
    </Float>
  );
}

export default function PhysicsArt({
  sunProgress = 0,
}: {
  sunProgress?: number;
}) {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#050505]">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 46 }}
        dpr={[1, 1.6]}
        gl={{ antialias: true, alpha: false }}
      >
        <color attach="background" args={["#050505"]} />

        <ambientLight intensity={0.65} />
        <directionalLight position={[4, 6, 5]} intensity={2.1} />
        <pointLight position={[-4, -2, 4]} intensity={2.5} color={GOLD} />
        <pointLight position={[4, 2, -3]} intensity={1.6} color="#0F766E" />

        <Physics gravity={[0, 0, 0]} timeStep="vary">
          <CursorCollider />
          <SceneObjects />
        </Physics>

       <IslamicSymbolLayer />

        <Environment preset="city" />

      </Canvas>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,transparent_42%,rgba(5,5,5,0.35)_70%,#050505_100%)]" />
    </div>
  );
}
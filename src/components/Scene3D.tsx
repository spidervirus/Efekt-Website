import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, PerspectiveCamera } from '@react-three/drei'
import AcousticPanel3D from './AcousticPanel3D'
import * as THREE from 'three'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

interface Scene3DProps {
  className?: string
  interactive?: boolean
}

export default function Scene3D({ className = "", interactive = true }: Scene3DProps) {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas shadows>
        <Suspense fallback={null}>
          {/* Camera */}
          <PerspectiveCamera makeDefault position={[5, 2, 5]} fov={45} />
          
          {/* Lighting */}
          <ambientLight intensity={0.4} />
          <directionalLight
            position={[10, 10, 5]}
            intensity={0.8}
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
          />
          <pointLight position={[-10, -10, -10]} intensity={0.3} color="#f5f1eb" />
          
          {/* Environment */}
          <Environment preset="studio" />
          
          {/* Acoustic Panels */}
          <AcousticPanel3D 
            position={[0, 0, 0]} 
            rotation={[0, 0.2, 0]}
            pattern="geometric"
            color="#d4c5b0"
          />
          <AcousticPanel3D 
            position={[-3, 1, -1]} 
            rotation={[0, -0.3, 0]}
            pattern="linear"
            color="#c8b89f"
            scale={0.8}
          />
          <AcousticPanel3D 
            position={[3, -0.5, -2]} 
            rotation={[0, 0.5, 0]}
            pattern="hexagon"
            color="#ddd0c1"
            scale={0.9}
          />
          {/* Background panels for depth */}
          <AcousticPanel3D 
            position={[0, 2, -4]} 
            rotation={[0, 0, 0]}
            pattern="geometric"
            color="#e8ddd2"
            scale={1.2}
          />
          <AcousticPanel3D 
            position={[-4, -1, -3]} 
            rotation={[0, 0.8, 0]}
            pattern="linear"
            color="#cfc0b1"
            scale={0.7}
          />

          {/* Subtle 3D Elements - Reduced and more subtle */}
          {/* Single floating sphere - smaller and more subtle */}
          <mesh position={[2, 2.5, 1]} castShadow receiveShadow>
            <sphereGeometry args={[0.15, 32, 32]} />
            <meshStandardMaterial color="#7dd3fc" metalness={0.5} roughness={0.2} transparent opacity={0.6} />
          </mesh>
          
          {/* Rotating Torus - smaller and more subtle */}
          <RotatingTorus position={[-2, 0.5, -2]} color="#f472b6" />

          {/* Controls */}
          {interactive && (
            <OrbitControls
              enablePan={false}
              enableZoom={false}
              enableRotate={true}
              autoRotate={true}
              autoRotateSpeed={0.3}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 4}
            />
          )}
        </Suspense>
      </Canvas>
    </div>
  )
}

// Rotating Torus component - smaller size
function RotatingTorus({ position, color }: { position: [number, number, number], color: string }) {
  const ref = useRef<THREE.Mesh>(null)
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x += 0.008
      ref.current.rotation.y += 0.01
    }
  })
  return (
    <mesh ref={ref} position={position} castShadow receiveShadow>
      <torusGeometry args={[0.2, 0.05, 16, 100]} />
      <meshStandardMaterial color={color} metalness={0.6} roughness={0.25} transparent opacity={0.5} />
    </mesh>
  )
}
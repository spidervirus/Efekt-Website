import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { RoundedBox, Text } from '@react-three/drei'
import * as THREE from 'three'

interface AcousticPanel3DProps {
  position: [number, number, number]
  rotation?: [number, number, number]
  color?: string
  scale?: number
  pattern?: 'geometric' | 'linear' | 'hexagon'
}

export default function AcousticPanel3D({ 
  position, 
  rotation = [0, 0, 0], 
  color = "#d4c5b0", 
  scale = 1,
  pattern = 'geometric'
}: AcousticPanel3DProps) {
  const meshRef = useRef<THREE.Group>(null)
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.02
    }
  })

  const PatternComponent = () => {
    switch (pattern) {
      case 'geometric':
        return (
          <group>
            {Array.from({ length: 8 }, (_, i) => (
              <RoundedBox
                key={i}
                position={[
                  (i % 3 - 1) * 0.3,
                  (Math.floor(i / 3) - 1) * 0.3,
                  0.01
                ]}
                args={[0.2, 0.2, 0.02]}
                radius={0.02}
                smoothness={4}
              >
                <meshStandardMaterial 
                  color={hovered ? "#c4b59d" : "#e5d6c1"} 
                  roughness={0.8}
                  metalness={0.1}
                />
              </RoundedBox>
            ))}
          </group>
        )
      case 'linear':
        return (
          <group>
            {Array.from({ length: 12 }, (_, i) => (
              <RoundedBox
                key={i}
                position={[
                  (i % 4 - 1.5) * 0.2,
                  (Math.floor(i / 4) - 1) * 0.3,
                  0.01
                ]}
                args={[0.15, 0.8, 0.02]}
                radius={0.01}
                smoothness={4}
              >
                <meshStandardMaterial 
                  color={hovered ? "#c4b59d" : "#e5d6c1"} 
                  roughness={0.8}
                  metalness={0.1}
                />
              </RoundedBox>
            ))}
          </group>
        )
      case 'hexagon':
        return (
          <group>
            {Array.from({ length: 7 }, (_, i) => {
              const angle = (i / 6) * Math.PI * 2
              const radius = i === 0 ? 0 : 0.3
              return (
                <mesh
                  key={i}
                  position={[
                    Math.cos(angle) * radius,
                    Math.sin(angle) * radius,
                    0.01
                  ]}
                >
                  <cylinderGeometry args={[0.1, 0.1, 0.02, 6]} />
                  <meshStandardMaterial 
                    color={hovered ? "#c4b59d" : "#e5d6c1"} 
                    roughness={0.8}
                    metalness={0.1}
                  />
                </mesh>
              )
            })}
          </group>
        )
      default:
        return null
    }
  }

  return (
    <group
      ref={meshRef}
      position={position}
      rotation={rotation}
      scale={scale}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* Main panel base */}
      <RoundedBox args={[2, 2, 0.1]} radius={0.05} smoothness={4}>
        <meshStandardMaterial 
          color={hovered ? "#b8a890" : color} 
          roughness={0.9}
          metalness={0.05}
        />
      </RoundedBox>
      
      {/* Pattern overlay */}
      <PatternComponent />
      
      {/* Subtle glow effect when hovered */}
      {hovered && (
        <pointLight
          position={[0, 0, 0.5]}
          intensity={0.5}
          distance={3}
          color="#f5f1eb"
        />
      )}
    </group>
  )
}
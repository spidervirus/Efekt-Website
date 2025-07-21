import { Canvas, useFrame } from '@react-three/fiber';
import { useMemo, useState, useRef } from 'react';
import * as THREE from 'three';

// Interactive Frequency Controls Component
function FrequencyControls({ onFrequencyChange }: { onFrequencyChange: (freq: number) => void }) {
  const [frequency, setFrequency] = useState(2);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFreq = parseFloat(e.target.value);
    setFrequency(newFreq);
    onFrequencyChange(newFreq);
  };

  return (
    <div className="absolute top-20 left-4 bg-background/90 backdrop-blur-md rounded-lg p-3 border shadow-lg z-30">
      <h3 className="text-xs font-semibold mb-1 text-foreground">Frequency</h3>
      <input
        type="range"
        min="0.5"
        max="5"
        step="0.1"
        value={frequency}
        onChange={handleChange}
        className="w-20 h-1 bg-muted rounded-lg appearance-none cursor-pointer"
      />
      <div className="text-xs text-muted-foreground mt-1">{frequency.toFixed(1)} Hz</div>
    </div>
  );
}

// Wave Type Selector Component
function WaveTypeSelector({ waveType, onWaveTypeChange }: { 
  waveType: 'sine' | 'square' | 'triangle' | 'complex',
  onWaveTypeChange: (type: 'sine' | 'square' | 'triangle' | 'complex') => void 
}) {
  return (
    <div className="absolute top-20 right-4 bg-background/90 backdrop-blur-md rounded-lg p-3 border shadow-lg z-30">
      <h3 className="text-xs font-semibold mb-1 text-foreground">Wave Type</h3>
      <div className="space-y-1">
        {(['sine', 'square', 'triangle', 'complex'] as const).map((type) => (
          <button
            key={type}
            onClick={() => onWaveTypeChange(type)}
            className={`block w-full text-left px-2 py-1 rounded text-xs transition ${
              waveType === type
                ? 'bg-primary text-primary-foreground'
                : 'text-muted-foreground hover:bg-muted/80'
            }`}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
}

// Advanced Animated Wave with Frequency Control
function AdvancedWave({ 
  amplitude = 0.5, 
  frequency = 2, 
  color = '#38bdf8', 
  segments = 120,
  zOffset = 0,
  glowIntensity = 0.3,
  waveType = 'sine'
}) {
  const line = useMemo(() => {
    const points = [];
    for (let i = 0; i < segments; i++) {
      const x = (i / (segments - 1)) * 8 - 4;
      points.push(new THREE.Vector3(x, 0, zOffset));
    }
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    
    const material = new THREE.LineBasicMaterial({ 
      color, 
      linewidth: 2,
      transparent: true,
      opacity: 0.8
    });
    
    return new THREE.Line(geometry, material);
  }, [segments, color, zOffset]);

  const glowLine = useMemo(() => {
    const points = [];
    for (let i = 0; i < segments; i++) {
      const x = (i / (segments - 1)) * 8 - 4;
      points.push(new THREE.Vector3(x, 0, zOffset));
    }
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const material = new THREE.LineBasicMaterial({ 
      color, 
      linewidth: 6,
      transparent: true,
      opacity: glowIntensity
    });
    return new THREE.Line(geometry, material);
  }, [segments, color, zOffset, glowIntensity]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const geometry = line.geometry;
    const glowGeometry = glowLine.geometry;
    const pos = geometry.attributes.position;
    const glowPos = glowGeometry.attributes.position;
    
    for (let i = 0; i < segments; i++) {
      const x = (i / (segments - 1)) * 8 - 4;
      let y;
      
      switch (waveType) {
        case 'sine':
          y = Math.sin(frequency * x + t * 1.5) * amplitude * Math.cos(t * 0.5 + x);
          break;
        case 'square':
          y = Math.sign(Math.sin(frequency * x + t * 1.5)) * amplitude * 0.5;
          break;
        case 'triangle':
          y = (2 * amplitude / Math.PI) * Math.asin(Math.sin(frequency * x + t * 1.5));
          break;
        case 'complex':
          y = Math.sin(frequency * x + t * 1.5) * amplitude * 
              Math.cos(t * 0.5 + x) * 
              (1 + 0.3 * Math.sin(t * 2 + x * 2));
          break;
        default:
          y = Math.sin(frequency * x + t * 1.5) * amplitude * Math.cos(t * 0.5 + x);
      }
      
      pos.setY(i, y);
      glowPos.setY(i, y);
    }
    pos.needsUpdate = true;
    glowPos.needsUpdate = true;
  });

  return (
    <>
      <primitive object={glowLine} />
      <primitive object={line} />
    </>
  );
}

// Particle System for Sound Waves
function SoundParticles({ count = 30, color = '#38bdf8' }) {
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const time = Math.random() * Math.PI * 2;
      const speed = 0.1 + Math.random() * 0.3;
      temp.push({ 
        time, 
        speed, 
        x: (Math.random() - 0.5) * 8, 
        y: (Math.random() - 0.5) * 4, 
        z: (Math.random() - 0.5) * 4 
      });
    }
    return temp;
  }, [count]);

  const meshRef = useRef<THREE.InstancedMesh>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    
    if (meshRef.current) {
      const matrix = new THREE.Matrix4();
      
      particles.forEach((particle, i) => {
        const x = particle.x + Math.sin(t * particle.speed + particle.time) * 0.5;
        const y = particle.y + Math.cos(t * particle.speed + particle.time) * 0.5;
        const z = particle.z + Math.sin(t * particle.speed * 0.5 + particle.time) * 0.3;
        
        matrix.setPosition(x, y, z);
        meshRef.current!.setMatrixAt(i, matrix);
      });
      
      meshRef.current.instanceMatrix.needsUpdate = true;
    }
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <sphereGeometry args={[0.015, 8, 8]} />
      <meshBasicMaterial color={color} transparent opacity={0.4} />
    </instancedMesh>
  );
}

// Enhanced Color Animated Wave
function ColorAnimatedWave({ 
  amplitude = 0.5, 
  frequency = 2, 
  baseColor = '#38bdf8', 
  segments = 120,
  zOffset = 0,
  glowIntensity = 0.3,
  waveType = 'sine'
}) {
  const line = useMemo(() => {
    const points = [];
    for (let i = 0; i < segments; i++) {
      const x = (i / (segments - 1)) * 8 - 4;
      points.push(new THREE.Vector3(x, 0, zOffset));
    }
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const material = new THREE.LineBasicMaterial({ 
      color: baseColor, 
      linewidth: 2,
      transparent: true,
      opacity: 0.8
    });
    return new THREE.Line(geometry, material);
  }, [segments, baseColor, zOffset]);

  const glowLine = useMemo(() => {
    const points = [];
    for (let i = 0; i < segments; i++) {
      const x = (i / (segments - 1)) * 8 - 4;
      points.push(new THREE.Vector3(x, 0, zOffset));
    }
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const material = new THREE.LineBasicMaterial({ 
      color: baseColor, 
      linewidth: 6,
      transparent: true,
      opacity: glowIntensity
    });
    return new THREE.Line(geometry, material);
  }, [segments, baseColor, zOffset, glowIntensity]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const geometry = line.geometry;
    const glowGeometry = glowLine.geometry;
    const pos = geometry.attributes.position;
    const glowPos = glowGeometry.attributes.position;
    
    // Animate color
    const hue = (t * 0.1) % 1;
    const color = new THREE.Color().setHSL(hue, 0.8, 0.6);
    line.material.color = color;
    glowLine.material.color = color;
    
    for (let i = 0; i < segments; i++) {
      const x = (i / (segments - 1)) * 8 - 4;
      let y;
      
      switch (waveType) {
        case 'sine':
          y = Math.sin(frequency * x + t * 1.5) * amplitude * Math.cos(t * 0.5 + x);
          break;
        case 'square':
          y = Math.sign(Math.sin(frequency * x + t * 1.5)) * amplitude * 0.5;
          break;
        case 'triangle':
          y = (2 * amplitude / Math.PI) * Math.asin(Math.sin(frequency * x + t * 1.5));
          break;
        case 'complex':
          y = Math.sin(frequency * x + t * 1.5) * amplitude * 
              Math.cos(t * 0.5 + x) * 
              (1 + 0.3 * Math.sin(t * 2 + x * 2));
          break;
        default:
          y = Math.sin(frequency * x + t * 1.5) * amplitude * Math.cos(t * 0.5 + x);
      }
      
      pos.setY(i, y);
      glowPos.setY(i, y);
    }
    pos.needsUpdate = true;
    glowPos.needsUpdate = true;
  });

  return (
    <>
      <primitive object={glowLine} />
      <primitive object={line} />
    </>
  );
}

// Main Advanced Sound Wave Component
export default function SoundWave3D({ className = "", style = {} }) {
  const [frequency, setFrequency] = useState(2);
  const [waveType, setWaveType] = useState<'sine' | 'square' | 'triangle' | 'complex'>('sine');

  return (
    <div className={`w-full h-full absolute inset-0 ${className}`} style={style}>
      <Canvas camera={{ position: [0, 0, 7], fov: 50 }}>
        <ambientLight intensity={0.5} />
        
        {/* Advanced Waves with Different Types */}
        <AdvancedWave 
          amplitude={0.5} 
          frequency={frequency} 
          color="#38bdf8" 
          segments={120} 
          zOffset={0} 
          glowIntensity={0.4}
          waveType={waveType}
        />
        <AdvancedWave 
          amplitude={0.25} 
          frequency={frequency * 1.6} 
          color="#0ea5e9" 
          segments={120} 
          zOffset={-1} 
          glowIntensity={0.3}
          waveType={waveType}
        />
        <AdvancedWave 
          amplitude={0.4} 
          frequency={frequency * 0.9} 
          color="#0284c7" 
          segments={120} 
          zOffset={1} 
          glowIntensity={0.2}
          waveType={waveType}
        />
        
        {/* Particle System */}
        <SoundParticles count={20} color="#38bdf8" />
        <SoundParticles count={15} color="#0ea5e9" />
        
        {/* Color Animated Waves */}
        <ColorAnimatedWave 
          amplitude={0.3} 
          frequency={frequency * 1.25} 
          baseColor="#06b6d4" 
          segments={120} 
          zOffset={-0.5} 
          glowIntensity={0.25}
          waveType={waveType}
        />
        <ColorAnimatedWave 
          amplitude={0.35} 
          frequency={frequency * 0.75} 
          baseColor="#0891b2" 
          segments={120} 
          zOffset={0.5} 
          glowIntensity={0.2}
          waveType={waveType}
        />
      </Canvas>
      
      {/* Interactive Controls - Fixed Positioning */}
      <div className="pointer-events-auto">
        <FrequencyControls onFrequencyChange={setFrequency} />
        <WaveTypeSelector waveType={waveType} onWaveTypeChange={setWaveType} />
      </div>
    </div>
  );
} 
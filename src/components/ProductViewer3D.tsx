import { Suspense, useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Environment, PerspectiveCamera, Text } from '@react-three/drei'
import * as THREE from 'three'

// Product data
const panelTypes = [
  {
    id: 'wall-panel',
    name: 'Wall Panel',
    description: 'Slim, stylish, and built to absorb sound — ideal for offices, bedrooms, and studios.',
    specs: {
      thickness: '25mm',
      coverage: '2.4m²',
      absorption: '0.85 NRC',
      weight: '3.2kg'
    },
    colors: ['#d4c5b0', '#c8b89f', '#ddd0c1', '#e8ddd2'],
    patterns: ['geometric', 'linear', 'hexagon', 'dots']
  },
  {
    id: 'ceiling-panel',
    name: 'Ceiling Panel',
    description: 'Discreet overhead panels that drastically reduce echo in large or open spaces.',
    specs: {
      thickness: '30mm',
      coverage: '3.0m²',
      absorption: '0.90 NRC',
      weight: '4.1kg'
    },
    colors: ['#f5f5f4', '#e7e5e4', '#d6d3d1', '#a8a29e'],
    patterns: ['linear', 'geometric', 'hexagon', 'dots']
  },
  {
    id: 'office-panel',
    name: 'Office Sound Panel',
    description: 'Tailored acoustic systems for corporate settings with branding-friendly finishes.',
    specs: {
      thickness: '35mm',
      coverage: '2.8m²',
      absorption: '0.88 NRC',
      weight: '3.8kg'
    },
    colors: ['#1e40af', '#1d4ed8', '#2563eb', '#3b82f6'],
    patterns: ['linear', 'geometric', 'custom', 'dots']
  },
  {
    id: 'custom-panel',
    name: 'Custom Design',
    description: 'You choose the shape, size, color, and material. We deliver a solution that fits — acoustically and visually.',
    specs: {
      thickness: 'Variable',
      coverage: 'Custom',
      absorption: '0.85+ NRC',
      weight: 'Variable'
    },
    colors: ['#ef4444', '#f97316', '#eab308', '#22c55e'],
    patterns: ['custom', 'geometric', 'linear', 'hexagon']
  }
]

// 3D Acoustic Panel Component
function AcousticPanel3D({ 
  type = 'wall-panel', 
  color = '#d4c5b0', 
  pattern = 'geometric',
  scale = 1,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  interactive = true,
  onPanelClick = null
}) {
  const meshRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)

  // Create pattern texture
  const createPatternTexture = (patternType: string, color: string) => {
    const canvas = document.createElement('canvas')
    canvas.width = 256
    canvas.height = 256
    const ctx = canvas.getContext('2d')!
    
    ctx.fillStyle = color
    ctx.fillRect(0, 0, 256, 256)
    
    ctx.strokeStyle = '#ffffff'
    ctx.lineWidth = 2
    ctx.globalAlpha = 0.1
    
    switch (patternType) {
      case 'geometric':
        // Geometric pattern
        for (let i = 0; i < 8; i++) {
          for (let j = 0; j < 8; j++) {
            ctx.beginPath()
            ctx.rect(i * 32, j * 32, 32, 32)
            ctx.stroke()
          }
        }
        break
      case 'linear':
        // Linear pattern
        for (let i = 0; i < 16; i++) {
          ctx.beginPath()
          ctx.moveTo(0, i * 16)
          ctx.lineTo(256, i * 16)
          ctx.stroke()
        }
        break
      case 'hexagon':
        // Hexagon pattern
        const size = 20
        for (let i = 0; i < 12; i++) {
          for (let j = 0; j < 12; j++) {
            const x = i * size * 1.5
            const y = j * size * 1.3 + (i % 2) * size * 0.65
            drawHexagon(ctx, x, y, size)
          }
        }
        break
      case 'dots':
        // Dots pattern
        for (let i = 0; i < 16; i++) {
          for (let j = 0; j < 16; j++) {
            ctx.beginPath()
            ctx.arc(i * 16 + 8, j * 16 + 8, 2, 0, Math.PI * 2)
            ctx.fill()
          }
        }
        break
    }
    
    const texture = new THREE.CanvasTexture(canvas)
    texture.wrapS = THREE.RepeatWrapping
    texture.wrapT = THREE.RepeatWrapping
    texture.repeat.set(4, 4)
    return texture
  }

  const drawHexagon = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number) => {
    ctx.beginPath()
    for (let i = 0; i < 6; i++) {
      const angle = (i * Math.PI) / 3
      const px = x + size * Math.cos(angle)
      const py = y + size * Math.sin(angle)
      if (i === 0) ctx.moveTo(px, py)
      else ctx.lineTo(px, py)
    }
    ctx.closePath()
    ctx.stroke()
  }

  const texture = createPatternTexture(pattern, color)
  const material = new THREE.MeshStandardMaterial({
    map: texture,
    roughness: 0.8,
    metalness: 0.1,
    color: color
  })

  useFrame(() => {
    if (meshRef.current && hovered) {
      meshRef.current.rotation.y += 0.01
    }
  })

  const handleClick = () => {
    if (onPanelClick) {
      onPanelClick({ type, color, pattern })
    }
  }

  return (
    <mesh
      ref={meshRef}
      position={position}
      rotation={rotation}
      scale={scale}
      material={material}
      castShadow
      receiveShadow
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={handleClick}
    >
      <boxGeometry args={[2, 0.05, 1.2]} />
    </mesh>
  )
}

// Product Viewer Scene
function ProductViewerScene({ 
  selectedPanel, 
  selectedColor, 
  selectedPattern,
  onPanelClick 
}: {
  selectedPanel: string
  selectedColor: string
  selectedPattern: string
  onPanelClick: (data: any) => void
}) {
  const panelData = panelTypes.find(p => p.id === selectedPanel) || panelTypes[0]

  return (
    <>
      {/* Camera */}
      <PerspectiveCamera makeDefault position={[3, 2, 3]} fov={45} />
      
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
      
      {/* Main Panel */}
      <AcousticPanel3D
        type={selectedPanel}
        color={selectedColor}
        pattern={selectedPattern}
        position={[0, 0, 0]}
        rotation={[0, 0.2, 0]}
        scale={1.2}
        onPanelClick={onPanelClick}
      />
      
      {/* Background Panels */}
      <AcousticPanel3D
        type={selectedPanel}
        color={selectedColor}
        pattern={selectedPattern}
        position={[-2.5, 0.5, -1]}
        rotation={[0, -0.3, 0]}
        scale={0.8}
        interactive={false}
      />
      <AcousticPanel3D
        type={selectedPanel}
        color={selectedColor}
        pattern={selectedPattern}
        position={[2.5, -0.3, -1.5]}
        rotation={[0, 0.4, 0]}
        scale={0.9}
        interactive={false}
      />
      
      {/* Product Info */}
      <Text
        position={[0, 1.5, 0]}
        fontSize={0.2}
        color="#374151"
        anchorX="center"
        anchorY="middle"
      >
        {panelData.name}
      </Text>
    </>
  )
}

// Main Product Viewer Component
export default function ProductViewer3D() {
  const [selectedPanel, setSelectedPanel] = useState('wall-panel')
  const [selectedColor, setSelectedColor] = useState('#d4c5b0')
  const [selectedPattern, setSelectedPattern] = useState('geometric')
  const [showSpecs, setShowSpecs] = useState(false)

  const panelData = panelTypes.find(p => p.id === selectedPanel) || panelTypes[0]

  const handlePanelClick = (data: any) => {
    setShowSpecs(true)
    // Auto-hide specs after 3 seconds
    setTimeout(() => setShowSpecs(false), 3000)
  }

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Explore Our Acoustic Panels</h2>
          <p className="text-xl text-muted-foreground">Interact with our 3D models to see the perfect solution for your space</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 3D Viewer */}
          <div className="lg:col-span-2">
            <div className="relative h-96 bg-gradient-to-br from-muted/20 to-muted/40 rounded-2xl overflow-hidden">
              <Canvas shadows>
                <Suspense fallback={null}>
                  <ProductViewerScene
                    selectedPanel={selectedPanel}
                    selectedColor={selectedColor}
                    selectedPattern={selectedPattern}
                    onPanelClick={handlePanelClick}
                  />
                  <OrbitControls
                    enablePan={true}
                    enableZoom={true}
                    enableRotate={true}
                    autoRotate={false}
                    maxDistance={10}
                    minDistance={2}
                  />
                </Suspense>
              </Canvas>
              
              {/* Controls Overlay */}
              <div className="absolute bottom-4 left-4 right-4 flex justify-center gap-2">
                <button
                  onClick={() => setShowSpecs(!showSpecs)}
                  className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition"
                >
                  {showSpecs ? 'Hide' : 'Show'} Specs
                </button>
              </div>
            </div>
          </div>

          {/* Controls Panel */}
          <div className="space-y-6">
            {/* Panel Type Selector */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Panel Type</h3>
              <div className="space-y-2">
                {panelTypes.map((panel) => (
                  <button
                    key={panel.id}
                    onClick={() => {
                      setSelectedPanel(panel.id)
                      setSelectedColor(panel.colors[0])
                      setSelectedPattern(panel.patterns[0])
                    }}
                    className={`w-full text-left p-3 rounded-lg transition ${
                      selectedPanel === panel.id
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted hover:bg-muted/80'
                    }`}
                  >
                    <div className="font-medium">{panel.name}</div>
                    <div className="text-sm opacity-80">{panel.description}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selector */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Color</h3>
              <div className="flex flex-wrap gap-2">
                {panelData.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 rounded-full border-2 transition ${
                      selectedColor === color ? 'border-primary scale-110' : 'border-muted'
                    }`}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>

            {/* Pattern Selector */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Pattern</h3>
              <div className="grid grid-cols-2 gap-2">
                {panelData.patterns.map((pattern) => (
                  <button
                    key={pattern}
                    onClick={() => setSelectedPattern(pattern)}
                    className={`p-2 rounded-lg text-sm transition ${
                      selectedPattern === pattern
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted hover:bg-muted/80'
                    }`}
                  >
                    {pattern.charAt(0).toUpperCase() + pattern.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Specs Panel */}
            {showSpecs && (
              <div className="bg-background/80 backdrop-blur-sm rounded-lg p-4 border">
                <h3 className="text-lg font-semibold mb-3">Specifications</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Thickness:</span>
                    <span className="font-medium">{panelData.specs.thickness}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Coverage:</span>
                    <span className="font-medium">{panelData.specs.coverage}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Absorption:</span>
                    <span className="font-medium">{panelData.specs.absorption}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Weight:</span>
                    <span className="font-medium">{panelData.specs.weight}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
} 
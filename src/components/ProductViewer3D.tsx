import { Suspense, useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Environment, PerspectiveCamera, Text } from '@react-three/drei'
import * as THREE from 'three'

// Product data
const panelTypes = [
  {
    id: 'panels',
    name: 'Panels',
    description: 'High-quality acoustic panels designed to absorb sound and enhance your space aesthetically.',
    specs: {
      thickness: '25-35mm',
      coverage: '2.4-3.0m²',
      absorption: '0.85-0.90 NRC',
      weight: '3.2-4.1kg'
    },
    colors: ['#d4c5b0', '#c8b89f', '#ddd0c1', '#e8ddd2', '#8b7355', '#a0956b', '#f5f5f4', '#e7e5e4', '#d6d3d1', '#a8a29e', '#6b7280', '#374151']
  },
  {
    id: 'custom-design',
    name: 'Custom Design',
    description: 'You choose the shape, size, color, and material. We deliver a solution that fits — acoustically and visually.',
    specs: {
      thickness: 'Variable',
      coverage: 'Custom',
      absorption: '0.85+ NRC',
      weight: 'Variable'
    },
    colors: ['#ef4444', '#f97316', '#eab308', '#22c55e', '#3b82f6', '#8b5cf6', '#ec4899', '#06b6d4', '#10b981', '#f59e0b', '#84cc16', '#6366f1']
  }
]

// 3D Acoustic Panel Component
function AcousticPanel3D({ 
  type = 'panels', 
  color = '#d4c5b0', 
  scale = 1,
  position = [0, 0, 0] as [number, number, number],
  rotation = [0, 0, 0] as [number, number, number],
  interactive = true,
  onPanelClick = null
}) {
  const meshRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)

  const material = new THREE.MeshStandardMaterial({
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
      onPanelClick({ type, color })
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
  onPanelClick 
}: {
  selectedPanel: string
  selectedColor: string
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
        position={[0, 0, 0]}
        rotation={[0, 0.2, 0]}
        scale={1.2}
        onPanelClick={onPanelClick}
      />
      
      {/* Background Panels */}
      <AcousticPanel3D
        type={selectedPanel}
        color={selectedColor}
        position={[-2.5, 0.5, -1]}
        rotation={[0, -0.3, 0]}
        scale={0.8}
        interactive={false}
      />
      <AcousticPanel3D
        type={selectedPanel}
        color={selectedColor}
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
  const [selectedPanel, setSelectedPanel] = useState('panels')
  const [selectedColor, setSelectedColor] = useState('#d4c5b0')
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
                    onPanelClick={handlePanelClick}
                  />
                  <OrbitControls />
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
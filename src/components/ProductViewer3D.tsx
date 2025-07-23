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
    colors: ['#f5f5dc', '#000000', '#0000ff', '#ffffff'] // cream, black, blue, white
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
    colors: [] // No colors for custom design
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
  const [selectedColor, setSelectedColor] = useState('#f5f5dc') // cream color
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

            {/* Color Selector - Only show for panels, not custom design */}
            {selectedPanel === 'panels' && (
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
            )}



            {/* Custom Design Enquire Button */}
            {selectedPanel === 'custom-design' && (
              <div className="bg-background/80 backdrop-blur-sm rounded-lg p-4 border">
                <h3 className="text-lg font-semibold mb-3">Ready to Create Your Custom Design?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Get in touch with our experts to discuss your specific requirements and create the perfect acoustic solution for your space.
                </p>
                <a
                  href="https://wa.me/+971585917985?text=Hi%2C%20I%27m%20interested%20in%20custom%20acoustic%20panel%20design.%20Can%20you%20help%20me%20with%20my%20project%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-4 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition-colors duration-200"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  Enquire on WhatsApp
                </a>
              </div>
            )}

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
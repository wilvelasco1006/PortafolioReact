import { Suspense, useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import '../models-3d/Facebook';
import '../models-3d/Instagram';
import '../models-3d/Twiter';
import '../models-3d/Linkdin';
import '../models-3d/Github';
import '../models-3d/Gmail';

import './SocialCanvas.css';
import { ModelGithub } from '../models-3d/Github';
import { ModelTwiter } from '../models-3d/Twiter';
import { ModelInstagram } from '../models-3d/Instagram';
import { ModelFacebook } from '../models-3d/Facebook';
import { ModelGmail } from '../models-3d/Gmail';
import { ModelLinkedin } from '../models-3d/Linkdin';

// Componente de iluminación
const Lighting = () => (
    <>
        <ambientLight intensity={0.6} />
        <directionalLight position={[0, 5, 5]} intensity={1} />
        <pointLight position={[0, -5, 5]} intensity={0.5} />
    </>
);
// Wrapper para animación de modelo
const FloatingModel = ({
    children,
    position,
    hover,
    onClick,
    onPointerOver,
    onPointerOut,
}) => {
    const ref = useRef();

    // Animación flotante suave
    useFrame(state => {
        const t = state.clock.getElapsedTime();
        ref.current.position.y = position[1] + Math.sin(t * 0.8) * 0.1;
    });

    return (
        <group
            ref={ref}
            position={position}
            scale={hover ? 1.2 : 1}
            onClick={onClick}
            onPointerOver={onPointerOver}
            onPointerOut={onPointerOut}
        >
            {children}
        </group>
    );
};

// Escena principal con los modelos
const SocialScene = () => {
    const [hoveredModel, setHoveredModel] = useState(null);

    const handleModelClick = url => {
        window.open(url, '_blank');
    };

    return (
        <>
            <Lighting />

            {/* GRID ORGANIZADO */}
            {/* Fila superior */}
            <FloatingModel
                position={[-2, 1.5, 0]}
                hover={hoveredModel === 'github'}
                onClick={() => handleModelClick('https://github.com/wilvelasco1006')}
                onPointerOver={() => setHoveredModel('github')}
                onPointerOut={() => setHoveredModel(null)}
            >
                <ModelGithub />
            </FloatingModel>

            <FloatingModel
                position={[-1.3, 0.8, 0]}
                hover={hoveredModel === 'twitter'}
                onClick={() => handleModelClick('https://x.com/wilvelasco1006?s=09')}
                onPointerOver={() => setHoveredModel('twitter')}
                onPointerOut={() => setHoveredModel(null)}
            >
                <ModelTwiter />
            </FloatingModel>

            {/* Fila del medio */}
            <FloatingModel
                position={[-3, -1, 0]}
                hover={hoveredModel === 'instagram'}
                onClick={() =>
                    handleModelClick(
                        'https://www.instagram.com/wilvelasco1006?igsh=ZHFsOWE4ZWx0cG5l'
                    )
                }
                onPointerOver={() => setHoveredModel('instagram')}
                onPointerOut={() => setHoveredModel(null)}
            >
                <ModelInstagram />
            </FloatingModel>

            <FloatingModel
                position={[2, 0, 0]}
                hover={hoveredModel === 'facebook'}
                onClick={() =>
                    handleModelClick('https://www.facebook.com/share/1FuZ6YjyhU/')
                }
                onPointerOver={() => setHoveredModel('facebook')}
                onPointerOut={() => setHoveredModel(null)}
            >
                <ModelFacebook />
            </FloatingModel>

            {/* Fila inferior */}
            <FloatingModel
                position={[-2, -1.5, 0]}
                hover={hoveredModel === 'gmail'}
                onClick={() => handleModelClick('mailto:wilvelasco1006@gmail.com')}
                onPointerOver={() => setHoveredModel('gmail')}
                onPointerOut={() => setHoveredModel(null)}
            >
                <ModelGmail />
            </FloatingModel>

            <FloatingModel
                position={[2, -1.5, 0]}
                hover={hoveredModel === 'linkedin'}
                onClick={() =>
                    handleModelClick(
                        'https://www.linkedin.com/in/wilmer-yulian-ulcue-velasco/'
                    )
                }
                onPointerOver={() => setHoveredModel('linkedin')}
                onPointerOut={() => setHoveredModel(null)}
            >
                <ModelLinkedin />
            </FloatingModel>

            {/* Controles suaves */}
            <OrbitControls
                enableZoom={true}
                enablePan={true}
                enableRotate={true}
                maxDistance={20}
                minDistance={2}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 2}
                autoRotate
                autoRotateSpeed={0.3}
            />
        </>
    );
};

const SocialCanvas = () => {
    return (
        <div className="social-canvas-container">
            <div className="canvas-header">
                <h3>Conecta Conmigo</h3>
                <p>Haz clic en los iconos para visitar mis redes</p>
            </div>

            <Canvas
                className="social-canvas"
                camera={{ position: [0, 0, 15], fov: 40 }}
                dpr={[1, 2]}
                gl={{ alpha: true, antialias: true }}
            >
                <Suspense fallback={null}>
                    <SocialScene />
                </Suspense>
            </Canvas>
        </div>
    );
};

export default SocialCanvas;

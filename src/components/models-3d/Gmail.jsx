import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { MeshStandardMaterial } from 'three';

export function ModelGmail(props) {
  const { nodes, materials } = useGLTF(
    'https://res.cloudinary.com/dijh9two4/image/upload/v1751865907/old_gmail_logo_afrve7.glb'
  );

  // Crear materiales personalizados con colores adecuados para Gmail
  const redMaterial = new MeshStandardMaterial({
    color: '#EA4335', // Rojo de Gmail
    roughness: 0.3,
    metalness: 0.2,
  });

  const whiteMaterial = new MeshStandardMaterial({
    color: '#FFFFFF', // Blanco
    roughness: 0.2,
    metalness: 0.1,
  });

  // Si necesitas un tercer color (para bordes o detalles)
  const grayMaterial = new MeshStandardMaterial({
    color: '#DADCE0', // Gris claro
    roughness: 0.5,
    metalness: 0.1,
  });

  return (
    <group {...props} dispose={null} scale={0.4} rotation={[0, 0, 0]} position={[2, -1, 0]}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="Root">
            <group
              name="Plane"
              position={[0, 0, -0.07]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[1.225, 1.054, 1.225]}
            >
              {/* Aplicar material rojo al cuerpo principal */}
              <mesh
                name="Plane_0"
                castShadow
                receiveShadow
                geometry={nodes.Plane_0.geometry}
                material={redMaterial}
              />
              {/* Aplicar material blanco al interior */}
              <mesh
                name="Plane_1"
                castShadow
                receiveShadow
                geometry={nodes.Plane_1.geometry}
                material={whiteMaterial}
              />
            </group>
            <group
              name="Plane001"
              position={[0, -0.135, 0]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[1.399, 1.363, 1.363]}
            >
              {/* Aplicar material gris a otros elementos */}
              <mesh
                name="Plane001_0"
                castShadow
                receiveShadow
                geometry={nodes.Plane001_0.geometry}
                material={grayMaterial}
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload(
  'https://res.cloudinary.com/dijh9two4/image/upload/v1751865907/old_gmail_logo_afrve7.glb'
);

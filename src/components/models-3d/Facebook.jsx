import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export function ModelFacebook(props) {
  const { nodes, materials } = useGLTF(
    'https://res.cloudinary.com/dijh9two4/image/upload/v1751847966/facebook_logo_wcybya.glb'
  );
  return (
    <group
      {...props}
      dispose={null}
      scale={0.3}
      rotation={[ 2,-Math.PI / 2, 2]}
    >
      <group>
        <group
          rotation={[-Math.PI / 2, 0, 0]}
          userData={{ name: 'Sketchfab_model' }}
        >
          <group userData={{ name: 'root' }}>
            <group
              rotation={[Math.PI / 2, 0, 0]}
              userData={{ name: 'GLTF_SceneRootNode' }}
            >
              <group
                position={[0.203, 2.096, 0.04]}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                scale={[1, 0.288, 1]}
                userData={{ name: 'Cube_2' }}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4.geometry}
                  material={materials['Material.001']}
                  userData={{ name: 'Object_4' }}
                />
              </group>
              <group
                position={[0.206, 0.089, 0.747]}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                scale={[5.723, 1.164, 4.65]}
                userData={{ name: 'Text.001_4' }}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_6.geometry}
                  material={materials.material_0}
                  userData={{ name: 'Object_6' }}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload(
  'https://res.cloudinary.com/dijh9two4/image/upload/v1751847966/facebook_logo_wcybya.glb'
);

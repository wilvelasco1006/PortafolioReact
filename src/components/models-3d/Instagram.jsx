import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export function ModelInstagram(props) {
  const { nodes, materials } = useGLTF(
    'https://res.cloudinary.com/dijh9two4/image/upload/v1751848141/instagram_tpvkau.glb'
  );
  return (
    <group
      {...props}
      dispose={null}
      scale={0.5}
      rotation={[0, Math.PI / 4, 0]}
    >
      <group>
        <group
          rotation={[-Math.PI / 2, 0, -0.6]}
          userData={{ name: 'Sketchfab_model' }}
        >
          <group
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}
            userData={{ name: 'e35cdae875b34891bdb69eb374fd639d.fbx' }}
          >
            <group userData={{ name: 'RootNode' }}>
              <group scale={171.33} userData={{ name: 'Instagram' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Instagram_Material002_0.geometry}
                  material={materials['Material.002']}
                  userData={{ name: 'Instagram_Material.002_0' }}
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
  'https://res.cloudinary.com/dijh9two4/image/upload/v1751848141/instagram_tpvkau.glb'
);

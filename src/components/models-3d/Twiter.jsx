import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export function ModelTwiter(props) {
  const { nodes, materials } = useGLTF(
    'https://res.cloudinary.com/dijh9two4/image/upload/v1751847833/twitter_x_logo_lnc9lr.glb'
  );
  return (
    <group {...props} dispose={null} scale={0.2} rotation={[Math.PI / 8, -1.9, 0.3]}>
      <group>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <group>
            <group rotation={[Math.PI / 2, 0, 0]}>
              <group scale={[0.209, 2.419, 2.419]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4.geometry}
                  material={materials['Material.001']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_5.geometry}
                  material={materials['Material.001']}
                />
              </group>
              <group
                rotation={[0, 0, -Math.PI / 2]}
                scale={[1.146, 1.409, 1.146]}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_7.geometry}
                  material={materials.material_0}
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
  'https://res.cloudinary.com/dijh9two4/image/upload/v1751847833/twitter_x_logo_lnc9lr.glb'
);

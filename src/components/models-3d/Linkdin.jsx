import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export function ModelLinkedin(props) {
  const { nodes, materials } = useGLTF(
    'https://res.cloudinary.com/dijh9two4/image/upload/v1751841102/linkedin_3d_l8fpyf.glb'
  );
  return (
    <group {...props} dispose={null} scale={1.3} rotation={[0, Math.PI / 8, 0]}>
      <group>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group>
              <group>
                <group>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['Objeto_1_Tinta_(1)_0'].geometry}
                    material={materials.Tinta_1}
                  />
                </group>
              </group>
              <group>
                <group>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['Objeto_2_Tinta_(3)_0'].geometry}
                    material={materials.Tinta_3}
                  />
                </group>
                <group>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['Objeto_3_Tinta_(3)_0'].geometry}
                    material={materials.Tinta_3}
                  />
                </group>
                <group>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['Objeto_4_Tinta_(3)_0'].geometry}
                    material={materials.Tinta_3}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload(
  'https://res.cloudinary.com/dijh9two4/image/upload/v1751841102/linkedin_3d_l8fpyf.glb'
);

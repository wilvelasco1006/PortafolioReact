import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export function ModelGithub(props) {
  const { nodes, materials } = useGLTF(
    'https://res.cloudinary.com/dijh9two4/image/upload/v1751840773/3d_github_logo_rgukja.glb'
  );
  return (
    <group {...props} dispose={null} scale={0.5} rotation={[0, -0.1, 0]} position={[0, 0, -1.9]}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group
                name="Curve012_0"
                position={[-0.055, 2.945, 6.336]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={28.364}
              >
                <mesh
                  name="Object_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4.geometry}
                  material={materials.glossy_putih}
                />
                <mesh
                  name="Object_5"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_5.geometry}
                  material={materials.github}
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
  'https://res.cloudinary.com/dijh9two4/image/upload/v1751840773/3d_github_logo_rgukja.glb'
);

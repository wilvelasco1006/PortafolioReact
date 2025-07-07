import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export function ModelGmail(props) {
  const { nodes, materials } = useGLTF(
    'https://res.cloudinary.com/dijh9two4/image/upload/v1751848225/gmail_logo_iubkvp.glb'
  );
  return (
    <group {...props} dispose={null} scale={5} rotation={[0, 0, 0]}>
      <group
        name="root_6"
        rotation={[Math.PI / 2, 0, 0]}
        userData={{ name: 'root_6' }}
      >
        <group
          name="node_id88_7"
          position={[0.143, -0.129, 0.165]}
          scale={[0.002, 0.002, 0.001]}
          userData={{ name: 'node_id88_7' }}
        >
          <mesh
            name="Object_16"
            castShadow
            receiveShadow
            geometry={nodes.Object_16.geometry}
            material={materials.material_5}
            position={[-81.971, -22.855, 7.5]}
            userData={{ name: 'Object_16' }}
          />
        </group>
        <mesh
          name="Object_5"
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials.material}
          position={[-0.097, -0.127, 0.167]}
          scale={[0.048, 0.116, 0.017]}
          userData={{ name: 'Object_5' }}
        />
        <mesh
          name="Object_7"
          castShadow
          receiveShadow
          geometry={nodes.Object_7.geometry}
          material={materials.material_1}
          position={[-0.098, -0.066, 0.167]}
          scale={[0.049, 0.075, 0.011]}
          userData={{ name: 'Object_7' }}
        />
        <mesh
          name="Object_9"
          castShadow
          receiveShadow
          geometry={nodes.Object_9.geometry}
          material={materials.material_2}
          position={[-0.258, -0.066, 0.167]}
          scale={[0.048, 0.075, 0.011]}
          userData={{ name: 'Object_9' }}
        />
        <mesh
          name="Object_11"
          castShadow
          receiveShadow
          geometry={nodes.Object_11.geometry}
          material={materials.material_3}
          position={[-0.178, -0.094, 0.167]}
          scale={[0.115, 0.106, 0.017]}
          userData={{ name: 'Object_11' }}
        />
        <mesh
          name="Object_13"
          castShadow
          receiveShadow
          geometry={nodes.Object_13.geometry}
          material={materials.material_4}
          position={[-0.257, -0.128, 0.167]}
          scale={[0.047, 0.115, 0.017]}
          userData={{ name: 'Object_13' }}
        />
      </group>
    </group>
  );
}

useGLTF.preload(
  'https://res.cloudinary.com/dijh9two4/image/upload/v1751848225/gmail_logo_iubkvp.glb'
);

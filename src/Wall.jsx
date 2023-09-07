import React from 'react';
import * as THREE from 'three'
import { useTexture } from '@react-three/drei';
import { RepeatWrapping } from 'three'

const Wall = ({height=10}) => {
  const dirt = useTexture('./dirt.png');

  return (
    <mesh receiveShadow position={[0, height*0.125, 0]}>
      <cylinderGeometry args={[17.1,17.1,height*0.25,50,1,true]} />
      <meshPhysicalMaterial 
        envMapIntensity={0.2}
        map={dirt}
        side={THREE.DoubleSide}
      />
    </mesh>
  )
}

export default Wall
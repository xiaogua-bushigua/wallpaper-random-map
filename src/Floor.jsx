import React from 'react';
import * as THREE from 'three'
import { useTexture } from '@react-three/drei';
import { RepeatWrapping } from 'three'

const Floor = ({height=10}) => {
  const dirt2 = useTexture('./dirt2.jpg');

  return (
    <mesh receiveShadow position={[0, -height*0.05, 0]}>
      <cylinderGeometry args={[18.5,18.5,height*0.1,50]} />
      <meshPhysicalMaterial 
        envMapIntensity={0.1}
        map={dirt2}
        side={THREE.DoubleSide}
      />
    </mesh>
  )
}

export default Floor
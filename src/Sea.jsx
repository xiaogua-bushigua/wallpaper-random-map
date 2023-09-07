import React from 'react';
import * as THREE from 'three';
import { useTexture } from '@react-three/drei';
import { RepeatWrapping } from 'three';

const Sea = ({ height = 10 }) => {
	const water = useTexture('./water.jpg');
	water.wrapS = RepeatWrapping;
	water.wrapT = RepeatWrapping;
	water.repeat.set(2, 1);

	return (
		<mesh receiveShadow position={[0, height * 0.1, 0]}>
			<cylinderGeometry args={[17, 17, height * 0.2, 50]} />
			<meshPhysicalMaterial
				envMapIntensity={0.5}
				color={new THREE.Color('#88c3ff').convertSRGBToLinear().multiplyScalar(3)}
				ior={1.4}
				transparent
				transmission={1}
				thickness={1.5}
				roughness={1}
				metalness={0.025}
				metalnessMap={water}
				roughnessMap={water}
			/>
		</mesh>
	);
};

export default Sea;

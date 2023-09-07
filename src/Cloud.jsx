import React from 'react';
import { Instances, Instance, useTexture } from '@react-three/drei';

const Cloud = () => {
	const num = Math.floor(Math.pow(Math.random(), 0.45) * 4);

	return (
		<Instances castShadow receiveShadow>
			<sphereGeometry args={[1, 7, 7]} />
			<meshStandardMaterial envMapIntensity={0.75} flatShading />
			{new Array(num).fill(0).map((item, index) => (
				<group
					key={index}
					position={[Math.random() * 20 - 10, Math.random() * 7 + 7, Math.random() * 20 - 10]}
					rotation-y={Math.random() * Math.PI * 2}
				>
					<Instance position={[-1.85, Math.random() * 0.3, 0]} scale={1.2} />
					<Instance position={[0, Math.random() * 0.3, 0]} scale={1.5} />
					<Instance position={[1.85, Math.random() * 0.3, 0]} scale={0.9} />
				</group>
			))}
		</Instances>
	);
};

export default Cloud;

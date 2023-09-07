import React from 'react';
import { Instances, Instance, useTexture } from '@react-three/drei';

const HexGroup = ({ hexs, type }) => {
	const [dirt, dirt2, grass, sand, water, stone] = useTexture(['./dirt.png', './dirt2.jpg', './grass.jpg', './sand.jpg', './water.jpg', './stone.png']);
	const mapTypes = { dirt, dirt2, grass, sand, water, stone };

	return (
		<Instances castShadow receiveShadow>
			<cylinderGeometry args={[1, 1, 1, 6, 1, false]} />
			<meshStandardMaterial envMapIntensity={0.135} flatShading map={mapTypes[type]} />
			{hexs.map((item, index) => (
				<group key={index}>
					<Instance position={[item.x, item.z / 2, item.y]} scale-y={item.z} />
				</group>
			))}
		</Instances>
	);
};

export default HexGroup;

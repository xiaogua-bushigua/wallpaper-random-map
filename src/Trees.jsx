import React from 'react';
import { Instances, Instance, useTexture } from '@react-three/drei';

const Trees = ({ trees }) => {
	const grass = useTexture('./grass.jpg');
	const treeHeight = Math.random() + 1.25;

	return (
		<Instances castShadow receiveShadow>
			<cylinderGeometry args={[0, 1.5, treeHeight, 3]} />
			<meshStandardMaterial envMapIntensity={0.135} flatShading map={grass} />
			{trees.map((item, index) => (
				<group key={index}>
					<Instance position={[item.x, item.z + 1, item.y]} />
				</group>
			))}
			<cylinderGeometry args={[0, 1.15, treeHeight, 3]} />
			<meshStandardMaterial envMapIntensity={0.135} flatShading map={grass} />
			{trees.map((item, index) => (
				<group key={index}>
					<Instance position={[item.x, item.z + treeHeight * 0.6 + 1, item.y]} />
				</group>
			))}
			<cylinderGeometry args={[0, 0.8, treeHeight, 3]} />
			<meshStandardMaterial envMapIntensity={0.135} flatShading map={grass} />
			{trees.map((item, index) => (
				<group key={index}>
					<Instance position={[item.x, item.z + treeHeight * 1.25 + 1, item.y]} />
				</group>
			))}
		</Instances>
	);
};

export default Trees;

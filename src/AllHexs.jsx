import * as THREE from 'three';
import { createNoise2D } from 'simplex-noise';
import HexGroup from './HexGroup';
import Rocks from './Rocks';
import Trees from './Trees';

const MAX_HEIGHT = 10;
const STONE_HEIGHT = MAX_HEIGHT * 0.8;
const DIRT_HEIGHT = MAX_HEIGHT * 0.7;
const GRASS_HEIGHT = MAX_HEIGHT * 0.5;
const SAND_HEIGHT = MAX_HEIGHT * 0.3;
const DIRT2_HEIGHT = MAX_HEIGHT * 0;

const tilePos = (i, j) => new THREE.Vector2((i + (j % 2) * 0.5) * 1.77, j * 1.535);

const AllHexs = () => {
	let diffMaps = {
		dirt: [],
		dirt2: [],
		grass: [],
		sand: [],
		water: [],
		stone: [],
	};

	let rocks = [];
	let trees = [];

	const getMap = (height) => {
		if (height > STONE_HEIGHT) return 'stone';
		else if (height > DIRT_HEIGHT) return 'dirt';
		else if (height > GRASS_HEIGHT) return 'grass';
		else if (height > SAND_HEIGHT) return 'sand';
		else if (height > DIRT2_HEIGHT) return 'dirt2';
		else return 'water';
	};

	const noise2D = createNoise2D();

	for (let i = -15; i < 15; i++) {
		for (let j = -15; j < 15; j++) {
			if (tilePos(i, j).length() > 16) continue;

			let noise = (noise2D(i * 0.1, j * 0.1) + 1) * 0.5;
			let height = Math.pow(noise, 1.5) * MAX_HEIGHT;

			// element: position.x, position.z, height, map
			diffMaps[getMap(height)].push(new THREE.Vector3(tilePos(i, j).x, tilePos(i, j).y, height));
			if ((getMap(height) === 'dirt2' || getMap(height) === 'sand') && Math.random() > 0.85)
				rocks.push(new THREE.Vector3(tilePos(i, j).x, tilePos(i, j).y, height));
			if (getMap(height) === 'grass' && Math.random() > 0.8) trees.push(new THREE.Vector3(tilePos(i, j).x, tilePos(i, j).y, height));
		}
	}

	return (
		<>
			{Object.keys(diffMaps).map((item, index) => (
				<HexGroup key={'map' + index} hexs={diffMaps[item]} type={item} />
			))}
			<Rocks rocks={rocks} />
			<Trees trees={trees} />
		</>
	);
};

export default AllHexs;

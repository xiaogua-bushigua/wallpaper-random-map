import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei';
import AllHexs from './AllHexs';
import * as THREE from 'three';
import Sea from './Sea';
import Wall from './Wall';
import Floor from './Floor';
import Cloud from './Cloud';

function App() {
  const [refreshKey, setRefreshKey] = useState(0);

  const handleRefresh = () => {
    setRefreshKey((prevKey) => prevKey + 1);
  }
	return (
		<Suspense>
			<Canvas
				shadows
				onCreated={(gl) => {
					gl.physicallyCorrectLights = true;
				}}
        onDoubleClick={handleRefresh}
			>
				<OrbitControls enableZoom={false} enablePan={false} />
				<PerspectiveCamera makeDefault fov={50} position={[-17, 31, 33]} />
				<color args={['#faefda']} attach="background" />
				<Environment files={'./envmap.hdr'} resolution={256} />
				<pointLight
					color={new THREE.Color('#ffd3b8').convertSRGBToLinear().convertSRGBToLinear()}
					position={[10, 20, 10]}
					intensity={1.5}
					distance={300}
					castShadow
					shadow-mapSize-height={512}
					shadow-mapSize-width={512}
					shadow-camera-near={0.5}
					shadow-camera-far={500}
				/>
				<ambientLight intensity={0.15} />
				<AllHexs />
				<Sea />
				<Wall />
				<Floor />
				<Cloud />
			</Canvas>
		</Suspense>
	);
}

export default App;

//* Libraries imports
import { Composition } from 'remotion';

//* Local imports
import { screen } from './utils/variables'; // screen size variables, width, height and fps

import Composition1 from './compositions/Composition1';
import Composition2 from './compositions/Composition2';
import Composition3 from './compositions/Composition3';
import Composition4 from './compositions/Composition4';
import Composition5 from './compositions/Composition5';
import Composition6 from './compositions/Composition6';
import Composition7 from './compositions/Composition7';
import Composition8 from './compositions/Composition8';
import Composition9 from './compositions/Composition9';
import Composition10 from './compositions/Composition10';

import './style.css';

export function RemotionRoot() {
	return (
		<>
			<Composition
				id="comp1"
				component={Composition1}
				durationInFrames={200} // 200 frames = 5 seconds
				fps={screen.fps}
				width={screen.width}
				height={screen.height}
			/>
			<Composition
				id="comp2"
				component={Composition2}
				durationInFrames={240} // 240 frames = 6 seconds
				fps={screen.fps}
				width={screen.width}
				height={screen.height}
			/>
			<Composition
				id="comp3"
				component={Composition3}
				durationInFrames={180} // 180 frames = 4.5 seconds
				fps={screen.fps}
				width={screen.width}
				height={screen.height}
			/>
			<Composition
				id="comp4"
				component={Composition4}
				durationInFrames={280} // 180 frames = 4.5 seconds
				fps={screen.fps}
				width={screen.width}
				height={screen.height}
			/>
			<Composition
				id="comp5"
				component={Composition5}
				durationInFrames={180} // 180 frames = 4.5 seconds
				fps={screen.fps}
				width={screen.width}
				height={screen.height}
			/>
			<Composition
				id="comp6"
				component={Composition6}
				durationInFrames={180} // 180 frames = 4.5 seconds
				fps={screen.fps}
				width={screen.width}
				height={screen.height}
			/>
			<Composition
				id="comp7"
				component={Composition7}
				durationInFrames={180} // 180 frames = 4.5 seconds
				fps={screen.fps}
				width={screen.width}
				height={screen.height}
			/>
			<Composition
				id="comp8"
				component={Composition8}
				durationInFrames={180} // 180 frames = 4.5 seconds
				fps={screen.fps}
				width={screen.width}
				height={screen.height}
			/>
			<Composition
				id="comp9"
				component={Composition9}
				durationInFrames={180} // 180 frames = 4.5 seconds
				fps={screen.fps}
				width={screen.width}
				height={screen.height}
			/>
			<Composition
				id="comp10"
				component={Composition10}
				durationInFrames={180} // 180 frames = 4.5 seconds
				fps={screen.fps}
				width={screen.width}
				height={screen.height}
			/>
		</>
	);
};

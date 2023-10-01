//* Libraries imports
import { Composition } from 'remotion';

//* Local imports
import { screen } from './utils/variables';
import Composition1 from './compositions/Composition1';
import Composition2 from './compositions/Composition2';
import Composition3 from './compositions/Composition3';
import './style.css';

export function RemotionRoot() {
	return (
		<>
			<Composition
				id="comp1"
				component={Composition1}
				durationInFrames={200} // 5 minutes
				fps={screen.fps}
				width={screen.width}
				height={screen.height}
			/>
			<Composition
				id="comp2"
				component={Composition2}
				durationInFrames={240} // 5 minutes
				fps={screen.fps}
				width={screen.width}
				height={screen.height}
			/>
			<Composition
				id="comp3"
				component={Composition3}
				durationInFrames={180} // 5 minutes
				fps={screen.fps}
				width={screen.width}
				height={screen.height}
			/>
			<Composition
				id="comp4"
				component={Composition1}
				durationInFrames={180} // 5 minutes
				fps={screen.fps}
				width={screen.width}
				height={screen.height}
			/>
			<Composition
				id="comp5"
				component={Composition1}
				durationInFrames={180} // 5 minutes
				fps={screen.fps}
				width={screen.width}
				height={screen.height}
			/>
		</>
	);
};

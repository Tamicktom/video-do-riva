//* Libraries imports
import { useCurrentFrame, interpolate } from 'remotion';

export function Title() {
	const frame = useCurrentFrame();
	const opacity = interpolate(frame, [20, 40], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
		<div
			className="z-10 font-bold leading-relaxed text-white text-9xl"
			style={{
				opacity,
			}}
		>
			Jardins Verdejantes
		</div>
	);
};

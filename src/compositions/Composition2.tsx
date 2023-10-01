//* Libraries imports
import { AbsoluteFill, Audio, Img, staticFile, useCurrentFrame, interpolate } from 'remotion';

//* Components imports
import { Logo } from '../components/Logo';
import { Title } from '../components/Title';
import Subtitle from '../components/Subtitle';

//* Local imports
import useTheme from '../hooks/useTheme';

type Props = {
}

export default function Composition2(props: Props) {
	const theme = useTheme();
	const isDark = theme === 'dark';
	const frame = useCurrentFrame();

	const blur = interpolate(frame, [0, 20, 130, 200], [0, 16, 16, 80], {
		easing: (x) => x ** 2,
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const zoom = interpolate(frame, [130, 200], [1.1, 2], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
		<AbsoluteFill className="items-center justify-center">
			<div className='relative flex flex-col items-center justify-center w-full h-full'>
				<Img
					src={staticFile('garden1.jpg')}
					className='absolute top-0 left-0 z-0 object-cover w-full h-full scale-110'
					style={{
						filter: `brightness(${isDark ? 0.7 : 1}) blur(${blur}px)`,
						transform: `scale(${zoom})`,
					}}
				/>
				<div className='z-10 flex flex-col items-center justify-center w-2/3 rounded-2xl'>
					<div className="m-10" />
					<Logo />
					<div className="m-3" />
					<Title />
				</div>
				<Subtitle
					showFrame={20}
					desappearFrame={220}
				>
					Há mais de uma década, a Jardins Verdejantes tem transformado espaços comuns em paraísos naturais.
				</Subtitle>
				<Audio
					src={staticFile('voice2.mp3')}
					startFrom={0}
					endAt={240}
					volume={0.5}
				/>
			</div>
		</AbsoluteFill>
	);
};

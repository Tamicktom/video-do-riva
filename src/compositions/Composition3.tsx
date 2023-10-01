//* Libraries imports
import { AbsoluteFill, Audio, Img, staticFile, useCurrentFrame, interpolate } from 'remotion';

//* Components imports
import { Logo } from '../components/Logo';
import { Title } from '../components/Title';
import Subtitle from '../components/Subtitle';
import PersonImage from '../components/PersonImage';

//* Local imports
import useTheme from '../hooks/useTheme';

type Props = {
}

export default function Composition3(props: Props) {
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

				<PersonImage
					startFrame={100}
					endFrame={150}
					path={'daniel_rodrigues.jpg'}
					legend='Daniel Rodrigues'
					proportion={[3, 4]}
					width={1060 * 0.8}
					height={707 * 0.8}
				/>

				<Subtitle
					showFrame={20}
					desappearFrame={220}
				>
					Tudo começou com a paixão de um homem, Daniel Rodrigues, que viu a beleza na simplicidade da natureza.
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

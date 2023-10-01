//* Libraries imports
import { AbsoluteFill, Audio, Img, staticFile, useCurrentFrame, interpolate, random } from 'remotion';

//* Components imports
import Background from '../components/Background';
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
			<Background>

				<PersonImage
					startFrame={0}
					endFrame={180}
					path={'garden2.jpg'}
					legend=''
					proportion={[3, 4]}
					width={1060 * 0.8}
					height={707 * 0.8}
					positionAnimation
					startPosition={{
						x: 200,
						y: 0
					}}
					endPosition={{
						x: 200,
						y: 300
					}}
					startScale={0.8}
					endScale={1.1}
					endRotation={-2}
					startRotation={-10}
				/>

				<PersonImage
					startFrame={0}
					endFrame={180}
					path={'garden3.jpg'}
					legend=''
					proportion={[1, 1]}
					width={1060 * 0.8}
					height={707 * 0.8}
					positionAnimation
					startPosition={{
						x: 200 * (random(1) + 3),
						y: -500 * (random(1) + 1)
					}}
					endPosition={{
						x: 200 * (random(1) + 3),
						y: 300 - (random(1) + 300)
					}}
					startScale={random(1) + 0.8}
					endScale={random(1) + 1.1}
					endRotation={random(1) - 2}
					startRotation={random(1) - 10}
				/>

				<PersonImage
					startFrame={0}
					endFrame={180}
					path={'garden4.jpg'}
					legend=''
					proportion={[1, 1]}
					width={1060 * 0.8}
					height={707 * 0.8}
					positionAnimation
					startPosition={{
						x: 400 * (random(1) + 3),
						y: -100 * (random(1) + 1)
					}}
					endPosition={{
						x: 200 * (random(1) + 3),
						y: 600 - (random(1) + 300)
					}}
					startScale={random(1) + 0.8}
					endScale={random(1) + 1.1}
					endRotation={random(1) - 2}
					startRotation={random(1) - 10}
				/>

				<Subtitle
					showFrame={20}
					desappearFrame={220}
				>
					Nossa missão é criar ambientes verdes harmoniosos, promovendo a conexão com a natureza e tornando os sonhos de nossos clientes uma realidade.
				</Subtitle>
				<Audio
					src={staticFile('voice2.mp3')}
					startFrom={0}
					endAt={240}
					volume={0.5}
				/>
			</Background>
		</AbsoluteFill>
	);
};

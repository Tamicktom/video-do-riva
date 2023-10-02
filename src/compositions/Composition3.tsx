//* Libraries imports
import { AbsoluteFill, Audio, Img, staticFile, useCurrentFrame, interpolate } from 'remotion';

//* Components imports
import Background from '../components/Background';
import Subtitle from '../components/Subtitle';
import PersonImage from '../components/PersonImage';

type Props = {
}

export default function Composition3(props: Props) {


	return (
		<AbsoluteFill className="items-center justify-center">
			<Background>

				<PersonImage
					startFrame={20}
					endFrame={235}
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
					src={staticFile('voice3.mp3')}
					startFrom={0}
					endAt={235}
					volume={0.5}
				/>
			</Background>
		</AbsoluteFill>
	);
};

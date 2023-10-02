//* Libraries imports
import { AbsoluteFill, Audio, staticFile, random, useCurrentFrame } from 'remotion';

//* Components imports
import Background from '../components/Background';
import Subtitle from '../components/Subtitle';
import PersonImage from '../components/PersonImage';
import Flowers from '../components/Flowers';

//* Local imports
import { screen } from '../utils/variables';

type Image = {
	path: string;
	proportion: [number, number];
}

type Props = {
}

export default function Composition3(props: Props) {
	const frame = useCurrentFrame();

	const images: Image[] = [
		{
			path: 'garden1.jpg',
			proportion: [1, 1],
		},
		{
			path: 'garden2.jpg',
			proportion: [1, 1],
		},
		{
			path: 'garden3.jpg',
			proportion: [1, 1],
		},
		{
			path: 'garden4.jpg',
			proportion: [1, 1],
		},
		{
			path: 'garden5.jpg',
			proportion: [1, 1],
		},
		{
			path: 'garden6.jpg',
			proportion: [1, 1],
		},
		{
			path: 'garden7.jpg',
			proportion: [1, 1],
		},
		{
			path: 'garden8.jpg',
			proportion: [1, 1],
		},
	]

	return (
		<AbsoluteFill className="items-center justify-center">
			<Background>

				<div className='relative flex items-center justify-center w-full h-full'>
					{
						images.map((image, index) => {
							const scale = {
								start: 0.6,
								end: 0.7
							}
							const negative = random(index + 3) > 0.5 ? 1 : -1;
							const isPair = index % 2 === 0;
							const rotation = {
								start: random(index + 3) * 12 * negative,
								end: random(index + 4) * 12
							}
							const startPosition = {
								x: ((index + 1) * 100) - 220,
								y: isPair ? -50 : 400
							}
							const endPosition = {
								x: ((index + 1) * 180) - 220,
								y: isPair ? -50 : 400
							}

							return (
								<PersonImage
									startFrame={0}
									endFrame={180}
									path={image.path}
									legend=''
									proportion={image.proportion}
									width={1060}
									height={707}
									positionAnimation
									endPosition={endPosition}
									startPosition={startPosition}
									startScale={scale.start}
									endScale={scale.end}
									startRotation={rotation.start}
									endRotation={rotation.end}
								/>
							);
						})
					}
				</div>

				<Subtitle
					showFrame={20}
					desappearFrame={220}
				>
					Nossa missão é criar ambientes verdes harmoniosos, promovendo a conexão com a natureza e tornando os sonhos de nossos clientes uma realidade.
				</Subtitle>

				<Flowers
					frame={frame}
					start={0}
					end={15}
				/>

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

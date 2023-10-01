//* Libraries imports
import { useCurrentFrame, interpolate } from "remotion";

//* Hooks imports
import useTheme from "../hooks/useTheme";

type Props = {
  children: string;
  showFrame: number;
  desappearFrame: number;
}

export default function Subtitle(props: Props) {
  const frame = useCurrentFrame();
  const theme = useTheme();

  const charCount = props.children.toString().length;

  const opacity = interpolate(
    frame,
    [props.showFrame, props.showFrame + 1, props.desappearFrame - 1, props.desappearFrame],
    [0, 1, 1, 0],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    }
  );

  return (
    <div className="absolute bottom-0 left-0 z-10 flex items-center justify-center w-full h-40">
      <p
        className="p-4 text-5xl text-center text-white transition-all rounded-2xl"
        style={{
          opacity,
          backgroundColor: theme === 'dark' ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.7)',
          width: charCount > 80 ? '80%' : '50%',
        }}
      >
        {props.children}
      </p>
    </div>
  );
}
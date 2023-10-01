//* Libraries imports
import { Img, staticFile, interpolate, useCurrentFrame } from "remotion";

//* local imports
import { screen } from "../utils/variables";

type Props = {
  path: string;
  width: number;
  height: number;
  proportion: [number, number]
  legend: string;
  startFrame: number;
  endFrame: number;
}

export default function PersonImage(props: Props) {
  const frame = useCurrentFrame();

  //compute width and height based on proportion
  const width = props.width * props.proportion[0] / props.proportion[1];
  const height = props.height * props.proportion[1] / props.proportion[0];

  const fromBottomToCenter = interpolate(
    frame,
    [props.startFrame, props.endFrame],
    [screen.height * 0.12, screen.height * 0.2],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  const opacity = interpolate(
    frame,
    [props.startFrame, props.startFrame + screen.fps * 0.3, props.endFrame - screen.fps * 0.3, props.endFrame], //fade in
    [0, 1, 1, 0],
    {
      easing: (x) => x ** 2,
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  return (
    <div
      className="absolute flex flex-col items-center justify-center px-8 py-8 overflow-hidden bg-white border-8 border-neutral-300 w-fit h-fit rounded-2xl"
      style={{
        width: width,
        height: height,
        bottom: fromBottomToCenter,
        opacity: opacity,
      }}
    >
      <Img
        src={staticFile(props.path)}
        className="object-cover w-full h-full border-8 rounded-2xl border-neutral-300"
      />
      <div className="w-full p-4 bg-opacity-50">
        <p className="text-6xl font-bold text-center text-black">{props.legend}</p>
      </div>
    </div>
  );
}
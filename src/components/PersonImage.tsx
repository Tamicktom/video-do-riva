//* Libraries imports
import { Img, staticFile, interpolate, useCurrentFrame } from "remotion";

//* local imports
import { screen } from "../utils/variables";

type AnimationProps = {
  path: string;
  width: number;
  height: number;
  proportion: [number, number]
  legend: string;
  startFrame: number;
  endFrame: number;

  positionAnimation: true;
  startPosition?: {
    x: number;
    y: number;
  };
  endPosition?: {
    x: number;
    y: number;
  };
}

type Props = {
  path: string;
  width: number;
  height: number;
  proportion: [number, number]
  legend: string;
  startFrame: number;
  endFrame: number;

  position?: {
    x: number;
    y: number;
  };

  positionAnimation?: boolean;
  startPosition?: {
    x: number;
    y: number;
  };
  endPosition?: {
    x: number;
    y: number;
  };
  startRotation?: number;
  endRotation?: number;
  startScale?: number;
  endScale?: number;
}

export default function PersonImage(props: Props) {
  const frame = useCurrentFrame();

  //compute width and height based on proportion
  const width = props.width * props.proportion[0] / props.proportion[1];
  const height = props.height * props.proportion[1] / props.proportion[0];

  const startFrom = {
    x: props.startPosition?.x ?? screen.width * 0.5 - width * 0.5,
    y: props.startPosition?.y ?? screen.height * 0.12,
  }

  const endAt = {
    x: props.endPosition?.x ?? screen.width * 0.5 - width * 0.5,
    y: props.endPosition?.y ?? screen.height * 0.2,
  }

  const bottomAnimation = interpolate(
    frame,
    [props.startFrame, props.endFrame],
    [startFrom.y, endAt.y],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  const leftAnimation = interpolate(
    frame,
    [props.startFrame, props.endFrame],
    [startFrom.x, endAt.x],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  const rotation = interpolate(
    frame,
    [props.startFrame, props.endFrame],
    [props.startRotation ?? 0, props.endRotation ?? 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  const scale = interpolate(
    frame,
    [props.startFrame, props.endFrame],
    [props.startScale ?? 1, props.endScale ?? 1],
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
        bottom: bottomAnimation,
        left: leftAnimation,
        opacity: opacity,
        transform: `rotate(${rotation}deg) scale(${scale})`,
      }}
    >
      <Img
        src={staticFile(props.path)}
        className="object-cover w-full h-full border-8 rounded-2xl border-neutral-300"
      />
      <div className="w-full pt-2 bg-opacity-50">
        <p className="text-6xl font-bold text-center text-black">{props.legend}</p>
      </div>
    </div>
  );
}
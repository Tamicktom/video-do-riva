//* Libraries imports
import { Img, staticFile, interpolate } from "remotion";

//* local imports
import { screen } from "../utils/variables";


type Props = {
  start: number;
  end: number;
  frame: number;
}

export default function Flowers(props: Props) {

  const opacity = interpolate(
    props.frame,
    [props.start, props.end],
    [0, 1],
    {
      easing: (n) => n,
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  return (
    <div className="absolute bottom-0 left-0 z-20 w-full h-full overflow-hidden">
      <Img
        src={staticFile("left-top-flowers.svg")}
        width={screen.width * 0.3}
        height={screen.height * 0.3}
        className="absolute -top-8 -left-8"
        style={{ opacity }}
      />
      <Img
        src={staticFile("right-bottom-flowers.svg")}
        width={screen.width * 0.3}
        height={screen.height * 0.3}
        className="absolute -right-8 -bottom-8"
        style={{ opacity }}
      />
    </div>
  );
}
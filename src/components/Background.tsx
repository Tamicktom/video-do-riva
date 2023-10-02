//* Libraries imports
import { Img, staticFile } from "remotion";
import type { ReactNode } from "react";


//* Local imports
import useTheme from "../hooks/useTheme";
import { colors, screen } from "../utils/variables";

type Props = {
  children: ReactNode;
}

export default function Background(props: Props) {
  const theme = useTheme();

  return (
    <div
      className='relative flex flex-col items-center justify-center w-full h-full'
      style={{
        background: `linear-gradient(180deg, ${theme === 'dark' ? colors[900] : colors[500]} 0%, ${theme === 'dark' ? colors[800] : colors[300]} 100%)`,
        color: theme === 'dark' ? colors[50] : colors[900],
      }}
    >
      <Img
        src={
          staticFile(
            theme === "dark"
              ? "flowers-background-black.webp"
              : "flowers-background-white.webp"
          )
        }
        width={screen.width}
        height={screen.height}
        className="absolute top-0 left-0 z-0 w-full h-full scale-110 blur-2xl"
      />
      {props.children}
    </div>
  );
}
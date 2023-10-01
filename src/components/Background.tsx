//* Libraries imports
import type { ReactNode } from "react";


//* Local imports
import useTheme from "../hooks/useTheme";
import { colors } from "../utils/variables";

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
      {props.children}
    </div>
  );
}
import { useMediaQuery } from "react-responsive";

import screen from "@/styles/_screens.module.scss";

const removePixelUnit = (input: string): number => {
  const number = input.replace("px", "");
  return Number(number);
};

const useResponsive = () => {
  const isDesktop = useMediaQuery({
    minWidth: removePixelUnit(screen.maxMobileScreenWidth) + 1,
  });

  const isMobile = useMediaQuery({
    maxWidth: removePixelUnit(screen.maxMobileScreenWidth),
  });

  return {
    isMobile,
    isDesktop,
  };
};

export default useResponsive;

import { useMediaQuery } from "react-responsive";

import screen from "@/styles/_screens.module.scss";

const useResponsive = () => {
  const isDesktop = useMediaQuery({
    minWidth: screen.maxDesktopScreenWidth,
  });

  const isMobile = useMediaQuery({
    minWidth: 0,
    maxWidth: screen.maxMobileScreenWidth,
  });

  return {
    isMobile,
    isDesktop,
  };
};

export default useResponsive;

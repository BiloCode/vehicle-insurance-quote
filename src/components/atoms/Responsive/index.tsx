import { FC, PropsWithChildren } from "react";

import useResponsive from "@/hooks/useResponsive";

type Children = PropsWithChildren<{}>;

const Mobile: FC<Children> = ({ children }) => {
  const { isMobile } = useResponsive();

  if (!isMobile) {
    return null;
  }

  return <>{children}</>;
};

const Desktop: FC<Children> = ({ children }) => {
  const { isDesktop } = useResponsive();

  if (!isDesktop) {
    return null;
  }

  return <>{children}</>;
};

export default {
  Mobile,
  Desktop,
};

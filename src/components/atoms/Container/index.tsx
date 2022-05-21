import { FC, PropsWithChildren } from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";

type Props = {
  className: string;
  isMobile?: boolean;
};

const Container: FC<PropsWithChildren<Props>> = ({
  children,
  isMobile,
  className,
}) => {
  return (
    <main
      className={classNames(styles.container, className, {
        [styles["container--mobile"]]: isMobile,
      })}
    >
      {children}
    </main>
  );
};

export default Container;

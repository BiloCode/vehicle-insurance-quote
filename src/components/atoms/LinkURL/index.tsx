import { FC, PropsWithChildren } from "react";
import styles from "./styles.module.scss";

type Props = {
  to?: string;
  target?: "default" | "blank";
};

const LinkURL: FC<PropsWithChildren<Props>> = ({ to, target, children }) => {
  return (
    <a
      href={to}
      className={styles.link}
      target={target === "blank" ? "_blank" : undefined}
    >
      {children}
    </a>
  );
};

LinkURL.defaultProps = {
  target: "default",
};

export default LinkURL;

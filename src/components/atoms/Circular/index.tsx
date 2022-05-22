import { FC, PropsWithChildren } from "react";
import styles from "./styles.module.scss";

const Circular: FC<PropsWithChildren<{}>> = ({ children }) => (
  <div className={styles["circular-container"]}>{children}</div>
);

export default Circular;

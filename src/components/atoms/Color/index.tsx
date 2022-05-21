import { FC, PropsWithChildren } from "react";
import styles from "./styles.module.scss";

type Children = PropsWithChildren<{}>;

const Red: FC<Children> = ({ children }) => (
  <span className={styles.red}>{children}</span>
);

const White: FC<Children> = ({ children }) => (
  <span className={styles.white}>{children}</span>
);

const Acian: FC<Children> = ({ children }) => (
  <span className={styles.acian}>{children}</span>
);

const Gray3: FC<Children> = ({ children }) => (
  <span className={styles.gray3}>{children}</span>
);

const Gray4: FC<Children> = ({ children }) => (
  <span className={styles.gray4}>{children}</span>
);

export default { Red, White, Gray3, Gray4, Acian };

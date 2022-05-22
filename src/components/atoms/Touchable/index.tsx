import { FC, PropsWithChildren } from "react";
import styles from "./styles.module.scss";

type Props = {
  onClick(): void;
};

const Touchable: FC<PropsWithChildren<Props>> = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className={styles["touchable"]}>
      {children}
    </button>
  );
};

export default Touchable;

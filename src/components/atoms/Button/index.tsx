import { FC, PropsWithChildren } from "react";
import styles from "./styles.module.scss";

type Props = {
  type?: "submit" | "button";
};

const Button: FC<PropsWithChildren<Props>> = ({ children, type }) => {
  return (
    <button type={type} className={styles.button}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: "button",
};

export default Button;

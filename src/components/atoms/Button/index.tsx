import { FC, PropsWithChildren } from "react";
import styles from "./styles.module.scss";

type Props = {
  loading?: boolean;
  disabled?: boolean;
  type?: "submit" | "button";
};

const Button: FC<PropsWithChildren<Props>> = ({
  type,
  loading,
  disabled,
  children,
}) => {
  return (
    <button
      type={type}
      className={styles.button}
      disabled={loading || disabled}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: "button",
};

export default Button;

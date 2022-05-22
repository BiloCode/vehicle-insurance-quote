import { FC, PropsWithChildren } from "react";
import styles from "./styles.module.scss";

type Props = {
  onClick?(): void;
  loading?: boolean;
  disabled?: boolean;
  type?: "submit" | "button";
};

const Button: FC<PropsWithChildren<Props>> = ({
  type,
  onClick,
  loading,
  disabled,
  children,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
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

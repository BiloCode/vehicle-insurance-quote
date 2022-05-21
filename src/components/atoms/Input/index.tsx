import classNames from "classnames";
import { ChangeEvent, FC, memo } from "react";
import styles from "./styles.module.scss";

export type Props = {
  name: string;
  pattern?: string;
  isError?: boolean;
  minLength?: number;
  maxLength?: number;
  placeholder?: string;
  type?: "number" | "text";
  onChange?(ev: ChangeEvent<HTMLInputElement>): void;
};

const Input: FC<Props> = (props) => {
  return (
    <input
      type={props.type}
      name={props.name}
      pattern={props.pattern}
      onChange={props.onChange}
      minLength={props.minLength}
      maxLength={props.maxLength}
      placeholder={props.placeholder}
      className={classNames(styles.input, {
        [styles["input--error"]]: props.isError,
      })}
    />
  );
};

Input.defaultProps = {
  type: "text",
};

export default memo(Input);

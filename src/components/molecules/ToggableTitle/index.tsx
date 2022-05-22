import { FC, PropsWithChildren } from "react";
import styles from "./styles.module.scss";

import Icon from "@/components/atoms/Icon";
import Title from "@/components/atoms/Title";

type Props = {
  active: boolean;
  onToggle(): void;
};

const ToggableTitle: FC<PropsWithChildren<Props>> = ({
  active,
  onToggle,
  children,
}) => (
  <button onClick={onToggle} className={styles["toggable-title"]}>
    <Title fontSize="sm" lineHeight="lg">
      {children}
    </Title>
    {!active && <Icon.ArrowDown />}
    {active && <Icon.ArrowUp />}
  </button>
);

export default ToggableTitle;

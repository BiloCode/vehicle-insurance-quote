import { FC, memo } from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";

import Text from "@/components/atoms/Text";

type Props = {
  text: string;
  active: boolean;
  onClick(): void;
};

const TabButton: FC<Props> = ({ active, onClick, text }) => {
  return (
    <button
      onClick={onClick}
      className={classNames(styles["tab-button"], {
        [styles["tab-button--active"]]: active,
      })}
    >
      <Text fontSize="2xs" bold lineHeight="xs">
        {text}
      </Text>
    </button>
  );
};

export default memo(TabButton, (prev, next) => prev.active === next.active);

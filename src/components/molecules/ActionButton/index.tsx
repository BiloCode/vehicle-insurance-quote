import { FC } from "react";
import styles from "./styles.module.scss";

import Icon from "@/components/atoms/Icon";
import Text from "@/components/atoms/Text";
import Color from "@/components/atoms/Color";
import Circular from "@/components/atoms/Circular";

export type ActionType = "add" | "remove";

type Props = {
  type: ActionType;
  onClick(): void;
};

const ActionButton: FC<Props> = ({ type, onClick }) => {
  return (
    <button className={styles["action-button"]} onClick={onClick}>
      <Circular>
        {type === "add" && <Icon.Add />}
        {type === "remove" && <Icon.Remove />}
      </Circular>
      <Text fontSize="xs" lineHeight="xs" bold>
        <Color.Acian>{type === "add" ? "AGREGAR" : "QUITAR"}</Color.Acian>
      </Text>
    </button>
  );
};

export default ActionButton;

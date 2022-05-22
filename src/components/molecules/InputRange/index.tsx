import { FC } from "react";
import styles from "./styles.module.scss";

import Icon from "@/components/atoms/Icon";
import Text from "@/components/atoms/Text";
import Touchable from "@/components/atoms/Touchable";
import { formatCurrency } from "@/core/utils/formatCurrency";

type Props = {
  value: number;
  onIncrement(): void;
  onDecrement(): void;
};

const PlanInputRange: FC<Props> = ({ value, onDecrement, onIncrement }) => (
  <div className={styles["input-range"]}>
    <Touchable onClick={onDecrement}>
      <Icon.Remove />
    </Touchable>
    <Text>$ {formatCurrency(value)}</Text>
    <Touchable onClick={onIncrement}>
      <Icon.Add />
    </Touchable>
  </div>
);

export default PlanInputRange;

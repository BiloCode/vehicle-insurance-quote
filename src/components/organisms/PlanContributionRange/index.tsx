import { useState } from "react";
import styles from "./styles.module.scss";

import Text from "@/components/atoms/Text";
import InputRange from "@/components/molecules/InputRange";

import { formatCurrency } from "@/core/utils/formatCurrency";

const MAX_VALUE = 16500;
const MIN_VALUE = 12500;
const INITIAL_VALUE = 14300;

const PlanContributionRange = () => {
  const [value, setValue] = useState(INITIAL_VALUE);

  const onIncrement = () => setValue((v) => Math.min(v + 100, MAX_VALUE));
  const onDecrement = () => setValue((v) => Math.max(v - 100, MIN_VALUE));

  return (
    <div className={styles["plan-contribution-range"]}>
      <div className={styles["plan-contribution-range__text"]}>
        <Text>Indica la suma generada</Text>
        <div className={styles["plan-contribution-range__text--bottom"]}>
          <Text fontSize="xs">MIN $ {formatCurrency(MIN_VALUE)}</Text>
          <Text fontSize="xs">|</Text>
          <Text fontSize="xs">MAX $ {formatCurrency(MAX_VALUE)}</Text>
        </div>
      </div>
      <InputRange
        value={value}
        onDecrement={onDecrement}
        onIncrement={onIncrement}
      />
    </div>
  );
};

export default PlanContributionRange;

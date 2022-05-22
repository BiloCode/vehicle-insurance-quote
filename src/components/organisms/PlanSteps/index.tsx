import { FC } from "react";
import styles from "./styles.module.scss";

import { Step } from "@/core/types/Step";

import Text from "@/components/atoms/Text";
import Numerator from "@/components/molecules/Numerator";
import Color from "@/components/atoms/Color";

type Props = {
  steps: Step[];
};

const PlanSteps: FC<Props> = ({ steps }) => {
  return (
    <div className={styles.steps}>
      {steps.map((v, i) => (
        <div className={styles["steps__item"]}>
          <Numerator active={!v.finish}>{i + 1}</Numerator>
          <Text>
            {!v.finish && <Color.Gray1>{v.label}</Color.Gray1>}
            {v.finish && <Color.Gray3>{v.label}</Color.Gray3>}
          </Text>
        </div>
      ))}
      <div className={styles["steps__vertical-bar"]} />
    </div>
  );
};

export default PlanSteps;

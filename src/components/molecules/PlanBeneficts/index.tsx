import { FC } from "react";
import styles from "./styles.module.scss";

import Icon from "@/components/atoms/Icon";
import Text from "@/components/atoms/Text";

type Props = {
  text: string;
};

const PlanBeneficts: FC<Props> = ({ text }) => {
  return (
    <div className={styles["plan-beneficts"]}>
      <Icon.Check />
      <Text fontFamily="roboto" fontSize="sm">
        {text}
      </Text>
    </div>
  );
};

export default PlanBeneficts;

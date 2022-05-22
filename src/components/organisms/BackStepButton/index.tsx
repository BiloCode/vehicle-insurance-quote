import { FC } from "react";
import styles from "./styles.module.scss";

import Color from "@/components/atoms/Color";
import Text from "@/components/atoms/Text";
import BackIndicator from "@/components/molecules/BackIndicator";

type Props = {
  onClick?(): void;
};

const BackStepButton: FC<Props> = ({ onClick }) => {
  return (
    <button onClick={onClick} className={styles["back-step-btn"]}>
      <BackIndicator color="danger" />
      <Text fontSize="sm">
        <Color.Gray3>VOLVER</Color.Gray3>
      </Text>
    </button>
  );
};

export default BackStepButton;

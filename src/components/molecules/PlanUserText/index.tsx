import { FC } from "react";
import styles from "./styles.module.scss";

import Text from "@/components/atoms/Text";
import Title from "@/components/atoms/Title";
import Color from "@/components/atoms/Color";

type Props = {
  name: string;
};

const PlanUserText: FC<Props> = ({ name }) => {
  return (
    <div className={styles["plan-user-text"]}>
      <Title fontSize="2xl" lineHeight="2xl">
        ¡Hola, <Color.Red>{name}!</Color.Red>
      </Title>
      <Text fontFamily="roboto">Conoce las coberturas para tu plan</Text>
    </div>
  );
};

export default PlanUserText;

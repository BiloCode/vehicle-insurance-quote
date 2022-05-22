import styles from "./styles.module.scss";

import Text from "@/components/atoms/Text";
import Color from "@/components/atoms/Color";
import Title from "@/components/atoms/Title";
import Button from "@/components/atoms/Button";
import Separator from "@/components/atoms/Separator";
import PlanBeneficts from "@/components/molecules/PlanBeneficts";

const CreatePlanData = () => {
  return (
    <div className={styles["create-plan-data"]}>
      <div>
        <Text fontSize="xs" lineHeight="xs" bold>
          MONTO
        </Text>
        <div className={styles["create-plan-data--price"]}>
          <Title fontSize="lg" lineHeight="xl">
            $35.00
          </Title>
        </div>
        <Text fontSize="xs">
          <Color.Gray2>mensuales</Color.Gray2>
        </Text>
      </div>
      <div className={styles["create-plan-data__separator"]}>
        <Separator />
      </div>
      <div className={styles["create-plan-data__beneficts"]}>
        <Title fontSize="xs">El precio incluye:</Title>
        <div>
          <PlanBeneficts text="Llanta de repuesto" />
          <PlanBeneficts text="Analisis de motor" />
          <PlanBeneficts text="Aros gratis" />
        </div>
      </div>
      <Button>LO QUIERO</Button>
    </div>
  );
};

export default CreatePlanData;

import styles from "./styles.module.scss";

import { useUserContext } from "@/store/UserContext/context";

import Navbar from "@/components/organisms/Navbar";
import Separator from "@/components/atoms/Separator";
import AutoCard from "@/components/molecules/AutoCard";
import PlanSteps from "@/components/organisms/PlanSteps";
import PlanUserText from "@/components/molecules/PlanUserText";
import BackStepButton from "@/components/organisms/BackStepButton";
import CreatePlanData from "@/components/organisms/CreatePlanData";
import CreatePlanLimitator from "@/components/atoms/CreatePlanLimitator";
import PlanCoverageSection from "@/components/organisms/PlanCoverageSection";
import PlanContributionRange from "@/components/organisms/PlanContributionRange";

const steps = [
  { label: "Datos", finish: true },
  {
    label: "Arma tu plan",
    finish: false,
  },
];

const CreatePlanPage = () => {
  const { userData, onClearData } = useUserContext();

  return (
    <div className={styles["create-plan-page"]}>
      <Navbar isStatic />
      <div className={styles["create-plan-page__content"]}>
        <div className={styles["create-plan-page__steps"]}>
          <PlanSteps steps={steps} />
        </div>
        <div className={styles["create-plan-page__center"]}>
          <CreatePlanLimitator>
            <BackStepButton onClick={onClearData} />
          </CreatePlanLimitator>

          <div className={styles["create-plan-page__user"]}>
            <PlanUserText name={userData?.name!} />
          </div>

          <CreatePlanLimitator className={styles["create-plan-page__card"]}>
            <AutoCard
              title="Wolkswagen 2019Golf"
              subtitle={`Placa: ${userData?.carLicensePlate}`}
            />
            <div className={styles["create-plan-page__card--input-range"]}>
              <PlanContributionRange />
            </div>
            <div className={styles["create-plan-page__card--separator"]}>
              <Separator />
            </div>
          </CreatePlanLimitator>

          <div className={styles["create-plan-page__coverage"]}>
            <PlanCoverageSection />
          </div>
        </div>

        <div className={styles["create-plan-page__data"]}>
          <CreatePlanData />
        </div>
      </div>
    </div>
  );
};

export default CreatePlanPage;

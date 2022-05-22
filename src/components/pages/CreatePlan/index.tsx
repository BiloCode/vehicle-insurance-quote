import classNames from "classnames";
import styles from "./styles.module.scss";

import { useUserContext } from "@/store/UserContext/context";

import useResponsive from "@/hooks/useResponsive";

import Navbar from "@/components/organisms/Navbar";
import Separator from "@/components/atoms/Separator";
import AutoCard from "@/components/molecules/AutoCard";
import PlanSteps from "@/components/organisms/PlanSteps";
import PlanUserText from "@/components/molecules/PlanUserText";
import BackStepButton from "@/components/organisms/BackStepButton";
import PlanBenefictsData from "@/components/organisms/PlanBenefictsData";
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
  const { isMobile } = useResponsive();
  const { userData, onClearData } = useUserContext();

  return (
    <div
      className={classNames(styles["create-plan-page"], {
        [styles["create-plan-page--mobile"]]: isMobile,
      })}
    >
      <Navbar isStatic isMobile={isMobile} />
      <div className={styles["create-plan-page__content"]}>
        {!isMobile && (
          <div className={styles["create-plan-page__steps"]}>
            <PlanSteps steps={steps} />
          </div>
        )}
        <div className={styles["create-plan-page__center"]}>
          {!isMobile && (
            <CreatePlanLimitator>
              <BackStepButton onClick={onClearData} />
            </CreatePlanLimitator>
          )}

          <div className={styles["create-plan-page__user"]}>
            <PlanUserText isMobile={isMobile} name={userData?.name!} />
          </div>

          <CreatePlanLimitator
            isMobile={isMobile}
            className={styles["create-plan-page__card"]}
          >
            <AutoCard
              title="Wolkswagen 2019Golf"
              subtitle={`Placa: ${userData?.carLicensePlate}`}
            />
            <div className={styles["create-plan-page__card--input-range"]}>
              <PlanContributionRange isMobile={isMobile} />
            </div>
            {!isMobile && (
              <div className={styles["create-plan-page__card--separator"]}>
                <Separator />
              </div>
            )}
          </CreatePlanLimitator>

          <div className={styles["create-plan-page__coverage"]}>
            <PlanCoverageSection isMobile={isMobile} />
          </div>
        </div>

        {!isMobile && (
          <div className={styles["create-plan-page__data"]}>
            <PlanBenefictsData />
          </div>
        )}
      </div>
    </div>
  );
};

export default CreatePlanPage;

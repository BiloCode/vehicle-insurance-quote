import { FC } from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";

import Title from "@/components/atoms/Title";
import PlanTabs from "@/components/organisms/PlanTabs";
import CoverageList from "@/components/organisms/CoverageList";
import CreatePlanLimitator from "@/components/atoms/CreatePlanLimitator";

type Props = {
  isMobile?: boolean;
};

const PlanCoverageSection: FC<Props> = ({ isMobile }) => {
  return (
    <CreatePlanLimitator
      isMobile={isMobile}
      className={classNames(styles["plan-coverage-section"], {
        [styles["plan-coverage-section--mobile"]]: isMobile,
      })}
    >
      <div className={styles["plan-coverage-section__title"]}>
        <Title fontSize="sm" lineHeight="lg">
          Agregar o quitar coberturas
        </Title>
      </div>
      <div className={styles["plan-coverage-section__tabs"]}>
        <PlanTabs
          data={[
            {
              title: "Protege a tu auto",
              component: <CoverageList />,
            },
            {
              title: "Protege a los que te rodean",
              component: <></>,
            },
            {
              title: "Mejora tu plan",
              component: <></>,
            },
          ]}
        />
      </div>
    </CreatePlanLimitator>
  );
};

export default PlanCoverageSection;

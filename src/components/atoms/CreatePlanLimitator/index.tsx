import { FC, PropsWithChildren } from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";

type Props = {
  isMobile?: boolean;
  className?: string;
};

const CreatePlanLimitator: FC<PropsWithChildren<Props>> = ({
  children,
  isMobile,
  className,
}) => {
  return (
    <div
      className={classNames(styles["create-plan-limitator"], className, {
        [styles["create-plan-limitator--mobile"]]: isMobile,
      })}
    >
      {children}
    </div>
  );
};

export default CreatePlanLimitator;

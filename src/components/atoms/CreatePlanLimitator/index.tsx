import { FC, PropsWithChildren } from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";

type Props = {
  className?: string;
};

const CreatePlanLimitator: FC<PropsWithChildren<Props>> = ({
  children,
  className,
}) => {
  return (
    <div className={classNames(styles["create-plan-limitator"], className)}>
      {children}
    </div>
  );
};

export default CreatePlanLimitator;

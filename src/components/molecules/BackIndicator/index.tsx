import { FC } from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";

import Icon from "@/components/atoms/Icon";
import Circular from "@/components/atoms/Circular";

type Props = {
  color?: "danger" | "gray";
};

const BackIndicator: FC<Props> = ({ color }) => {
  return (
    <div
      className={classNames(styles["back-indicator"], {
        [styles["back-indicator--danger"]]: color === "danger",
      })}
    >
      <Circular>
        <Icon.ArrowLeft />
      </Circular>
    </div>
  );
};

BackIndicator.defaultProps = {
  color: "gray",
};

export default BackIndicator;

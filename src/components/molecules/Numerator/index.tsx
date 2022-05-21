import { FC, PropsWithChildren } from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";

import Text from "@/components/atoms/Text";
import Color from "@/components/atoms/Color";
import Circular from "@/components/atoms/Circular";

type Props = {
  active?: boolean;
};

const Numerator: FC<PropsWithChildren<Props>> = ({ active, children }) => {
  return (
    <div
      className={classNames(styles.numerator, {
        [styles["numerator--active"]]: active,
      })}
    >
      <Circular>
        <Text fontSize="xs">
          {active && <Color.White>{children}</Color.White>}
          {!active && <Color.Gray4>{children}</Color.Gray4>}
        </Text>
      </Circular>
    </div>
  );
};

export default Numerator;

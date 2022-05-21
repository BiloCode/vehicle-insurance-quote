import { FC } from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";

import Text from "@/components/atoms/Text";
import Color from "@/components/atoms/Color";
import Title from "@/components/atoms/Title";

type Props = {
  isMobile?: boolean;
};

const LoginContentText: FC<Props> = ({ isMobile }) => {
  return (
    <div
      className={classNames(styles["login-content-text"], {
        [styles["login-content-text--mobile"]]: isMobile,
      })}
    >
      <div className={styles["login-content-text__title"]}>
        <Text fontSize={isMobile ? "2xs" : "xs"} lineHeight="xs" bold>
          ¡NUEVO!
        </Text>
        <Title
          fontSize={isMobile ? "lg" : "xl"}
          lineHeight={isMobile ? "xl" : "2xl"}
        >
          {!isMobile && (
            <>
              Seguro <Color.Red>Vehicular Tracking</Color.Red>
            </>
          )}
          {isMobile && (
            <>
              Seguro Vehicular <Color.Red>Tracking</Color.Red>{" "}
            </>
          )}
        </Title>
      </div>
      <Text fontSize={isMobile ? "sm" : "md"} fontFamily="roboto">
        Cuentanos donde le haras seguimiento a tu seguro
      </Text>
    </div>
  );
};

export default LoginContentText;

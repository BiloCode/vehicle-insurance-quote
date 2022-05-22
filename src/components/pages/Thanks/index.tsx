import classNames from "classnames";
import styles from "./styles.module.scss";

import useResponsive from "@/hooks/useResponsive";

import Text from "@/components/atoms/Text";
import Image from "@/components/atoms/Image";
import Title from "@/components/atoms/Title";
import Color from "@/components/atoms/Color";
import Button from "@/components/atoms/Button";
import Navbar from "@/components/organisms/Navbar";
import Container from "@/components/atoms/Container";

const ThanksPage = () => {
  const { isMobile } = useResponsive();

  return (
    <div
      className={classNames(styles["thanks-page"], {
        [styles["thanks-page--mobile"]]: isMobile,
      })}
    >
      <Navbar isStatic isMobile={isMobile} />
      <Container isMobile={isMobile} className={styles["thanks-page__content"]}>
        <div className={styles["thanks-page__content--left"]}>
          <div className={styles["thanks-page__content--image"]}>
            <Image.ThanksBackground />
          </div>
        </div>
        <div className={styles["thanks-page__content--right"]}>
          <div className={styles["thanks-page__content--right-content"]}>
            <Title
              fontSize={isMobile ? "lg" : "xl"}
              lineHeight={isMobile ? "xl" : "2xl"}
            >
              <Color.Red>¡Te damos la bienvenida! </Color.Red>
              Cuenta con nosotros para proteger tu vehículo
            </Title>
            <div className={styles["thanks-page__content--right-text"]}>
              <Text fontFamily="roboto" lineHeight="lg">
                Enviaremos la confirmación de compra de tu Plan Vehícular
                Tracking a tu correo:
              </Text>
              <Text fontFamily="roboto" lineHeight="lg" bold>
                joel.sanchez@gmail.com
              </Text>
            </div>

            <div className={styles["thanks-page__content--right-button"]}>
              <Button>COMO USAR MI SEGURO</Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ThanksPage;

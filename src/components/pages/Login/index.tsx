import { FC } from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";

import Navbar from "@/components/organisms/Navbar";
import Container from "@/components/atoms/Container";
import LoginForm from "@/components/organisms/LoginForm";
import LoginLeftBanner from "@/components/organisms/LoginLeftBanner";
import LoginLeftBannerMobile from "@/components/organisms/LoginLeftBannerMobile";

import useResponsive from "@/hooks/useResponsive";

const LoginPage: FC = () => {
  const { isMobile, isDesktop } = useResponsive();

  return (
    <Container
      isMobile={isMobile}
      className={classNames(styles["login-page"], {
        [styles["login-page--mobile"]]: isMobile,
      })}
    >
      <Navbar isMobile={isMobile} />

      {isDesktop && <LoginLeftBanner />}
      {isMobile && <LoginLeftBannerMobile />}

      <div className={styles["login-page__right-content"]}>
        <LoginForm isMobile={isMobile} />
      </div>
    </Container>
  );
};

export default LoginPage;

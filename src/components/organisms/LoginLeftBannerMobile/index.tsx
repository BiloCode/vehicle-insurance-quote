import styles from "./styles.module.scss";

import LoginContentText from "@/components/molecules/LoginContentText";
import Image from "@/components/atoms/Image";

const LoginLeftBannerMobile = () => {
  return (
    <div className={styles["login-left-banner-mobile"]}>
      <div className={styles["login-left-banner-mobile__text"]}>
        <LoginContentText isMobile />
      </div>
      <div className={styles["login-left-banner-mobile__image"]}>
        <Image.PersonAMobile />
      </div>
    </div>
  );
};

export default LoginLeftBannerMobile;

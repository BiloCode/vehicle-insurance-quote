import styles from "./styles.module.scss";

import Image from "@/components/atoms/Image";
import Copyright from "@/components/molecules/Copyright";
import LoginContentText from "@/components/molecules/LoginContentText";

const LoginLeftBanner = () => {
  return (
    <div className={styles["login-left-banner"]}>
      <Image.Background />
      <div className={styles["login-left-banner__foreground"]}>
        <div className={styles["login-left-banner__foreground-content"]}>
          <Image.PersonA />
          <LoginContentText />
        </div>
      </div>
      <div className={styles["login-left-banner__copyright"]}>
        <Copyright />
      </div>
    </div>
  );
};

export default LoginLeftBanner;

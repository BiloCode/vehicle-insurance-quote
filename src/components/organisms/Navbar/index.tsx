import { FC } from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";

import Text from "@/components/atoms/Text";
import Icon from "@/components/atoms/Icon";
import Color from "@/components/atoms/Color";
import Image from "@/components/atoms/Image";

type Props = {
  isStatic?: boolean;
  isMobile?: boolean;
};

const Navbar: FC<Props> = ({ isStatic, isMobile }) => {
  return (
    <nav
      className={classNames(styles.navbar, {
        [styles["navbar--static"]]: isStatic,
        [styles["navbar--mobile"]]: isMobile,
      })}
    >
      <Image.Logo />
      {!isMobile && (
        <div className={styles.navbar__contact}>
          <Text fontFamily="roboto" fontSize="xs" lineHeight="sm">
            ¿Tienes alguna duda?
          </Text>
          <div className={styles["navbar__contact-number"]}>
            <Icon.Phone />
            <Text fontSize="sm" fontFamily="roboto">
              <Color.Acian>(01) 411 6001</Color.Acian>
            </Text>
          </div>
        </div>
      )}

      {isMobile && (
        <div className={styles["navbar__contact-number"]}>
          <Icon.Phone />
          <Text fontSize="sm" fontFamily="roboto">
            Llamanos
          </Text>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

import { FC } from "react";
import styles from "./styles.module.scss";

import Text from "@/components/atoms/Text";
import Title from "@/components/atoms/Title";
import Image from "@/components/atoms/Image";

type Props = {
  title: string;
  subtitle: string;
};

const AutoCard: FC<Props> = ({ title, subtitle }) => {
  return (
    <div className={styles.autocard}>
      <div className={styles.autocard__content}>
        <Text fontSize="xs">{subtitle}</Text>
        <div className={styles.autocard__limitator}>
          <Title fontSize="sm" lineHeight="lg">
            {title}
          </Title>
        </div>
      </div>
      <figure className={styles.autocard__image}>
        <Image.PersonB />
      </figure>
    </div>
  );
};

export default AutoCard;

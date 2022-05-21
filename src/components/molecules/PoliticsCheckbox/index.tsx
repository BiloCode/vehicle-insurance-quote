import { ChangeEvent, FC } from "react";
import styles from "./styles.module.scss";

import Text from "@/components/atoms/Text";
import LinkURL from "@/components/atoms/LinkURL";
import Icon from "@/components/atoms/Icon";

type Props = {
  name: string;
  onChange(ev: ChangeEvent): void;
};

const PoliticsCheckbox: FC<Props> = ({ name, onChange }) => {
  return (
    <label className={styles["politics-checkbox"]} htmlFor={name}>
      <input id={name} name={name} type="checkbox" onChange={onChange} />
      <div className={styles["politics-checkbox__indicator"]}>
        <Icon.Check />
      </div>
      <Text fontSize="xs" fontFamily="roboto" lineHeight="sm">
        Acepto la{" "}
        <LinkURL to="/">Política de Protecciòn de Datos Personales</LinkURL>y
        los <LinkURL to="/">Términos y Condiciones.</LinkURL>
      </Text>
    </label>
  );
};

export default PoliticsCheckbox;

import { FC, memo } from "react";
import styles from "./styles.module.scss";

import Icon from "@/components/atoms/Icon";
import Text from "@/components/atoms/Text";
import Input, { Props } from "@/components/atoms/Input";

const InputWithOption: FC<Props> = (props) => {
  return (
    <div className={styles["input-with-option"]}>
      <div className={styles["input-with-option__select"]}>
        <Text>DNI</Text>
        <Icon.ArrowDown />
      </div>
      <Input {...props} />
    </div>
  );
};

export default memo(InputWithOption);

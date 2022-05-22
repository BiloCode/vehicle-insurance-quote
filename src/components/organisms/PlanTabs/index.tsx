import { FC, useState } from "react";
import styles from "./styles.module.scss";

import TabButton from "@/components/molecules/TabButton";

type Props = {
  data: {
    title: string;
    component: JSX.Element;
  }[];
};

const PlanTabs: FC<Props> = ({ data }) => {
  const [index, setIndex] = useState(0);

  const onChangeIndex = (i: number) => () => setIndex(i);

  return (
    <div className={styles["plan-tabs"]}>
      <div className={styles["plan-tabs__buttons"]}>
        {data.map((v, i) => (
          <TabButton
            text={v.title}
            active={index === i}
            onClick={onChangeIndex(i)}
          />
        ))}
      </div>
      <div className={styles["plan-tabs__container"]}>
        {data[index].component}
      </div>
    </div>
  );
};

export default PlanTabs;

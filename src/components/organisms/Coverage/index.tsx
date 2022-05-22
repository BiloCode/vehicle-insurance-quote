import { FC, memo } from "react";
import styles from "./styles.module.scss";

import useBoolean from "@/hooks/useBoolean";

import Text from "@/components/atoms/Text";
import ToggableTitle from "@/components/molecules/ToggableTitle";
import ActionButton, { ActionType } from "@/components/molecules/ActionButton";

type Elements = {
  jsxIcon: JSX.Element;
};

type Props = Elements & {
  title: string;
  state: ActionType;
  onClickAction(): void;
  defaultContentShow?: boolean;
};

const Coverage: FC<Props> = ({
  title,
  state,
  jsxIcon,
  onClickAction,
  defaultContentShow,
}) => {
  const [active, activeEvents] = useBoolean(defaultContentShow);

  return (
    <div className={styles.coverage}>
      <figure className={styles.coverage__icon}>{jsxIcon}</figure>
      <div className={styles.coverage__information}>
        <div className={styles.coverage__top}>
          <ToggableTitle active={active} onToggle={activeEvents.toggle}>
            {title}
          </ToggableTitle>
          <ActionButton type={state} onClick={onClickAction} />
        </div>
        {active && (
          <Text fontSize="sm">
            He salido de casa a las cuatro menos cinco para ir a la academia de
            ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici,
            na llego a la academia que está en el centro del pueblo en una plaza
            medio-grande y dejo donde siempre la bici atada con una pitón a un
            sitio de esos de poner las bicis y mucho más
          </Text>
        )}
      </div>
    </div>
  );
};

Coverage.defaultProps = {
  defaultContentShow: false,
};

export default memo(Coverage);

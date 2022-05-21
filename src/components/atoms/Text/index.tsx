import { FC, PropsWithChildren } from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";

import { FontFamily } from "@/core/types/FontFamily";
import { LineHeight } from "@/core/types/LineHeight";
import validators from "@/core/utils/validators";

type Props = {
  bold?: boolean;
  fontFamily?: FontFamily;
  lineHeight?: LineHeight;
  fontSize?: "sm" | "xs" | "md" | "2xs";
};

const Text: FC<PropsWithChildren<Props>> = ({
  bold,
  children,
  fontSize,
  lineHeight,
  fontFamily,
}) => {
  return (
    <p
      className={classNames(styles.text, {
        [styles["text--bold"]]: bold,
        [styles["text--sm"]]: fontSize === "sm",
        [styles["text--xs"]]: fontSize === "xs",
        [styles["text--md"]]: fontSize === "md",
        [styles["text--2xs"]]: fontSize === "2xs",
        ...validators.fonts("text", styles, fontFamily),
        ...validators.lineHeight("text", styles, lineHeight),
      })}
    >
      {children}
    </p>
  );
};

Text.defaultProps = {
  fontSize: "md",
  lineHeight: "md",
  fontFamily: "lato",
};

export default Text;

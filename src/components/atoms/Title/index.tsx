import { FC, PropsWithChildren } from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";

import validators from "@/core/utils/validators";

import { FontFamily } from "@/core/types/FontFamily";
import { LineHeight } from "@/core/types/LineHeight";

type Props = {
  fontFamily?: FontFamily;
  lineHeight?: LineHeight;
  fontSize?: "sm" | "md" | "lg" | "xl" | "2xl" | "xs";
};

const Title: FC<PropsWithChildren<Props>> = ({
  fontSize,
  children,
  lineHeight,
  fontFamily,
}) => {
  return (
    <h1
      className={classNames(styles.title, {
        [styles["title--lg"]]: fontSize === "lg",
        [styles["title--xl"]]: fontSize === "xl",
        [styles["title--md"]]: fontSize === "md",
        [styles["title--xs"]]: fontSize === "xs",
        [styles["title--sm"]]: fontSize === "sm",
        [styles["title--2xl"]]: fontSize === "2xl",
        ...validators.fonts("title", styles, fontFamily),
        ...validators.lineHeight("title", styles, lineHeight),
      })}
    >
      {children}
    </h1>
  );
};

Title.defaultProps = {
  fontSize: "md",
  lineHeight: "md",
  fontFamily: "lato",
};

export default Title;

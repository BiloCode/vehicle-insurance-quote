import { FontFamily } from "../types/FontFamily";
import { LineHeight } from "../types/LineHeight";

type Styles = Record<string, string>;

const lineHeight = (base: string, css: Styles, lh?: LineHeight) => {
  return {
    [css[`${base}--line-sm`]]: lh === "sm",
    [css[`${base}--line-lg`]]: lh === "lg",
    [css[`${base}--line-xl`]]: lh === "xl",
    [css[`${base}--line-xs`]]: lh === "xs",
    [css[`${base}--line-2xl`]]: lh === "2xl",
  };
};

const fonts = (base: string, css: Styles, ff?: FontFamily) => {
  return {
    [css[`${base}--roboto`]]: ff === "roboto",
  };
};

export default {
  fonts,
  lineHeight,
};

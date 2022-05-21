import { ReactSVG } from "react-svg";

import IconAdd from "@/assets/icons/ic_add.svg";
import IconTheft from "@/assets/icons/ic_theft.svg";
import IconCheck from "@/assets/icons/ic_check.svg";
import IconRemove from "@/assets/icons/ic_remove.svg";
import IconDamage from "@/assets/icons/ic_damage.svg";
import IconArrowUp from "@/assets/icons/ic_arrow_up.svg";
import IconArrowLeft from "@/assets/icons/ic_arrow_left.svg";
import IconArrowDown from "@/assets/icons/ic_arrow_down.svg";
import IconPerdidaTotal from "@/assets/icons/ic_perdidatotal.svg";

const Add = () => <ReactSVG src={IconAdd} />;
const Theft = () => <ReactSVG src={IconTheft} />;
const Check = () => <ReactSVG src={IconCheck} />;
const Damage = () => <ReactSVG src={IconDamage} />;
const Remove = () => <ReactSVG src={IconRemove} />;
const ArrowUp = () => <ReactSVG src={IconArrowUp} />;
const ArrowLeft = () => <ReactSVG src={IconArrowLeft} />;
const ArrowDown = () => <ReactSVG src={IconArrowDown} />;
const PerdidaTotal = () => <ReactSVG src={IconPerdidaTotal} />;

export default {
  Add,
  Theft,
  Check,
  Remove,
  Damage,
  ArrowUp,
  ArrowLeft,
  ArrowDown,
  PerdidaTotal,
};

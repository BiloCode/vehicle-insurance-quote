import PageLogo from "@/assets/images/logo.svg";

import HomePageBackground from "@/assets/images/background.svg";

import PagePersonA from "@/assets/images/person_a.svg";
import PagePersonB from "@/assets/images/person_b.svg";
import PagePersonC from "@/assets/images/person_c.svg";

const Logo = () => <img src={PageLogo} alt="page-logo" />;
const Background = () => <img src={HomePageBackground} alt="background" />;

const PersonA = () => <img src={PagePersonA} alt="person-a" />;
const PersonB = () => <img src={PagePersonB} alt="person-b" />;
const PersonC = () => <img src={PagePersonC} alt="person-c" />;

export default {
  Logo,
  PersonA,
  PersonB,
  PersonC,
  Background,
};

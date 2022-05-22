import PageLogo from "@/assets/images/logo.svg";

import ThanksPageBackground from "@/assets/images/thanks.svg";
import HomePageBackground from "@/assets/images/background.svg";

import PagePersonA from "@/assets/images/person_a.svg";
import PagePersonAMobile from "@/assets/images/person_a_mb.svg";
import PagePersonB from "@/assets/images/person_b.svg";
import PagePersonC from "@/assets/images/person_c.svg";

const Logo = () => <img src={PageLogo} alt="page-logo" draggable="false" />;

const Background = () => (
  <img src={HomePageBackground} draggable="false" alt="background" />
);

const PersonA = () => (
  <img src={PagePersonA} draggable="false" alt="person-a" />
);

const PersonAMobile = () => (
  <img src={PagePersonAMobile} draggable="false" alt="person-a" />
);

const PersonB = () => (
  <img src={PagePersonB} draggable="false" alt="person-b" />
);

const PersonC = () => (
  <img src={PagePersonC} draggable="false" alt="person-c" />
);

const ThanksBackground = () => (
  <img src={ThanksPageBackground} draggable="false" alt="person-c" />
);

export default {
  Logo,
  PersonA,
  PersonAMobile,
  ThanksBackground,
  PersonB,
  PersonC,
  Background,
};

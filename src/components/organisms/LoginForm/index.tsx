import { FC } from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";

import useLogin from "@/hooks/useLogin";

import Input from "@/components/atoms/Input";
import Title from "@/components/atoms/Title";
import Button from "@/components/atoms/Button";
import InputWithOption from "@/components/molecules/InputWithOption";
import PoliticsCheckbox from "@/components/molecules/PoliticsCheckbox";

type Props = {
  isMobile?: boolean;
};

const LoginForm: FC<Props> = ({ isMobile }) => {
  const { loading, disabled, onChange, onSubmit, errors, constraints } =
    useLogin();

  return (
    <div
      className={classNames(styles["login-form"], {
        [styles["login-form--mobile"]]: isMobile,
      })}
    >
      <Title fontSize={isMobile ? "md" : "lg"}>Dejanos tus datos</Title>
      <form onSubmit={onSubmit}>
        <div className={styles["login-form__fields"]}>
          <InputWithOption
            name="dni"
            placeholder="Nro de doc"
            isError={"dni" in errors}
            onChange={onChange("dni")}
            pattern={constraints.dni.pattern}
            maxLength={constraints.dni.maxLength}
            minLength={constraints.dni.minLength}
          />
          <Input
            name="phone"
            placeholder="Celular"
            isError={"phone" in errors}
            onChange={onChange("phone")}
            maxLength={constraints.phone.maxLength}
            minLength={constraints.placa.minLength}
          />
          <Input
            name="placa"
            placeholder="Placa"
            isError={"placa" in errors}
            onChange={onChange("placa")}
            maxLength={constraints.placa.maxLength}
            minLength={constraints.placa.minLength}
          />
        </div>
        <div className={styles["login-form__checkbox"]}>
          <PoliticsCheckbox name="politics" onChange={onChange("politics")} />
        </div>
        <div className={styles["login-form__button"]}>
          <Button type="submit" loading={loading} disabled={disabled}>
            Cotízalo
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;

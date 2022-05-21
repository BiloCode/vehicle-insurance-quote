import { FC } from "react";

import useLogin from "@/hooks/useLogin";

import Icon from "@/components/atoms/Icon";
import Input from "@/components/atoms/Input";
import Title from "@/components/atoms/Title";
import Button from "@/components/atoms/Button";
import Coverage from "@/components/organisms/Coverage";
import Numerator from "@/components/molecules/Numerator";
import BackIndicator from "@/components/molecules/BackIndicator";

const Home: FC = () => {
  const { onChange, onSubmit, errors, constraints } = useLogin();

  return (
    <div>
      <div style={{ width: 288, padding: 6 }}>
        <Title>Dejanos tus datos</Title>
        <Numerator>1</Numerator>
        <Numerator active>2</Numerator>
        <BackIndicator color="danger" />
        <form onSubmit={onSubmit} style={{ display: "grid", rowGap: 16 }}>
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
          <div style={{ width: 192 }}>
            <Button type="submit">Cotízalo</Button>
          </div>
        </form>
      </div>
      <div style={{ width: 384 }}>
        <Coverage
          state="add"
          title="Llanta Robada"
          defaultContentShow
          jsxIcon={<Icon.Theft />}
          onClickAction={console.log}
        />
        <Coverage
          state="add"
          title="Llanta Robada"
          jsxIcon={<Icon.Theft />}
          onClickAction={console.log}
        />
        <Coverage
          state="add"
          title="Llanta Robada"
          jsxIcon={<Icon.Theft />}
          onClickAction={console.log}
        />
      </div>
    </div>
  );
};

export default Home;

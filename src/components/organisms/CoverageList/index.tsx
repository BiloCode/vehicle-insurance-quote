import Icon from "@/components/atoms/Icon";
import Coverage from "@/components/organisms/Coverage";

const CoverageList = () => {
  return (
    <div>
      <Coverage
        state="remove"
        title="Llanta Robada"
        defaultContentShow
        jsxIcon={<Icon.Theft />}
        onClickAction={console.log}
      />
      <Coverage
        state="add"
        title="Choque y/o pasarte la luz roja "
        jsxIcon={<Icon.Damage />}
        onClickAction={console.log}
      />
      <Coverage
        state="add"
        title="Atropello en la vía Evitamiento"
        jsxIcon={<Icon.PerdidaTotal />}
        onClickAction={console.log}
      />
    </div>
  );
};

export default CoverageList;

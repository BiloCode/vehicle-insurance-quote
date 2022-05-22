import { ChangeEvent, useEffect } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import { InputConstraints } from "@/core/types/InputConstraints";
import useBoolean from "./useBoolean";
import getUserData from "@/core/services/getUserData";
import { useUserContext } from "@/store/UserContext/context";

type FormData = {
  dni: string;
  phone: string;
  placa: string;
  politics: boolean;
};

type Params = Partial<{
  pattern: string;
  minLength: number;
  maxLength: number;
}>;

const useLogin = () => {
  const { onChangeUserData } = useUserContext();
  const { register, unregister, setValue, handleSubmit, formState } =
    useForm<FormData>();

  const [loading, loadingEvents] = useBoolean(false);
  const [politics, politicsEvents] = useBoolean(false);

  const constraints: InputConstraints<FormData, Params> = {
    placa: {},
    dni: { pattern: "[0-9]{8}", maxLength: 8, minLength: 8 },
    politics: {},
    phone: {
      maxLength: 9,
      minLength: 9,
    },
  };

  const onChange = (key: keyof FormData) => {
    return (ev: ChangeEvent<HTMLInputElement>) => {
      if (key === "politics") {
        politicsEvents.change(ev.target.checked);
        setValue(key, ev.target.checked);
        return;
      }

      setValue(key, ev.target.value);
    };
  };

  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    loadingEvents.on();

    const { dni, placa } = values as FormData;

    const firstNumber = Number(dni.split("")[0]);
    const fakeUserId = Math.min(firstNumber, 100);

    try {
      const data = await getUserData(fakeUserId);
      onChangeUserData({ ...data, carLicensePlate: placa });
    } catch (error) {
      alert((error as Error).message);
    } finally {
      loadingEvents.off();
    }
  };

  useEffect(() => {
    register("placa", { required: true });
    register("politics", { required: true });

    register("dni", {
      required: true,
      pattern: {
        message: "---",
        value: new RegExp(constraints.dni.pattern || ""),
      },
      maxLength: constraints.dni.maxLength,
      minLength: constraints.dni.minLength,
    });

    register("phone", {
      required: true,
      minLength: constraints.phone.minLength,
      maxLength: constraints.placa.maxLength,
    });

    return () => {
      unregister("dni");
      unregister("phone");
      unregister("placa");
      unregister("politics");
    };
  }, []);

  return {
    loading,
    onChange,
    constraints,
    disabled: politics === false,
    errors: formState.errors,
    onSubmit: handleSubmit(onSubmit),
  };
};

export default useLogin;

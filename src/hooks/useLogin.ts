import { ChangeEvent, useEffect } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import { InputConstraints } from "@/core/types/InputConstraints";

type FormData = {
  phone: string;
  placa: string;
};

type Params = Partial<{
  minLength: number;
  maxLength: number;
}>;

const useLogin = () => {
  const { register, unregister, setValue, handleSubmit, formState } =
    useForm<FormData>();

  const constraints: InputConstraints<FormData, Params> = {
    placa: {},
    phone: {
      maxLength: 9,
      minLength: 9,
    },
  };

  const onChange = (key: keyof FormData) => {
    return (ev: ChangeEvent<HTMLInputElement>) => {
      setValue(key, ev.target.value);
    };
  };

  const onSubmit: SubmitHandler<FieldValues> = (values) => {
    console.log(values);
  };

  useEffect(() => {
    register("placa", { required: true });
    register("phone", {
      required: true,
      minLength: constraints.phone.minLength,
      maxLength: constraints.placa.maxLength,
    });

    return () => {
      unregister("phone");
      unregister("placa");
    };
  }, []);

  return {
    onChange,
    constraints,
    errors: formState.errors,
    onSubmit: handleSubmit(onSubmit),
  };
};

export default useLogin;

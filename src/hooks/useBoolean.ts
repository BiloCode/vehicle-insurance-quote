import { useCallback, useState } from "react";

export type UseBooleanEvents = {
  on(): void;
  off(): void;
  toggle(): void;
  change(value: boolean): void;
};

export type UseBoolean = [boolean, UseBooleanEvents];

const useBoolean = (defaultValue?: boolean): UseBoolean => {
  const [value, setValue] = useState<boolean>(defaultValue || false);

  const on = useCallback(() => setValue(() => true), []);
  const off = useCallback(() => setValue(() => false), []);
  const toggle = useCallback(() => setValue((v) => !v), []);

  const change = useCallback((v: boolean) => setValue(v), []);

  return [value, { on, off, toggle, change }];
};

export default useBoolean;

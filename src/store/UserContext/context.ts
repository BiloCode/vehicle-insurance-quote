import { createContext, useContext } from "react";

import { User } from "@/core/types/User";

interface IContext {
  userData: User | null;
  onClearData(): void;
  onChangeUserData(data: User): void;
}

export const UserContext = createContext<Partial<IContext>>({});

export const useUserContext = () => {
  return useContext(UserContext) as Required<IContext>;
};

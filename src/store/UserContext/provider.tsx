import { FC, PropsWithChildren, useState } from "react";

import { User } from "@/core/types/User";
import { UserContext } from "./context";

const UserProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  const [userData, setUserData] = useState<User | null>(null);

  const onClearData = () => setUserData(null);

  const onChangeUserData = (data: User) => {
    setUserData(data);
  };

  return (
    <UserContext.Provider value={{ userData, onChangeUserData, onClearData }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

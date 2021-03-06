import { FC } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { useUserContext } from "@/store/UserContext/context";

import Login from "@/components/pages/Login";
import ThanksPage from "@/components/pages/Thanks";
import CreatePlanPage from "@/components/pages/CreatePlan";

const Router: FC = () => {
  const { userData } = useUserContext();

  return (
    <BrowserRouter>
      {!userData && (
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      )}
      {userData && (
        <Routes>
          <Route path="/create-plan" element={<CreatePlanPage />} />
          <Route path="/thanks" element={<ThanksPage />} />
          <Route path="*" element={<Navigate to="/create-plan" />} />
        </Routes>
      )}
    </BrowserRouter>
  );
};

export default Router;

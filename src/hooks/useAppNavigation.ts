import { useNavigate } from "react-router-dom";

const useAppNavigation = () => {
  const navigate = useNavigate();

  return {
    navigateTo: (key: string) => () => navigate(key),
  };
};

export default useAppNavigation;

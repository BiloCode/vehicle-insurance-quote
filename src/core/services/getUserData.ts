import { API_URL } from "@/config/api";

const getUserData = async (userId: number) => {
  const request = await fetch(`${API_URL}/users/${userId}`);
  const response = await request.json();

  return response;
};

export default getUserData;

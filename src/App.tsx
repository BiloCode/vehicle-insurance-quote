import Router from "@/router";
import UserProvider from "@/store/UserContext/provider";

function App() {
  return (
    <UserProvider>
      <Router />
    </UserProvider>
  );
}

export default App;

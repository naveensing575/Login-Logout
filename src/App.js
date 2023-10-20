import React, { useContext } from "react";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import MainHeader from "./Components/MainHeader/MainHeader";
import AuthContext from "./Context/auth-context";

function App() {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <>
      <MainHeader />
      <main>
        {!isLoggedIn && <Login />}
        {isLoggedIn && <Home />}
      </main>
    </>
  );
}

export default App;

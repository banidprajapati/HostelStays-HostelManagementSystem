import React, { useState } from "react";
import { LoginEmail } from "./LoginEmail";
import AdminPage from "./AdminPage";

export const AuthenticationPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Check if the user is admin and password is correct
    if (email === "karkiaayush901@gmail.com" && password === "Helloworld") {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  };

  return (
    <div>
      {loggedIn ? (
        <AdminPage />
      ) : (
        <div>
          <LoginEmail
            setEmail={setEmail}
            setPassword={setPassword}
            handleLogin={handleLogin}
          />
        </div>
      )}
    </div>
  );
};

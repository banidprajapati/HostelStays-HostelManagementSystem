// import React from "react";
// import { LoginEmail } from "./LoginEmail";

// const AuthenticationPage = () => {
//   return (
//     <div>
//       <LoginEmail />
//     </div>
//   );
// };

// export default AuthenticationPage;


// AuthenticationPage.jsx working wala code

import React, { useState } from "react";
import { LoginEmail } from "./LoginEmail";
import AdminPage from "./AdminPage";

const AuthenticationPage = () => {
  const [email, setEmail] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Check if the user is admin
    if (email === "karkiaayush901@gmail.com") {
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
          <LoginEmail setEmail={setEmail} handleLogin={handleLogin} />
        </div>
      )}
    </div>
  );
};

export default AuthenticationPage;







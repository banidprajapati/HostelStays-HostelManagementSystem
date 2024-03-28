
// import React, { useState } from "react";
// import { Login } from "./Login";
// import { SignUp } from "./Signup";

// export const LoginEmail = () => {
//   const [email, setEmail] = useState("");
//   const [loggedIn, setLoggedIn] = useState(false);
//   const [showSignUp, setShowSignUp] = useState(false);

//   const handleLogin = () => {
//     // Here you can check if the email is correct
//     if (email === "correct@example.com") {
//       setLoggedIn(true);
//     } else {
//       setShowSignUp(true);
//     }
//   };

//   if (loggedIn) {
//     return <Login email={email} handleLogin={handleLogin} />;
//   }

//   if (showSignUp) {
//     return <SignUp email={email} handleLogin={handleLogin} />;
//   }

//   return (
//     <div className="p-0 flex h-screen">
//       <div className="w-1/2 h-full">
//         <img
//           src="https://cdn.britannica.com/68/178668-050-DA998E6C/Durbar-Square-heart-district-Kathmandu-earthquake-Nepal-April-25-2015.jpg"
//           alt="Nepal"
//           className="w-full h-full object-cover p-0"
//         />
//       </div>

//       <div className="w-1/2 flex items-center justify-center p-8">
//         <div className="text-left m-0 p-0">
//           <h1 className="text-3xl font-bold mb-4">Log in or Create an Account</h1>
//           <p className="mb-2">Email Address:</p>
//           <div className="mb-4 max-w-85 flex flex-col">
//             <input
//               type="text"
//               placeholder="Enter your email address"
//               className="border-b border-gray-400 focus:outline-none mb-2 p-2"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             <button
//               className="bg-blue-500 text-white px-4 py-2 rounded-md"
//               onClick={handleLogin}
//             >
//               Continue
//             </button>
//           </div>
//           <div className="text-blue-500">Forget Password?</div>
//         </div>
//       </div>
//     </div>
//   );
// };


// Admin wala

// LoginEmail.jsx
import React, { useState } from "react";
import { Login } from "./Login";
import { SignUp } from "./Signup";

export const LoginEmail = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleContinue = () => {
    // Check if the email is correct
    if (email === "correct@example.com") {
      setShowPassword(true);
    } else if (email === "karkiaayush901@gmail.com") {
      // For admin, directly call handleLogin with email and password
      handleLogin(email, password);
    } else {
      setShowPassword(true);
    }
  };

  const handleSignUp = () => {
    // Here you can perform signup logic, for simplicity, we're just checking if passwords match
    if (password === confirmPassword) {
      alert("Signed up successfully!");
      handleLogin(email, password); // Automatically login after signup for simplicity
    } else {
      alert("Passwords do not match. Please try again.");
    }
  };

  return (
    <div className="p-0 flex h-screen">
      <div className="w-1/2 h-full">
        <img
          src="https://cdn.britannica.com/68/178668-050-DA998E6C/Durbar-Square-heart-district-Kathmandu-earthquake-Nepal-April-25-2015.jpg"
          alt="Nepal"
          className="w-full h-full object-cover p-0"
        />
      </div>

      <div className="w-1/2 flex items-center justify-center p-8">
        <div className="text-left m-0 p-0">
          <h1 className="text-3xl font-bold mb-4">Log in or Create an Account</h1>
          <p className="mb-2">Email Address:</p>
          <div className="mb-4 max-w-85 flex flex-col">
            <input
              type="text"
              placeholder="Enter your email address"
              className="border-b border-gray-400 focus:outline-none mb-2 p-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
              onClick={handleContinue}
            >
              Continue
            </button>
          </div>
          <div className="text-blue-500">Forget Password?</div>
          {showPassword && (
            <>
              <input
                type="password"
                placeholder="Enter your password"
                className="border-b border-gray-400 focus:outline-none mb-2 p-2"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {email !== "karkiaayush901@gmail.com" && ( // If not admin, ask for confirmation password for signup
                <input
                  type="password"
                  placeholder="Confirm password"
                  className="border-b border-gray-400 focus:outline-none mb-2 p-2"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              )}
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
                onClick={email !== "karkiaayush901@gmail.com" ? handleSignUp : () => handleLogin(email, password)}
              >
                {email !== "karkiaayush901@gmail.com" ? "Sign Up" : "Login"}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};




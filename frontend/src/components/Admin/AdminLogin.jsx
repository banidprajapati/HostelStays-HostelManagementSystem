// import React, { useState } from "react";
// import axios from "axios";

// const AdminLogin = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleLogin = async () => {
//     try {
//       if (!email || !password) {
//         setError("Please fill in all fields.");
//         return;
//       }
//       const response = await axios.post("/login", { email, password });
//       if (response.data.success) {
//         console.log("Login successful!");
//         // Redirect to admin dashboard or update UI
//       } else {
//         setError("Invalid email or password.");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       setError("An error occurred. Please try again later.");
//     }
//   };

//   return (
//     <div className="flex h-screen">
//       {/* Image Section */}
//       <div className="w-1/2">
//         <img
//           src="https://cdn.britannica.com/68/178668-050-DA998E6C/Durbar-Square-heart-district-Kathmandu-earthquake-Nepal-April-25-2015.jpg"
//           alt="Nepal"
//           className="w-full h-full object-cover"
//         />
//       </div>

//       {/* Login Form Section */}
//       <div className="w-1/2 flex items-center justify-center p-8">
//         <div>
//           <h1 className="text-3xl font-bold mb-4">Admin Login</h1>
//           <div className="mb-4 max-w-85 flex flex-col">
//             <input
//               type="text"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="border-b border-gray-400 focus:outline-none mb-2 p-2"
//             />
//             <input
//               type="password"
//               placeholder="Enter your password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="border-b border-gray-400 focus:outline-none mb-2 p-2"
//             />
//             <button
//               className="bg-blue-500 text-white px-4 py-2 rounded-md"
//               onClick={handleLogin}
//             >
//               Continue
//             </button>
//           </div>
//           {error && <div className="text-red-500 mb-2">{error}</div>}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminLogin;

import React, { useState } from "react";
import axios from "axios";

export const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      if (!email || !password) {
        setError("Please fill in all fields.");
        return;
      }
      const response = await axios.post("http://localhost:5173/admin_details", {
        email,
        password,
      });
      if (response.data.success) {
        console.log("Login successful!");
        // Redirect to admin dashboard
        window.location.href = "/admin-dashboard";
      } else {
        setError("Invalid email or password.");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="flex h-screen">
      {/* Image Section */}
      <div className="w-1/2">
        <img
          src="https://cdn.britannica.com/68/178668-050-DA998E6C/Durbar-Square-heart-district-Kathmandu-earthquake-Nepal-April-25-2015.jpg"
          alt="Nepal"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Login Form Section */}
      <div className="w-1/2 flex items-center justify-center p-8">
        <div>
          <h1 className="text-3xl font-bold mb-4">Admin Login</h1>
          <div className="mb-4 max-w-85 flex flex-col">
            <input
              type="text"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-b border-gray-400 focus:outline-none mb-2 p-2"
            />
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border-b border-gray-400 focus:outline-none mb-2 p-2"
            />
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
              onClick={handleLogin}
            >
              Continue
            </button>
          </div>
          {error && <div className="text-red-500 mb-2">{error}</div>}
        </div>
      </div>
    </div>
  );
};

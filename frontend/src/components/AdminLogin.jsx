import React, { useState } from "react";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleLogin = () => {
    if (!email || !password) {
      setShowError(true);
    } else if (
      email === "karkiaayush901@gmail.com" &&
      password === "Helloworld"
    ) {
      setShowSuccess(true);
    } else {
      setShowError(true);
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
          {showSuccess && (
            <div className="text-green-500 mb-2">Login Successful!</div>
          )}
          <h1 className="text-3xl font-bold mb-4">Admin Login</h1>
          <div className="mb-4 max-w-85 flex flex-col">
            <input
              type="text"
              placeholder="Enter your email"
              className="border-b border-gray-400 focus:outline-none mb-2 p-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Enter your password"
              className="border-b border-gray-400 focus:outline-none mb-2 p-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
              onClick={handleLogin}
            >
              Continue
            </button>
          </div>
          {showError &&
            (email && password ? (
              <div className="text-red-500 mb-2">
                Invalid username or password.
              </div>
            ) : (
              <div className="text-red-500 mb-2">
                Please fill in all fields.
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;

// import React, { useState } from "react";
// import axios from "axios"; // Import Axios for making HTTP requests

// const AdminLogin = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showSuccess, setShowSuccess] = useState(false);
//   const [showError, setShowError] = useState(false);

//   const handleLogin = async () => {
//     try {
//       const response = await axios.post(
//         "http://localhost:3000/api/admin_details",
//         { email, password }
//       );
//       // Check if the login was successful based on the response from the server
//       if (response.data.success) {
//         setShowSuccess(true);
//       } else {
//         setShowError(true);
//       }
//     } catch (error) {
//       console.error("Error logging in:", error);
//       setShowError(true);
//     }
//   };

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
//           {showSuccess && (
//             <div className="text-green-500 mb-2">Login Successful!</div>
//           )}
//           <h1 className="text-3xl font-bold mb-4">Admin Login</h1>
//           <div className="mb-4 max-w-85 flex flex-col">
//             <input
//               type="text"
//               placeholder="Enter your email"
//               className="border-b border-gray-400 focus:outline-none mb-2 p-2"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             <input
//               type="password"
//               placeholder="Enter your password"
//               className="border-b border-gray-400 focus:outline-none mb-2 p-2"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <button
//               className="bg-blue-500 text-white px-4 py-2 rounded-md"
//               onClick={handleLogin}
//             >
//               Continue
//             </button>
//           </div>
//           {showError &&
//             (email && password ? (
//               <div className="text-red-500 mb-2">
//                 Invalid username or password.
//               </div>
//             ) : (
//               <div className="text-red-500 mb-2">
//                 Please fill in all fields.
//               </div>
//             ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminLogin;

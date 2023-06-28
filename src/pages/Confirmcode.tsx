import React from "react";
import "./styles/register.css";
import bg from "../assets/backg.png";

const Login: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row flex-b h-screen items-center">
      <div className="w-full md:w-1/3">
        <div className="flex justify-center items-center md:h-screen">
          <img
            src={bg}
            className="hidden xl:block"
            alt=""
            height={600}
            width={600}
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-full md:w-2/3 mx-auto mt-2 p-12">
        <div className="flex  mb-10">
          <h1 className="text-3xl">Enter confirmation code</h1>
        </div>
        <h3 className="text-center">
          We emailed you a code. Please input the code here for account
          verification
        </h3>
        <div className="flex justify-center mt-8">
          <input
            type="text"
            className="w-16 h-16 bg-gray-200  rounded-lg mx-4 text-center"
          />
          <input
            type="text"
            className="w-16 h-16 bg-gray-200 rounded-lg mx-4 text-center"
          />
          <input
            type="text"
            className="w-16 h-16 bg-gray-200 rounded-lg mx-4 text-center"
          />
          <input
            type="text"
            className="w-16 h-16 bg-gray-200 rounded-lg mx-4 text-center"
          />
        </div>

        <div className="flex items-center w-full md:w-1/2 justify-between mt-6">
          <button
            className="appearance-none rounded text-white text-lg font-bold bg-blue-900 hover:bg-blue-700 w-full py-4 px-4 leading-tight focus:outline-none focus:shadow-outline"
            type="button"
          >
            Create account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

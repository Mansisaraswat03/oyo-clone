import Head from "next/head";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);

  const router = useRouter();

  const handleSignup = async () => {
    // Signup logic
  };

  const handleToggle = () => {
    setLogin(!login);
  };

  const handleLogin = async () => {
    // Login logic
  };

  return (
    <div>
      <Head>
        <title>OYO - Login !</title>
      </Head>
      <div className="flex flex-col lg:flex-row h-screen justify-center items-center relative bg-login-background bg-no-repeat bg-cover opacity-85">
        <div className="hidden absolute lg:top-10 lg:left-10 lg:flex items-center text-white">
          <h2 className="text-5xl font-bold mr-5">OYO</h2>
          <p className="font-bold text-2xl">
            Hotels and homes across 800 cities, 24+ countries
          </p>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center lg:w-9/12">
          <div className="hidden lg:flex flex-col text-white lg:w-6/12">
            <p className="font-bold text-5xl text-justify">
              There’s a smarter way to OYO around
            </p>
            <p className="text-2xl mt-5 text-justify">
              Sign up with your phone number and get exclusive access to
              discounts and savings on OYO stays and with our many travel
              partners.
            </p>
          </div>
          <div className="ml-0 lg:ml-20 pb-20 lg:w-6/12 border bg-slate-50">
            <p className="h-10 flex items-center px-10 bg-gradient-to-r from-red-300 to bg-red-600 text-lg font-bold text-white">
              Sign up & Get ₹500 OYO Money
            </p>
            <div className="px-10">
              <h3 className="text-5xl font-bold my-5">Login / Signup</h3>
              <p className="font-bold text-lg mb-1">
                {login ? "Login" : "Signup"} to continue
              </p>
              {!login && (
                <input
                  type="text"
                  placeholder="Enter your name..."
                  className="outline-none border my-3 border-black px-3 py-1 w-full lg:w-96 h-10"
                  onChange={(e) => setName(e.target.value)}
                />
              )}
              <input
                type="email"
                placeholder="Enter your email..."
                className="outline-none border my-3 border-black px-3 py-1 w-full lg:w-96 h-10"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Enter your password..."
                className="outline-none border my-3 border-black px-3 py-1 w-full lg:w-96 h-10"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="submit"
                className="w-full lg:w-96 h-14 text-lg font-bold bg-red-500 hover:cursor-pointer hover:bg-red-600 text-white my-5 rounded-lg"
                onClick={login ? handleLogin : handleSignup}
              >
                {login ? "Login" : "Sign Up"}
              </button>
              <p className="my-1 text-xl">
                <span>
                  {login ? "Don't have an account?" : "Already have an account?"}
                </span>
                <span
                  className="ml-1 border-b-2 border-red-500 text-red-600 pb-1 hover:cursor-pointer"
                  onClick={handleToggle}
                >
                  {login ? "Sign Up" : "Login"}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
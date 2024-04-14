"use client";
import useWarningToast from "@/lib/warningToast";
import { LockClosedIcon, MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation"; // Updated import
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { CgMail } from "react-icons/cg";

import { z } from "zod";

const LoginCard = () => {
  const showWarningToast = useWarningToast();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [emailInPutError, setEmailInputError] = useState(false);
  const [passwordInPutError, setPasswordInputError] = useState(false);
  const { data: session, status, update } = useSession();
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  

  useEffect(() => {
    if (session) {
      setIsLoggedIn(true);
      router.push("/")
    } else {
      setIsLoggedIn(false);
    }
  }, [session]);

  const handleFacebookLogin = async () => {
    const result = await signIn("facebook", {
      redirect: false, // Prevent default NextAuth redirect
    });

    if (result?.error) {
      console.error("Facebook login error:", result?.error);
      // Handle login errors (optional)
    } else {
      // Login successful!
      router.push("/"); // Navigate to user profile page (or any other page)
    }
  };

  const handleGooleLogin = async () => {
    try {
      const result = await signIn("google", {
        redirect: false, // Prevent default NextAuth redirect
      });

      if (result?.error) {
        console.error("Facebook login error:", result?.error);
        // Handle login errors (optional)
      } else {
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogin = async () => {
    // Perform basic validation for login
    if (!email.trim() || !password.trim()) {
      setError("Please enter both email and password.");
      showWarningToast("Please enter both email and password");

      return;
    }

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      if (res?.error) {
        setError("Invalid  Credentials!");

        toast.error("Invalid  Credentials!");
        return;
      }

      router.push("/");

      // Trigger toast notification
    } catch (error) {
      console.log("message is :", error);
      toast.error("Something Wrong !!");
    }

    // Perform login logic
    // Example: You can call an API for authentication here

    // Reset fields after successful login
    setEmail("");
    setPassword("");
    setError("");
  };

  const handleRegister = async (e: any) => {
    if (
      !email.trim() ||
      !password.trim() ||
      !name.trim() ||
      !confirmPassword.trim()
    ) {
      setError("Please enter both email and password.");
      showWarningToast("Please Enter All Field");

      return;
    }
    e.preventDefault();

    try {
      const res = await fetch("api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          confirmPassword,
        }),
      });

      if (res.ok) {
        router.push("/");
        toast.success("User Registration Successful");
      } else {
        toast.error("User registration failed");
      }
    } catch (error) {
      toast.custom(`error is ${error}`);
    }
  };

  return (
    <section className="bg-white text-gray-500 w-full min-h-full flex flex-col p-2 overflow-hidden items-center">
      <h2 className="text-wrap text-3xl pt-8 pb-16">E Learning</h2>
      <Toaster />
      <div className="bg-gray-500/60 shadow text-white rounded-full flex items-center px-2 py-2 justify-between w-1/2">
        <div
          onClick={() => setIsLoggedIn(true)}
          className={`w-full flex items-center justify-center py-2 rounded-full ${
            isLoggedIn ? "bg-gray-900" : ""
          }`}
          style={{ transition: "background-color 0.3s ease" }}
        >
          Login
        </div>

        <div
          onClick={() => setIsLoggedIn(false)}
          className={`w-full flex items-center justify-center py-2 rounded-full ${
            isLoggedIn ? "" : "bg-gray-900"
          }`}
          style={{ transition: "background-color 0.3s ease" }}
        >
          Register
        </div>
      </div>

      <div className="w-full max-w-xl my-4">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, sit?
        Eum quasi qui assumenda saepe.
      </div>

      <div className="max-w-xl w-full p-2 flex flex-col">
        {!isLoggedIn ? (
          <div className="mb-4 flex flex-col">
            <label htmlFor="name" className="text-sm font-medium mb-2">
              Full Name
            </label>
            <div className="relative">
              <CgMail className="absolute h-5 w-5 text-gray-400 left-3 top-1/2 transform  -translate-y-1/2" />
              <input
                type="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 pl-10 border rounded-full focus:gray-blue-500"
              />
            </div>
          </div>
        ) : (
          ""
        )}

        <div className="mb-4 flex flex-col">
          <label htmlFor="email" className="text-sm font-medium mb-2">
            Email address
          </label>
          <div className="relative">
            <CgMail className="absolute h-5 w-5 text-gray-400 left-3 top-1/2 transform  -translate-y-1/2" />
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 pl-10 border rounded-full focus:border-gray-500"
            />
          </div>
        </div>
        <div className="mb-4 flex flex-col">
          <label htmlFor="password" className="text-sm font-medium mb-2 mt-4">
            Password
          </label>
          <div className="relative">
            <LockClosedIcon className="absolute h-5 w-5 text-gray-400 left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 pl-10 border rounded-full focus:border-gray-500"
            />
          </div>
        </div>
        {!isLoggedIn ? (
          <>
            <div className="mb-4 flex flex-col">
              <label
                htmlFor="confirmPassword"
                className="text-sm font-medium mb-2 mt-4"
              >
                Confirm Password
              </label>
              <div className="relative">
                <LockClosedIcon className="absolute h-5 w-5 text-gray-400 left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="password"
                  id="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full p-2 pl-10 border rounded-full focus:border-gray-500"
                />
              </div>
            </div>
            {/* <div className="mb-4 flex flex-col">
                <label
                  htmlFor="phoneNumber"
                  className="text-sm font-medium mb-2"
                >
                  Phone Number
                </label>
                <div className="relative">
                  <CgMail className="absolute h-5 w-5 text-gray-400 left-3 top-1/2 transform  -translate-y-1/2" />
                  <input
                    type="phoneNumber"
                    id="phoneNumber"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full p-2 pl-10 border rounded-full focus:border-blue-500"
                  />
                </div>
              </div> */}
          </>
        ) : (
          ""
        )}
        {isLoggedIn ? (
          <div className="flex justify-between items-center">
            <p className="right-0 text-xs flex items-center  gap-1">
              <span className="items-center flex">
                <input type="checkbox" />
              </span>
              <span> Remember Me</span>
            </p>
            <Link href="/forgotpw">
              <p className="right-0 text-xs">Forgot password?</p>
            </Link>
          </div>
        ) : (
          ""
        )}
        <button
          onClick={isLoggedIn ? handleLogin : handleRegister}
          type="submit"
          className="w-full bg-gray-500 text-white py-2 mt-4 rounded-full hover:bg-gray-700"
        >
          {isLoggedIn ? "Login" : "Register"}
        </button>
        {isLoggedIn ? (
          <div className="flex items-center gap-2 justify-between">
            <button
              type="submit"
              className="w-full bg-gray-500 text-white py-2 mt-4 rounded-full hover:bg-gray-700"
              onClick={handleGooleLogin}
            >
              Google
            </button>
            <button
              type="submit"
              className="w-full bg-gray-500 text-white py-2 mt-4 rounded-full hover:bg-gray-700"
              onClick={handleFacebookLogin}
            >
              Facebook
            </button>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </section>
  );
};

export default LoginCard;

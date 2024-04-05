"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useWarningToast from "@/lib/warningToast";
import { HexagonIcon } from "lucide-react";
import { useSession, signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export function RegisterCard() {
  const showWarningToast = useWarningToast();
  const router = useRouter();
  const session = useSession();
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [emailInPutError, setEmailInputError] = useState(false);
  const [passwordInPutError, setPasswordInputError] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const handler = (e: any) => {
    setIsLoggedIn(!isLoggedIn);
  };

  useEffect(() => {
    if (session) {
      setIsLoggedIn(true);
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

  const handleGoogleLogin = async () => {
    try {
      const result = await signIn("google", {
        redirect: false, // Prevent default NextAuth redirect
      });

      if (result?.error) {
        console.error("Facebook login error:", result?.error);
        // Handle login errors (optional)
      } else {
        // Login successful!
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogin = async (e: any) => {
    e.preventDefault();
    console.log(email, password);

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
      console.log(res);

      if (res?.error) {
        setError("Invalid  Credentials!");

        toast.error("Invalid  Credentials!");
        return;
      }

      toast.success("login Secessfull");
      router.push("/");
      // Trigger toast notification
    } catch (error) {
      console.log("message is :", error);
      toast.error("Something Wrong ");
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
      const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/user`, {
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
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
        <div className="flex items-center justify-center w-full pb-4 ">
          <HexagonIcon className="text-[#bd1e59] hidden md:block h-8 w-8 mr-3" />
          <div>
            <p className="font-semibold text-lg text-black">EduTrack</p>
            <p className="text-xs text-black hidden md:block ">
              Empowering Eduction through Data
            </p>
          </div>
        </div>
        {isLoggedIn ? (
          <div className="mt-6 space-y-4">
            <Button
              className="w-full text-red-600"
              variant="outline"
              onClick={handleGoogleLogin}
            >
              Sign in with Google
            </Button>
            <Button
              className="w-full text-blue-600"
              variant="outline"
              onClick={handleFacebookLogin}
            >
              Sign in with Facebook
            </Button>

            <div className="my-6 flex items-center justify-between">
              <hr className="w-full" />
              <p className="mx-2">or</p>
              <hr className="w-full" />
            </div>
          </div>
        ) : (
          ""
        )}

        <form className="space-y-4">
          {/* <Input placeholder="gfg@gfg.org" type="email" />
          <Input placeholder="gfg@gfg.org" type="email" /> */}
          {isLoggedIn ? (
            <div className="flex items-center flex-col gap-2">
              <Input
                placeholder="totc@tc.org"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
              />
              <Input
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
                type="password"
              />
            </div>
          ) : (
            <div className="flex  pt-4 items-center flex-col gap-2">
              <Input
                placeholder="Name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
              />
              <Input
                placeholder="totc@tc.org"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                autoComplete="off"
              />
              <Input
                placeholder="password"
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Input
                placeholder="confirmPassword"
                id="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                type="password"
              />
            </div>
          )}
          <Button
            onClick={isLoggedIn ? handleLogin : handleRegister}
            className="w-full"
          >
            {isLoggedIn ? "Login" : "Register"}
          </Button>
        </form>
        <div className="mt-4 flex justify-between">
          {isLoggedIn ? (
            <Link className="text-sm" href="/auth/forgot-password">
              Forget Password ?
            </Link>
          ) : (
            ""
          )}
          {isLoggedIn ? (
            <Link className="text-sm" href="#" onClick={handler}>
              Don`t have an account? Sign Up
            </Link>
          ) : (
            <Link className="text-sm" href="#" onClick={handler}>
              Already have an account? Sign In
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

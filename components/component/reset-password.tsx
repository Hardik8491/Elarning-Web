"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function ResetPassword({ token }: { token: any }) {
  const [password, setPassword] = useState("");
  const router = useRouter();

  const [confirmPassword, setConfirmPassword] = useState("");

  const [message, setMessage] = useState("");

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Passwords do not match");

      return;
    }

    try {
      const response = await fetch("/api/reset-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({ token, password }),
      });

      const data = await response.json();

      setMessage(data.message);
      router.push("/");
    } catch (error) {
      console.error("Error:", error);

      setMessage("An error occurred while processing your request");
    }
  };
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white p-8 border border-gray-300 rounded-lg shadow-md">
        <div className="mb-8 flex justify-center">
          <img
            alt="Password Reset"
            className="w-48 h-48"
            height="192"
            src="/fp.png"
            style={{
              aspectRatio: "192/192",
              objectFit: "contain",
            }}
            width="192"
          />
        </div>
        <h2 className="mb-6 text-center text-3xl font-extrabold text-gray-900">
          Password Reset
        </h2>
        <div className="mb-4">
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="New Password"
            type="password"
            value={password}
          />
        </div>
        <div className="mb-4">
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
            placeholder="Confirm Password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <button
            className="w-full bg-blue-500 text-white rounded-md py-2"
            onClick={handleSubmit}
          >
            Update Password
          </button>
        </div>
      </div>
    </div>
  );
}

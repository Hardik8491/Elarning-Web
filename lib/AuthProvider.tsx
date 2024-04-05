"use client";
import { SessionProvider } from "next-auth/react";

// Ensure to install @types/next-auth package for TypeScript support

// Add proper types for the Provider component
interface ProviderProps {
  children: React.ReactNode;
}

// Update the component with TypeScript
export default function AuthProvider({ children}: ProviderProps) {
  return <SessionProvider >{children}</SessionProvider>;
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/lib/AuthProvider";
import { ChakraProviders } from "@/lib/ChakraProvider";
import { Footer } from "@/components/component/footer";
import Navbar from "@/components/Navbar";
import NextAuthProvider from "@/hooks/NextAuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    manifest: "./manifest.json",
    title: "EduTrack ",
    description: "EduTrack: Empowering Education through Data",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={inter.className}>
                <NextAuthProvider>
                    <ChakraProviders>
                        <Navbar />
                        <AuthProvider>
                            <div className='mt-16'>{children}</div>
                        </AuthProvider>
                        <Footer />
                    </ChakraProviders>
                </NextAuthProvider>
            </body>
        </html>
    );
}

"use client";
import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html data-theme="dark" lang="fr">
      <QueryClientProvider client={queryClient}>
        <body>
          <Navbar />
          {children}
        </body>
      </QueryClientProvider>
    </html>
  );
}

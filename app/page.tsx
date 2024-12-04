import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LandingPage from "@/components/LandingPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Snappy",
  description: "Snappy - E-commerce solution for smart business",
};

export default function Home() {
  return (
    <main style={{display: 'flex', flexDirection: 'column', width: '100%', overflow: 'hidden'}}>
      <Header />
       <LandingPage />
      <Footer /> 
    </main>
  );
}

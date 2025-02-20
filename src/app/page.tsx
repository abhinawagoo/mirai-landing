import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import RecruitmentAgents from "@/components/RecruitmentAgents";
import Features from "@/components/Features";
import BookingSection from "@/components/BookingSection";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <RecruitmentAgents />
      <Features />
      <BookingSection />
      <FAQ />
      <Footer />
    </main>
  );
}

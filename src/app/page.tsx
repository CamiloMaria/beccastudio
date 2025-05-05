import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { Services } from "@/components/landing/services";
import { Footer } from "@/components/landing/footer";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-col flex-1">
        <Hero />
        <Services />
        {/* Additional content sections will go here */}
      </main>
      <Footer />
    </div>
  );
} 
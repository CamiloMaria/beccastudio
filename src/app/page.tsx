import { Header } from "@/components/ui/header";
import { Hero } from "@/components/ui/hero";
import { Footer } from "@/components/ui/footer";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-col flex-1">
        <Hero />
        {/* Additional content sections will go here */}
      </main>
      <Footer />
    </div>
  );
} 
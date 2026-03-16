import Hero from "@/components/Home/Hero";
import Recomendations from "@/components/Home/Recomendations";
import Footer from "@/app/layout/Footer";
import Navbar from "./layout/NavBar";

const Home = () => {

  return (
    <div className="min-h-screen bg-background">
        <Navbar />

        <Hero />

        <Recomendations />
      

        <Footer />

      
    </div>
  );
};

export default Home;
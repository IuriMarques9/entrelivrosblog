import Content from "@/components/AboutMe/Content";
import Footer from "@/app/layout/Footer";
import Navbar from "../layout/NavBar";

const About = () => {

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <Content />

      <Footer />

    </div>
  );
};

export default About;
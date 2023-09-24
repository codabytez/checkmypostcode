import AccordionPage from "./AccordionPage";
import BookingPage from "./BookingPage";
import DiscoverPage from "./DiscoverPage";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import PostcodePage from "./PostcodePage";

const HomePage = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Navbar />
      <Hero />
      <BookingPage />
      <DiscoverPage />
      <PostcodePage />
      <AccordionPage />
      <Footer />
    </div>
  );
};

export default HomePage;

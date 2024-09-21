import AboutSection from "./components/aboutSection";
import RoomsSection from "./components/roomsSection";
import HeaderSection from "./components/headerSection";
import Book from "./components/book";
import Entertainment from "./components/entertainment";
import Gallery from "./components/gallery";

export default function Home() {
  return (
    <main>
      <HeaderSection />
      <RoomsSection />
      <Book />
      <Entertainment />
      <Gallery />
      <AboutSection />
    </main>
  );
}

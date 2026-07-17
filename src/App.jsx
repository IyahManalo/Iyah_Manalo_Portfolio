import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Runway from "./pages/Runway";
import Contact from "./pages/Contact";

const sections = [
  { id: "arrival", Component: Home },
  { id: "face", Component: About },
  { id: "portfolio", Component: Portfolio },
  { id: "runway", Component: Runway },
  { id: "enquiries", Component: Contact },
];

export default function App() {
  return (
    <>
      <Nav />
      <main>
        {sections.map(({ id, Component }) => (
          <section key={id} id={id} className="scroll-mt-16 md:scroll-mt-20">
            <Component />
          </section>
        ))}
      </main>
      <Footer />
    </>
  );
}

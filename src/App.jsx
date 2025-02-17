// import Component
import Carousel from "./components/Carousel";
import NavBar from "./components/NavBar";
import MainSection from "./components/MainSection";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  return (
    <>
      <NavBar />
      <div className="lg:pt-5">
        <Carousel />
        <div className="h-max max-w-full bg-teal-50 lg:mt-10 py-5">
          <div>
            <MainSection />
          </div>
        </div>
      </div>

      <About />

      <Footer />
    </>
  );
}

export default App;

import About from "./Components/About";
import Contact from "./Components/Contact";
import Main from "./Components/Main";
import NavBar from "./Components/NavBar";
import OverView from "./Components/OverView";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="flex flex-col overflow-x-hidden ">
      <div className="absolute w-screen">
        <NavBar />
      </div>
      <div className="min-h-screen">
        <div className="absolute">
          <Main />
        </div>
        <div className="relative">
          <About />
        </div>
      </div>

      <div className="flex flex-col relative bg-white">
        <OverView />
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;

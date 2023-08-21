import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Playlist from "./components/Playlist";
// import Skills from "./components/Playlist";
import Footer from "./components/Footer";
// import Techstack from "./components/techStack";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      {/* <Home /> */}
      {/* <About /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* <div className="container"> */}
      {/* <Playlist />
      <Contact /> */}
        {/* <Skills /> */}
        {/* <Techstack />
        <Contact /> */}
      {/* </div> */}
      <Footer />
    </>
  );
}

export default App;

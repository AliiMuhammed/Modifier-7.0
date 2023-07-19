import {Outlet}from"react-router-dom"
import Footer from "./Shared/Footer"
import NavBar from "./Shared/NavBar";
import ScrollToTop from "react-scroll-to-top";
function App() {
  return (
    <>
    <NavBar/>
    <Outlet/>
    <Footer/>
    <ScrollToTop smooth className="scroll-btn" color="#fff" />
    </>
  );
}

export default App;

import {Outlet}from"react-router-dom"
import Footer from "./Shared/Footer"
import NavBar from "./Shared/NavBar";
import ScrollToTop from "react-scroll-to-top";
import ScrollTop from "./Shared/ScrollTop";
function App() {
  return (
    <>
    <NavBar/>
    <Outlet/>
    <Footer/>
    <ScrollToTop smooth className="scroll-btn" color="#fff" />
    <ScrollTop/>
    </>
  );
}

export default App;

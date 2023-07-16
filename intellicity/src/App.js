import {Outlet}from"react-router-dom"
import Footer from "./Shared/Footer"
import NavBar from "./Shared/NavBar";
function App() {
  return (
    <>
    <NavBar/>
    <Outlet/>
    <Footer/>
    </>
  );
}

export default App;

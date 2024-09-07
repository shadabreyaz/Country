import Header from "./components/Header";
import { Outlet } from "react-router-dom";
// import Theme, { theme } from "./context/Theme";
import ThemeContext from "./context/Theme";

import './App.css';
export default function App() {
  return (
    <>
    <ThemeContext>
    <Header />
     <Outlet />
    </ThemeContext>
    </>
    
  )
}

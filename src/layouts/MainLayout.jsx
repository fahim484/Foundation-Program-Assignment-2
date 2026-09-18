import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"

export default function MainLayout() {
  return (
    <div className="font-bebas">
        <div><Navbar/></div>
      <div>
        <Outlet/>
      </div>
      <div><Footer/></div>
    </div>
  );
}

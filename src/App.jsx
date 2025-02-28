import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Aboutus from "./pages/About";
import Projects from "./components/Projects";
import Blog from "./pages/Blog";
import Contact from "./components/Contact";
import Login from "./pages/Admin/Login";
import Dashboard from "./pages/Admin/Dashboard/Dashboard";
import AdminDashComp from "./components/Admin/AdminDashComp";

const App = () => {
  const location = useLocation(); // Get the current route

  // Hide Navbar & Footer for the Dashboard route
  const hideNavAndFooter = location.pathname.startsWith("/admin/dashboard");

  return (
    <>
      {!hideNavAndFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<Login />} />
        <Route path="/admin/dashboard/*" element={<Dashboard />} />

        

      </Routes>
      {!hideNavAndFooter && <Footer />}
    </>
  );
};

// Wrap App inside Router directly in `main.jsx` (or index.js)
export default App;

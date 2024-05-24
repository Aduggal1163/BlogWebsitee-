import React,{useState} from "react";
import Home from "./pages/home/Home";
import Write from "./pages/write/Write";
import Login from "./pages/login/Login";
import SinglePost from "./components/singlepost/SinglePost";
import SinglePost2 from "./components/singlepost2/SinglePost2"
import Posts from "./components/posts/Posts"; 
import SinglePost3 from "./components/singlepost3/SinglePost3";
import SinglePost4 from "./components/singlepost4/SinglePost4";
import SinglePost5 from "./components/singlepost5/SinglePost5";
import SinglePost6 from "./components/singlepost6/SinglePost6";
import Navbar from "./components/topbar/Navbar";
 import AboutUs from "./pages/aboutus/AboutUs";
import Contact from "./pages/contact/Contact";
import LoginForm from "./pages/loginform/LoginForm";
import AuthProvider from "./context/AuthProvider";
import RequiredAuth from "./context/RequiredAuth";
import {ToastContainer , toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const handleLogin = () => {
  setLoggedIn(true);
  };
  const handleLogout = () => {
    setLoggedIn(false);
  };
  return (
    <AuthProvider>
    <Router>
    <ToastContainer position="bottom-right" newestOnTop={true} autoClose={7000} hideProgressBar={false}/>
      <Navbar/>
      
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
       <Route path="/write" element={<RequiredAuth><Write/></RequiredAuth>}/>
       <Route path="/sidepost/SidePost" element={<SinglePost />} />
        <Route path="/sidepost2/SidePost2" element={<SinglePost2/>}/>
        <Route path="/sidepost3/SidePost3" element={<SinglePost3/>}/>
        <Route path="/sidepost4/SidePost4" element={<SinglePost4/>}/>
        <Route path="/singlepost5/SinglePost5" element={<SinglePost5/>}/>
        <Route path="/singlepost6/SinglePost6" element={<SinglePost6/>}/>
         <Route path="/aboutus" element={<AboutUs/>}/>
         <Route path="/contact" element={<Contact/>}/>
        {/* <Route index element={<Posts />} /> */}
      </Routes>
    </Router>
    
    </AuthProvider>
  );
}

export default App;

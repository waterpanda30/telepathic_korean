import React from "react";
import Navbar from './components/navbar';
import UserBar from "./userBar";


function App() {
  return <div  className="min-h-screen w-full bg-[#FDF6E3]">
    <Navbar/>
    <UserBar/>
  </div>;
}

export default App;

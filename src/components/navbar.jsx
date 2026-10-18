import {useState} from "react"
import React from 'react'
import logo from '../assets/logo.png'

const navbar=()=> {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  
  return (
    <header className="relative flex items-center justify-between text-[#DDD4C8] py-8 px-3 bg-[#23170F] drop-shadow-none z-50">
        <a href="#">
            <img src={logo} alt="Telepathic korean" className="h-20 w-auto object-contain rounded-md hover:scale-105 transition-all"></img>
        </a>
        <ul className="hidden xl:flex items-center gap-12 font semi-bold text-base">
            <li className="px-3.5 py-2 rounded-lg text-[#DDD4C8] hover:bg-[#3a271c] hover:text-[#FFF] transition-all block cursor-pointer">HOME</li>
            <li className="px-3.5 py-2 rounded-lg text-[#DDD4C8] hover:bg-[#3a271c] hover:text-[#FFF] transition-all block cursor-pointer">VERBS</li>
            <li className="px-3.5 py-2 rounded-lg text-[#DDD4C8] hover:bg-[#3a271c] hover:text-[#FFF] transition-all block cursor-pointer">ADJECTIVES</li>
            <li className="px-3.5 py-2 rounded-lg text-[#DDD4C8] hover:bg-[#3a271c] hover:text-[#FFF] transition-all block cursor-pointer">NUMBERS</li>
            <li className="px-3.5 py-2 rounded-lg text-[#DDD4C8] hover:bg-[#3a271c] hover:text-[#FFF] transition-all block cursor-pointer">ADVERBS</li>
            <li className="px-3.5 py-2 rounded-lg text-[#DDD4C8] hover:bg-[#3a271c] hover:text-[#FFF] transition-all block cursor-pointer">GRAMMAR</li>
            <li className="px-3.5 py-2 rounded-lg text-[#DDD4C8] hover:bg-[#3a271c] hover:text-[#FFF] transition-all block cursor-pointer">IDIOMS</li>
            <li className="px-3.5 py-2 rounded-lg text-[#DDD4C8] hover:bg-[#3a271c] hover:text-[#FFF] transition-all block cursor-pointer">MOCK TEST</li>
            <li className="px-3.5 py-2 rounded-lg text-[#DDD4C8] hover:bg-[#3a271c] hover:text-[#FFF] transition-all block cursor-pointer">QUIZES</li>
        </ul>




      {/* Mobile Hamburger Toggle Icon */}
      <i className="bx bx-menu block xl:!hidden text-5xl cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}></i>

    
      {/* Mobile Dropdown Menu */}
            {isMenuOpen && (
        <div className="absolute xl:hidden top-full right-0 w-64 bg-[#23170F] text-[#DDD4C8] flex flex-col items-start p-4 shadow-xl z-50">
          <ul className="w-full flex flex-col gap-1">
            <li className="w-full text-left px-6 py-3 hover:bg-[#3a271c] hover:text-[#FFF] rounded-md transition-all cursor-pointer font-medium">HOME</li>
            <li className="w-full text-left px-6 py-3 hover:bg-[#3a271c] hover:text-[#FFF] rounded-md transition-all cursor-pointer font-medium">VERBS</li>
            <li className="w-full text-left px-6 py-3 hover:bg-[#3a271c] hover:text-[#FFF] rounded-md transition-all cursor-pointer font-medium">ADJECTIVES</li>
            <li className="w-full text-left px-6 py-3 hover:bg-[#3a271c] hover:text-[#FFF] rounded-md transition-all cursor-pointer font-medium">NUMBERS</li>
            <li className="w-full text-left px-6 py-3 hover:bg-[#3a271c] hover:text-[#FFF] rounded-md transition-all cursor-pointer font-medium">ADVERBS</li>
            <li className="w-full text-left px-6 py-3 hover:bg-[#3a271c] hover:text-[#FFF] rounded-md transition-all cursor-pointer font-medium">GRAMMAR</li>
            <li className="w-full text-left px-6 py-3 hover:bg-[#3a271c] hover:text-[#FFF] rounded-md transition-all cursor-pointer font-medium">IDIOMS</li>
            <li className="w-full text-left px-6 py-3 hover:bg-[#3a271c] hover:text-[#FFF] rounded-md transition-all cursor-pointer font-medium">MOCK TEST</li>
            <li className="w-full text-left px-6 py-3 hover:bg-[#3a271c] hover:text-[#FFF] rounded-md transition-all cursor-pointer font-medium">QUIZZES</li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default navbar;

      
         

   
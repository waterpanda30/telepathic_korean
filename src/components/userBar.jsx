import React from 'react'
import {useState} from 'react'

function UserBar() {
  const [userName, setUserName] =useState('Seoul Learner');
  const [currentLevel, setCurrentLevel] = useState("Lower-Beginner");
  const [streaks, setStreaks] = useState(0);
  const [wordCount, setWordCount] = useState(0);

  const initials = userName
    .split(" ")
    .map((word)=> word[0])
    .join("")
    .toUpperCase();

  return (
    // outer container
    <div className="w-full bg-[#F4EDE2] border-b border-[#D9CBB8] px-3 sm:px-6 py-4 sm:py-5  flex items-center justify-between gap-5">

     {/* left user identity */}
      <div className="flex items-center gap-3">
        <div className="w-11 h-11 rounded-xl bg-[#3C2A1E] text-[#F8E9D1] flex items-center justify-center font-bold text-sm hover:scale-106 cursor-pointer">{initials}</div>

        <div className="cursor-pointer">
          <p className="text-sm flex items-center text-[#8A887D] ">Welcome back,</p>
          <h3 className="text-sm font-semibold text-[#302319] ">{userName}</h3>
        </div>


      </div>


      {/* right all stats together */}
      <div className="flex items-center gap-2 sm:gap-6">

        {/* current level */}
        <div className="space-y-1">
        <p className="text-xs sm:text-sm text-[#8A887D] cursor-pointer">Current Level</p>
        <h3 className="text-sm text-[#302319] font-semibold cursor-pointer">{currentLevel}</h3>
        </div>

        {/*Day streaks*/}
      <div className="h-9 w-px bg-[#D9CBB8]"></div>
      <div className="space-y-1">
        <p className="text-xs sm:text-sm text-[#8A887D] cursor-pointer">Day Streak</p>
        <h3 className="text-sm text-[#302319] font-semibold cursor-pointer">{streaks} days</h3>
        </div>

        {/* words learned */}
      <div className="h-9 w-px bg-[#D9CBB8]"></div>
      <div className="space-y-1">
        <p className="text-xs sm:text-sm text-[#8A887D] cursor-pointer">Words Learned</p>
        <h3 className="text-sm text-[#302319] font-semi-bold cursor-pointer">{wordCount} words</h3>
        </div>
      </div>

      

    </div>
  )
}

export default UserBar;
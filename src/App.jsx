import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { FaCalendar } from "react-icons/fa";
import { HiReceiptTax } from "react-icons/hi";
import Card from "./Card";
import data from "./assets/data.json";

function App() {
  return (
    <div className="p-20 bg-[#e6e6e6]">
      <div className="p-10 grid grid-cols-1 gap-6 w-[35%] mx-auto ">
        {/* <div className='bg-[#f2f7f5] px-5 py-3 rounded-md shadow-lg border border-black/5 text-black/90
                         flex gap-10'>

          <div className='flex flex-col shrink-0'>

            <div className='text-green-900 font-bold text-[1.35em]'>Rp.10000</div>

            <span className='grow text-red-700/80 font-medium text-[0.85rem]'>
              <div className='flex items-center gap-1'>
                <HiReceiptTax className='mt-[0.2rem]' />-Rp 405
              </div>
            </span>

            <div className='text-black/70 flex gap-2 items-center text-[0.8rem] font-semibold'><FaCalendar /> 9 May 2024</div>
          </div>

          <div className=' w-full flex flex-col'>
            <h4 className='text-[0.93rem] font-medium text-black/75'>emiasndlin@gmail.com</h4>
            <h2 className='font-bold text-[1.2rem] pb-1'>Kucing Garong - MMblues</h2>
            <p className='pt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quia.</p>
          </div>
        </div> */}

        {data.map((d) => (
          <Card data={d} />
        ))}
      </div>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import { Bio } from "../data/constants";
import image from "../Image/astro1.png";
import { SiCodechef } from "react-icons/si";

import { FaLinkedin,  FaTwitter} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { Message } from "./message";

export const Footer = () => {
  const [nav ,setNav]=useState(false);
  return (
    <div 
    className="relative flex  flex-col justify-center items-center mt-40 ">

      <div className=" absolute -top-40 z-0   transfom transition duration-500 hover:scale-125  hover:-translate-y-10">
        <button onClick={()=> setNav(!nav)}>
        {
                nav ? <Message/> :null
            }
        <img src={image} alt="" className="w-28"></img>
        </button>
      </div>

      

      <div>
        
      </div>
      <div className="flex mb-32 gap-10">
        <div className="hover:bg-blue-800  transform transition duration-500 hover:scale-125 cursor-pointer border p-4 rounded-full">
          <a href={Bio.linkedin} target="_blank">
            <FaLinkedin size={25} color="white" />
          </a>
        </div>
        <div className="hover:bg-gradient-to-t from-orange-600 via-red-600 to-pink-700 transform transition duration-500 hover:scale-125 cursor-pointer border p-4 rounded-full">
          <a href={Bio.leetcode} target="_blank ">
          <SiLeetcode size={25} color="white" />
          </a>
        </div>
        <div className="hover:bg-blue-800 transform transition duration-500 hover:scale-125 cursor-pointer border p-4 rounded-full">
          <a href={Bio.codechef} target="_blank">
          <SiCodechef size={25} color="white" />
          </a>
        </div>
        <div className="hover:bg-black transform transition duration-500 hover:scale-125 cursor-pointer border p-4 rounded-full">
          <a href={Bio.twitter} target="_blank">
            <FaTwitter size={25} color="white" />
          </a>
        </div>
      </div>
    </div>
  );
};

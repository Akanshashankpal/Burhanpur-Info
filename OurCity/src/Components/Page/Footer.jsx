import React from "react";
import img from "../ui/Images/logo.jpg";
// import  {Visa }from "../AllIcons/Payment-Icon/Visa";
// import  {Amex }from "../AllIcons/Payment-Icon/Amex";
// import  {ApplePay }from "../AllIcons/Payment-Icon/ApplePay";
// import  {MasterCard }from "../AllIcons/Payment-Icon/MasterCard";
// import  {Upi }from "../AllIcons/Payment-Icon/Upi";
// import { FacebookIcon } from "../AllIcons/SocialMedia/Facebook";
// import { InstaIcon } from "../AllIcons/SocialMedia/InstaIcon";
// import { LinkedinIcon } from "../AllIcons/SocialMedia/LinkedinIcon";
// import { TwitterIcon } from "../AllIcons/SocialMedia/TwitterIcon";
import { motion } from "framer-motion";
console.log(motion)




const Footer = () => {
  return (
    <>
    
  
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      
    >


      <footer className="bg-gradient-to-b from-white to-white text-black pt-10 px-6 sm:px-10 md:px-20">


        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 pb-10 border-b border-gray-300 flex justify-center items-center">
          {/* Logo and Description */}

          {/* {/first box/} */}
          <div className=" text-center sm:text-left ">
            <img
              className="mx-auto sm:mx-0"
              src={img}
              alt="logo"
              style={{
                width: "60px",
                borderRadius: "60px",
                paddingBottom: "px",
              }}
            />
            <p className=" text-md font-normal  mb-4">
              Donec sollicitudin metus eu dictum consectetur. Morbi tempor nulla
              sit amet bibendum.
            </p>
            <div className="flex space-x-10 sm:flex justify-center items-center">
              {/* {<FacebookIcon/>}
              {<InstaIcon/>}
              {<LinkedinIcon/>}
              {<TwitterIcon/>} */}
              
            </div>
            
          </div>

          {/* {/Second box/} */}

          <div className="flex justify-center items-center sm:block">

          <div className="text-center">
            <h3 className="font-bold text-lg mb-2">Contact Us</h3>
            <ul className="text-md font-normal space-y-1">
              <li>
                <a className="hover:text-pink-500" href="/community">
                  Community
                </a>
              </li>
              <li>
                <a className="hover:text-pink-500" href="/blog">
                  Blog
                </a>
              </li>
              <li>
                <a className="hover:text-pink-500" href="/community">
                  Forum
                </a>
              </li>
              <li>
                <a className="hover:text-pink-500" href="/community">
                  Meetup
                </a>
              </li>
            </ul>
          </div>
          </div>

          
          
          {/* {/Third box/} */}
          <div className="flex justify-center items-center sm:block">
          <div className="text-center">
            <h3 className="font-bold text-lg mb-2">Our Services</h3>
            <ul className="text-md font-normal space-y-1">
              <li>
                <a className="hover:text-pink-500" href="#">
                  International Holidays
                </a>
              </li>
              <li>
                <a className="hover:text-pink-500" href="#">
                  Bus Booking
                </a>
              </li>
              <li>
                <a className="hover:text-pink-500" href="#">
                  Train Ticket Booking
                </a>
              </li>
              <li>
                <a className="hover:text-pink-500" href="#">
                  Trip Ideas
                </a>
              </li>
            </ul>
          </div>
          </div>

          {/* {/fourth box/} */}
          <div className="flex justify-center items-center sm:block">
          <div className="text-center">
            <h3 className="font-bold text-lg mb-2">About Us</h3>
            <ul className="text-md font-normal space-y-1">
              <li>
                <a className="hover:text-pink-500" href="#">
                  Cab Booking{" "}
                </a>
              </li>
              <li>
                <a className="hover:text-pink-500" href="#">
                  Book Hotel From Burhanpur
                </a>
              </li>
              <li>
                <a className="hover:text-pink-500" href="#">
                  Book Flights From -{" "}
                </a>
              </li>
              <li>
                <a className="hover:text-pink-500" href="#">
                  Airlines
                </a>
              </li>
            </ul>
          </div>
          </div>
          {/* 5 box*/}
<div className="flex justify-center items-center sm:block">
<div className="text-center">
            <h3 className="font-bold text-xl mb-2">Newsletter</h3>
            <p className="text-md font-normal mb-3">
              Pellentesque ultrices, vel accumsan ante felis eu erat.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your E-mail"
                className="p-2 border rounded-l w-full"
              />
              <button className="bg-pink-500 text-white px-4 rounded-r">
                ➤
              </button>
            </div>
          </div>
        </div>
</div>
          

        {/* -------------------- */}

        <div className="flex flex-col md:flex-row justify-between items-center mt-6 pb-6 text-sm">
          <p>© 2025 Burhanpur AkryptTech</p>
          <div className="flex gap-2 mt-2 md:mt-0 sm:gap-4">
           
          {/* {<Visa />} 
          {<MasterCard/>}
         {<Amex/>}
         {<ApplePay/>}
         {<Upi/>} */}
         
            
            
          </div>
        </div>
      </footer>
      </motion.div>
      
    </>
  );
};

export default Footer;
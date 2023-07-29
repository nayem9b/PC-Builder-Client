import React from "react";
import { Button, Grid } from "@nextui-org/react";
import Link from "next/link";
const WatchCTA = () => {
  return (
    <div className=" mx-3 lg:mx-28 flex justify-between">
      <div class="relative z-20 flex justify-between overflow-hidden ">
        <div class=" flex lg:flex-row flex-col-reverse  px-6 py-16 mx-auto">
          <div class="relative z-20 flex flex-col gap-0 sm:w-2/3 lg:w-2/5">
            <span class="w-20 h-2 mb-12 dark:bg-white"></span>
            <h1 class="flex flex-col text-3xl lg:text-7xl font-black leading-none  uppercase font-bebas-neue  ">
              Get 20% off
              <span class=" text-3xl lg:text-8xl ">on Ryzen Processor</span>
            </h1>

            <div class="flex mt-8">
              <button className="bg-black px-6 rounded-xl py-3 text-xl font-medium hover:bg-gray-900 text-white">
                <Link href={"/category/processor"} className="text-white">
                  View Processor
                </Link>
              </button>
            </div>
          </div>

          <img
            src="https://images.unsplash.com/photo-1600348759986-dc35c2ec7743?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            className="lg:w-2/4 rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default WatchCTA;

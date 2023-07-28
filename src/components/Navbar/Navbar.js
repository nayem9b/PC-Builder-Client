import React from "react";
import { Dropdown } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import Link from "next/link";
const Navbar = () => {
  const categories = [
    { name: "motherboard", route: "/category/motherboard" },
    { name: "ram", route: "/category/ram" },
    { name: "processor", route: "/category/processor" },
    { name: "monitor", route: "/category/monitor" },
  ];
  return (
    <div>
      <header class="text-gray-600 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-10 h-10 text-white p-2 bg-green-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span class="ml-3 text-xl">Tailblocks</span>
          </a>
          <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Dropdown>
              <Dropdown.Button flat>Trigger</Dropdown.Button>
              <Dropdown.Menu aria-label="Static Actions">
                {categories.map((category) => (
                  <Dropdown.Item key={category?.name}>
                    <Link href={category?.route}>{category?.name}</Link>
                  </Dropdown.Item>
                ))}

                {/* <Dropdown.Item key="copy">Copy link</Dropdown.Item>
                <Dropdown.Item key="edit">Edit file</Dropdown.Item>
                <Dropdown.Item key="delete" color="error">
                  Delete file
                </Dropdown.Item> */}
              </Dropdown.Menu>
            </Dropdown>
            <Button color="success" auto>
              Success
            </Button>
            <a class="mr-5 hover:text-gray-900">Third Link</a>
            <a class="mr-5 hover:text-gray-900">Fourth Link</a>
          </nav>
          <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Button
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;

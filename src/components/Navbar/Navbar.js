import React from "react";
import { Dropdown } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { Avatar, Grid } from "@nextui-org/react";
import { signOut } from "next-auth/react";
const Navbar = () => {
  const categories = [
    { name: "processor", route: "/category/processor" },
    { name: "motherboard", route: "/category/motherboard" },
    { name: "ram", route: "/category/ram" },
    { name: "power supply unit", route: "/category/power" },
    { name: "storage", route: "/category/storage" },
    { name: "monitor", route: "/category/monitor" },
    { name: "others", route: "/category/others" },
  ];

  const { data: session } = useSession();
  console.log(session);

  return (
    <div>
      <header class="text-gray-600 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            href={"/"}
            class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
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
            <span class="ml-3 text-xl">Start Tech</span>
          </Link>
          <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Dropdown>
              <Dropdown.Button flat>Category</Dropdown.Button>
              <Dropdown.Menu aria-label="Static Actions">
                {categories.map((category) => (
                  <Dropdown.Item key={category?.name}>
                    <Link href={category.route}>{category?.name}</Link>
                  </Dropdown.Item>
                ))}

                {/* <Dropdown.Item key="copy">Copy link</Dropdown.Item>
                <Dropdown.Item key="edit">Edit file</Dropdown.Item>
                <Dropdown.Item key="delete" color="error">
                  Delete file
                </Dropdown.Item> */}
              </Dropdown.Menu>
            </Dropdown>

            <Button shadow color="success" auto>
              <Link href={"/pcbuilder"}> PC Builder </Link>
            </Button>
            {session ? (
              <>
                {" "}
                {/* <Dropdown>
                  <Dropdown.Button flat>
                    <Avatar
                      size="lg"
                      src="https://i.pravatar.cc/150?u=a042581f4e25056704b"
                      color="gradient"
                      bordered
                    />
                  </Dropdown.Button>
                  <Dropdown.Menu aria-label="Static Actions">
                    <Dropdown.Item key="new">{session.user.name}</Dropdown.Item>

                    <Dropdown.Item
                      key="delete"
                      color="error"
                      onClick={() => signOut()}
                    >
                      Sign out
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown> */}
                <Button color="error" auto onClick={() => signOut()}>
                  Sign Out
                </Button>
              </>
            ) : (
              <>
                <button
                  auto
                  className="bg-black px-3 py-2 rounded-full"
                  rounded
                >
                  <Link href={"/signin"} className="text-white font-medium">
                    New Here?
                  </Link>
                </button>
              </>
            )}
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;

import React from "react";
import GoogleButton from "react-google-button";
import { signIn } from "next-auth/react";
import RootLayout from "@/Layouts/RootLayout";
const signin = () => {
  return (
    <div className="flex bg-gradient-to-r from-indigo-500 justify-center items-center h-screen">
      <GoogleButton
        onClick={() =>
          signIn("google", { callbackUrl: "https://pcbuilderhub.vercel.app" })
        }
      ></GoogleButton>
    </div>
  );
};

export default signin;

signin.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

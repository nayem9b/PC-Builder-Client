import React from "react";
import GoogleButton from "react-google-button";
import { signIn } from "next-auth/react";
const signin = () => {
  return (
    <div>
      <GoogleButton
        onClick={() =>
          signIn("google", { callbackUrl: "http://localhost:3000" })
        }
      ></GoogleButton>
    </div>
  );
};

export default signin;

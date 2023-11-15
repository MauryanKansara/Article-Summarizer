import React from "react";
import Navbar from "./Navbar";
import { useGetUserInfo } from "../hooks/useGetUserInfo";

const Hero = () => {
  const { name } = useGetUserInfo();
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <Navbar buttonName="History" buttonLink="history" />

      <h1 className="head_text">
        Welcome <span className="orange_gradient">{name}</span> <br />
        <p className="text-5xl"> Summarize Articles with OpenAI GPT-4</p>
      </h1>
      {/* <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="orange_gradient ">OpenAI GPT-4</span>
      </h1> */}
      <h2 className="desc">
        Simplify your reading with Summize, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries
      </h2>
    </header>
  );
};

export default Hero;

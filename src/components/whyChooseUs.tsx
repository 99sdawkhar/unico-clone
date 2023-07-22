import Image from "next/image";
import React from "react";
import { expertiseIn } from "@/constants/banner";

const WhyChooseUs = () => {
  return (
    <section className="py-12 bg-black text-white font-light">
      <div className="wrapper">
        <div className="pt-28 text-center">
          <h2 className="mx-auto w-[80%] text-5xl mb-10 font-bold">
            <span className="opacity-50">Transform your Ideas </span>
            {"into Stunning Products with Unico's Expert Team"}
          </h2>
          <p className="mb-10 mx-auto w-1/3 text-lg">
            Build, Launch, and Scale your Products with Unmatched Efficiency
          </p>
          <button className="mb-7 px-5 py-4 bg-white text-black font-medium uppercase">Get Started</button>
          <ul className="flex gap-5 items-center justify-between">
            {expertiseIn.map((item, i) => (
              <li key={i} className="w-1/3 pt-5 pb-10 px-2.5 flex items-center flex-col">
                <figure className="mb-5">
                  <Image width={60} height={60} src={item.src} />
                </figure>
                <h3 className="w-full p-5 border border-[rgba(255,255,255,.2)] rounded-full">{item.title}</h3>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

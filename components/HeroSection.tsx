"use client";

import Image from "next/image";
import heroImage from "@/assets/banner-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[600px] mb-10">
      <Image
        src={heroImage}
        alt="Hero Image"
        fill
        className="object-cover z-0"
        priority
      />
      <div className="absolute inset-0 bg-black/30 z-10 flex items-center p-20">
        <div className="container mx-auto px-4">
          <div className="text-white max-w-2xl">
            <p className="uppercase tracking-widest text-sm mb-2 ms-1 text-gray-300">
              men collection
            </p>
            <h3 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
              <span className="text-green-400">Show</span> Your <br />
              Personal <span className="text-green-400">Style</span>
            </h3>
            <h4 className="text-lg font-light text-gray-200 mb-8">
              Fowl saw dry which a above together place.
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

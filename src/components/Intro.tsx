"use client";

import Image from "next/image";
import React from "react";

const Intro = () => {
  return (
    <section>
      <div className="flex items-center justify-center">
        <div>
          <Image
            src="https://i.postimg.cc/sD0FRz9g/ivan.jpg"
            alt="my pict"
            width="192"
            height="192"
            quality="95"
            priority={true}
            className="h-24 w-24 rounded-full border-[0.35rem] object-cover border-color-primary shadow-xl"
          />

          <span className="text-4xl"></span>
        </div>
      </div>
    </section>
  );
};

export default Intro;

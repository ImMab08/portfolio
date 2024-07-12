import React from "react";
import Image from "next/image";

export default function Almenu() {
  return (
    <div className="hero w-auto h-auto flex flex-col space-y-5 items-center justify-center py-5 px-5 sm:px-10 ">
      <div>
        <h2 className="font-bold text-2xl sm:text-3xl text-white">Almenú</h2>
      </div>
      <div className="w-full h-full sm:px-32">
        <p className="text-white/90 text-center text-xs sm:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo.
        </p>
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/kUXBd_rDnsg"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
           />
        </div>

        <div className="mt-10">
          <h2 className="text-xl sm:text-2xl text-white font-bold">Arquitectura</h2>
         <Image className='' src="/img/img-microservicios.png" width={300} height={300} alt="" />
        </div>
        <div className="mt-10">
          <h2 className="text-xl sm:text-2xl text-white font-bold">Stack utilizado</h2>
         <Image className='' src="/img/img-microservicios.png" width={300} height={300} alt="" />
        </div>
      </div>
    </div>
  );
}

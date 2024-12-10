import React from "react";
import Image from "next/image";

export default function Plantare() {
  return (
    <div className="w-auto h-auto flex flex-col space-y-5 items-center justify-center py-5 px-5 sm:px-10 ">
      <div>
        <h2 className="font-bold text-2xl sm:text-3xl text-white">Platare</h2>
      </div>
      <div className="w-full h-full sm:px-32 space-y-5">
        <p className="text-white/90 text-center text-xs sm:text-base">
          Página web estatica con el fin de mostrar y promocionar un producto.
          Esta web fue realizada en base a los requerimientos del cliente en la
          cual se desarrollado usando métodologias como mobile-first y CTA
          (Llamando a la acción) para captar la atención del cliente en el
          producto. Con un diseño intuitivo, sencillo pero llamativo.
        </p>

        <Image
          width={1200}
          height={800}
          style={{ maxWidth: "100%", height: "auto", borderRadius: 20 }}
          src="/img/plantare-view-mobile.png"
          alt=""
        />

        <Image
          width={1200}
          height={800}
          style={{ maxWidth: "100%", height: "auto", borderRadius: 20 }}
          src="/img/plantare-view-desktop.png"
          alt=""
        />
      </div>

      <div className="">
          <h2 className="text-xl sm:text-2xl text-center text-white font-bold">
            Stack utilizado
          </h2>
        </div>
    </div>
  );
}

import React from "react";
import Image from "next/image";

export default function Almenu() {
  return (
    <div className="hero w-auto h-auto flex flex-col space-y-5 items-center justify-center py-5 px-5 sm:px-10 ">
      <div>
        <h2 className="font-bold text-2xl sm:text-3xl text-white">Almenú</h2>
      </div>
      <div className="w-full h-full sm:px-32 space-y-10">
        <p className="text-white/90 text-center text-xs sm:text-base">
          Almenú es un software POS para gestión de restaurantes. Este no es solo un
          sistema para restaurantes sino todo un ecosistema el cual va desde la organización de mesas, inventarios,
          menús, pedidos, domicilios hasta la gestión óptima y eficaz de estados financieros del restaurante, pagos a 
          proveedores o colaboradores, factura eléctronica hasta otras funciones más.
        </p>

        <Image
          width={1200}
          height={800}
          style={{ maxWidth: "100%", height: "auto", borderRadius: 20 }}
          src="/img/almenu.png"
          alt=""
        />

        <div className="">
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

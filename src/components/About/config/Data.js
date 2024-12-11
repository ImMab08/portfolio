import { IconArrowRight, IconLogoUdemy } from "@/icons";

export const carouselData = [
  [
    {
      institution: "Udemy",
      title: "Web Development Bootcamp",
      description:
      "Curso de Desarrollo Web de la Dr. Angela Yu, con un total de 61.5 horas. Con el fin de sentar y fortalecer mis conocimientos en el desarrollo web partiendo desde lo más básico hasta lo más avanzado.",
      certification: "Certificado",
      date: "2022",
      color: "text-purple-600",
      logo: <IconLogoUdemy width={15} height={30} />,
      flecha: <IconArrowRight width={25} height={25} />
    },
    {
      institution: "Udemy",
      title: "Python TOTAL - Programador avanzado en 16 días",
      description:
        "Curso de Python de Federico Garay, con un total de 30,5 horas. Con el fin de aprender el lenguaje de Python.",
      certification: "Certification",
      date: "2022",
      color: "text-purple-600",
      logo: <IconLogoUdemy width={15} height={30} />,
      flecha: <IconArrowRight width={25} height={25} />
    }
  ]
];

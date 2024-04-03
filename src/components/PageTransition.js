'use client'

import { animate, motion  } from "framer-motion"
import { useEffect, useState } from "react"

const anim = ( variants ) => {
  return {
    initial: 'initial',
    animate: "enter",
    exit: "exit",
    variants
  }
}

export default function Inner ({ children }) {
  const [dimesions, setDiomensions] = useState({
    height: 0,
    width: 0,
  })
  useEffect( () => {
    const resize = () =>{
      setDiomensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
      resize();
      window.addEventListener("resize", resize)
      return () => window.removeEventListener("resize", resize)
    }
  })

  return (
    <div className="page curve">
      <div style={{opacity: dimesions.width > 0 ? 0 : 1}} className="background"></div>
      {dimesions.width > 0 && <SVG {...dimesions}/>}
      {children}
    </div>
  )
}

const SVG = ({width, height}) => {
  const initialPath = `
    M0 300
    Q${width / 2} 0 ${width / 2} 300
    L${width} ${height + 300}
    Q${width / 2} ${height + 600} 0 ${height + 300}
    L0 300
  `
  const targetPath = `
    M0 300
    Q${width / 2} 0 ${width / 2} 300
    L${width} ${height}
    Q${width / 2} ${height} 0 ${height}
    L0 300
  `

  const curve = {
    initial: {
      d: initialPath
    },
    enter: {
      d: {
        targetPath,
        transition: {
          duration: .75,
          delay: 0.3, 
          ease: [0.76, 0, 0.24, 1]
        }
      }
    },
    exit: {
      d: initialPath
    }
  }

  const slide = {
    initial: {
      top: "-300px"
    },
    enter: {
      top: "-100vh",
      transition: {
        duration: .75,
        delay: 0.3, 
        ease: [0.76, 0, 0.24, 1]
      },
      transitionEnd: {
        top: "100vh"
      },
    },
    exit: {
      top: "-300px",
      transition: {
        duration: .75,
        delay: 0.3, 
        ease: [0.76, 0, 0.24, 1]
      },
    }
  }

  return (
    <motion.svg {...anim(slide)}>
      <motion.path {...anim(curve)}></motion.path>
    </motion.svg>
  )
}


// 'use client'
// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// const TransitionEffect = () => {
//   const [active, setActive] = useState(false);

//   useEffect(() => {
//     setTimeout(() => {
//       setActive(true);
//     }, 100);
//   }, []);

//   return (
//     <>
//       <motion.div
//         className="fixed top-0 bottom-0 left-0 w-screen h-screen z-30 bg-red-200"
//         initial={{ x: "-100%", width: "100%" }} // Cambiado x: "100%" a x: "-100%"
//         animate={{ x: "0%", width: "0%" }}
//         exit={{ x: ["0%", "-100%"], width: ["0%", "100%"] }} // Cambiado x: ["0%", "100%"] a x: ["0%", "-100%"]
//         transition={{ duration: 0.4, ease: "easeInOut" }}
//       />
//       <motion.div
//         className="fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-red-400"
//         initial={{ x: "100%", width: "100%" }}
//         animate={{ x: "0%", width: "0%" }}
//         transition={{ delay: 0.2, duration: 0.4, ease: "easeInOut" }}
//       />
//       <motion.div
//         className="fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-red-600"
//         initial={{ x: "100%", width: "100%" }}
//         animate={{ x: "0%", width: "0%" }}
//         transition={{ delay: 0.4, duration: 0.4, ease: "easeInOut" }}
//       />
//     </>
//   );
// };

// export default TransitionEffect;
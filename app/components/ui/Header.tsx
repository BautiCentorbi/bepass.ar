"use client";

import React from "react";
import { motion } from "motion/react";
import Image from "next/image";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-[1440px] flex justify-start items-center mx-8 md:mx-48 2xl:mx-56 h-32"
    >
      <Image
        src="/images/MUTA-Logo_Header.svg"
        alt="Logo de MUTA"
        placeholder="blur"
        blurDataURL="/images/MUTA-Logo_Header.svg"
        width={214}
        height={120}
      />
    </motion.header>
  );
};

export default Header;

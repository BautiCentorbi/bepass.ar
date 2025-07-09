"use client";

import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import NeumorphismButton from "./NeumorphismButton";
import { Send } from "lucide-react";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-[1440px] flex justify-between items-center mx-8 md:mx-48 2xl:mx-56 h-32"
    >
      <Image
        src="/images/MUTA-Logo_Header.svg"
        alt="Logo de MUTA"
        width={214}
        height={120}
      />
      <NeumorphismButton ariaLabel="Contactanos" label="Contactanos">
        <Send />
      </NeumorphismButton>
    </motion.header>
  );
};

export default Header;

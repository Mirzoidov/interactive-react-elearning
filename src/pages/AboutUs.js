import React from "react";
import AboutSection from "../components/AboutSection";
import BenefitsSection from "../components/BenefitsSection";
import FaqSection from "../components/FaqSection";
// Animation
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const AboutUs = () => {
  return (
    <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit">
      <AboutSection />
      <BenefitsSection />
      <FaqSection />
    </motion.div>
  );
};

export default AboutUs;

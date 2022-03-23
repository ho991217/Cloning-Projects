import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const Wrapper = styled(motion.div)`
  position: absolute;
  bottom: -15%;
  left: 0px;
  right: 0;
  width: 100%;
  height: 130%;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  z-index: 0;
`;

function Highlight() {
  return (
    <Wrapper
      transition={{
        layout: {
          duration: 0.35,
          ease: "easeInOut",
        },
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      layoutId="highlight"
    />
  );
}

export default Highlight;

import React, { useRef } from "react";
import { motion } from "framer-motion";

const Box = () => {
    const parentRef = useRef(null)
  return (
    <div
    ref={parentRef}
    className="flex flex-wrap justify-center items-center h-screen w-screen overflow-hidden">
      <motion.div
        drag
        dragMomentum={false}
        whileDrag={{scale:'1.05'}}
        dragConstraints={parentRef}
        className="border border-black bg-red-600 h-48 m-2 w-full sm:w-2/3 md:w-1/2 lg:w-1/3"
      >
        Box 1
      </motion.div>
      <motion.div
        drag
        dragMomentum={false}
       dragConstraints={parentRef}
        className="border border-black h-64 m-2 bg-blue-500 w-full sm:w-2/3 md:w-1/2 lg:w-1/3"
      >
        Box 2
      </motion.div>
      <motion.div
        drag
        dragMomentum={false}
        dragConstraints={parentRef}
        className="border border-black h-40 m-2 bg-green-400  w-full sm:w-2/3 md:w-1/2 lg:w-1/3"
      >
        Box 3
      </motion.div>
    </div>
  );
};

export default Box;

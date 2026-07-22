// "use client";

// import { motion } from "framer-motion";

// export default function PageWrapper({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <motion.main
//       initial={{
//         opacity: 0,
//         y: 20,
//       }}
//       animate={{
//         opacity: 1,
//         y: 0,
//       }}
//       transition={{
//         duration: 0.5,
//       }}
//     >
//       {children}
//     </motion.main>
//   );
// }

"use client";

import type { ReactNode } from "react";

import { motion } from "framer-motion";

interface PageWrapperProps {
  children: ReactNode;
}

export default function PageWrapper({ children }: PageWrapperProps) {
  return (
    <motion.main
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.main>
  );
}
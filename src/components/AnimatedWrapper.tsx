import { ReactNode } from "react";
import { motion, MotionProps } from "framer-motion";

interface AnimatedWrapperProps {
  children: ReactNode;
  animationProps: MotionProps;
}

const AnimatedWrapper = ({
  children,
  animationProps,
}: AnimatedWrapperProps) => {
  return <motion.div {...animationProps}>{children}</motion.div>;
};

export default AnimatedWrapper;

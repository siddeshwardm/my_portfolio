import type { Transition, Variants } from "framer-motion";

const easeOutQuint: Transition["ease"] = [0.22, 1, 0.36, 1];

export function staggerContainer(
  stagger = 0.12,
  delayChildren = 0.08
): Variants {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: stagger,
        delayChildren,
      },
    },
  };
}

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOutQuint },
  },
};

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOutQuint },
  },
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -22 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: easeOutQuint },
  },
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 22 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: easeOutQuint },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.45, ease: easeOutQuint },
  },
};

export const hoverLift = {
  y: -6,
  transition: { duration: 0.2, ease: easeOutQuint },
};

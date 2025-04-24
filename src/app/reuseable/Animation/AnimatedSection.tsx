'use client';

import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

type AnimatedSectionProps = {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
};

export default function AnimatedSection({
  children,
  delay = 0.1,
  duration = 0.8,
}: AnimatedSectionProps) {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: false, // 👈 Animate every time it comes into view
    amount: 0.3,
  });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden'); // 👈 Smoothly animate out on scroll out
    }
  }, [inView, controls]);

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: {
          opacity: 0,
          y: 50,
          scale: 0.98,
          filter: 'blur(6px)',
          transition: {
            ease: [0.65, 0, 0.35, 1],
            duration: duration * 0.6,
          },
        },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: 'blur(0px)',
          transition: {
            ease: [0.22, 1, 0.36, 1], // Apple-style
            duration,
            delay,
          },
        },
      }}
      style={{ willChange: 'transform, opacity, filter' }}
    >
      {children}
    </motion.section>
  );
}

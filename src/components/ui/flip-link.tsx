import React from 'react';
import { motion } from 'framer-motion';

interface FlipLinkProps {
  children: string;
  href: string;
}

const FlipLink = ({ children, href }: FlipLinkProps) => {
  const DURATION = 0.25;
  const STAGGER = 0.025;
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      whileTap="hovered"
      target="_blank"
      href={href}
      className="relative block overflow-hidden whitespace-nowrap text-5xl font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl"
      style={{
        lineHeight: 0.75,
      }}
    >
      <div>
        {children.split('').map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: '-100%',
              },
            }}
            transition={{
              duration: DURATION,
              ease: 'easeInOut',
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split('').map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: '100%',
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: 'easeInOut',
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};

export default FlipLink;

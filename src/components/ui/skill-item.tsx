import { useMotionValue, motion, useSpring, useTransform } from 'framer-motion';
import React, { useRef } from 'react';

interface SkillItemProps {
  category: string;
  skills: string;
  imgSrc: string;
  index: number;
}

const SkillItem = ({ category, skills, imgSrc, index }: SkillItemProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ['40%', '60%']);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ['60%', '70%']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = ref.current!.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      whileTap="whileHover"
      className="relative flex-col"
    >
      <div className="flex flex-col items-center justify-center py-8 lg:flex-row lg:items-center lg:justify-between">
        <motion.div className="bg-[#222222] p-1 lg:p-3">{category}</motion.div>
        <motion.div className="relative z-10 break-all text-center">
          {skills}
        </motion.div>
        <motion.img
          style={{
            top,
            left,
            translateX: '-50%',
            translateY: '-50%',
          }}
          variants={{
            initial: { scale: 0, rotate: '-12.5deg', opacity: 0 },
            whileHover: { scale: 1, rotate: '12.5deg', opacity: 0.8 },
          }}
          transition={{ type: 'spring' }}
          src={imgSrc}
          className="pointer-events-none absolute z-10 h-24 w-32 rounded-lg object-cover"
          alt={`Image representing ${category}`}
        />
      </div>
      <motion.div
        className="h-[1px] bg-neutral-200 dark:bg-neutral-700"
        custom={index}
        variants={{
          hidden: {
            width: '0%',
            x: 0,
          },
          show: (index) => ({
            width: '100%',
            x: 0,
            transition: {
              type: 'spring',
              duration: 5,
              bounce: 0.2,
              delay: index * 3 + 0.2,
            },
          }),
        }}
      ></motion.div>
    </motion.div>
  );
};

export default SkillItem;

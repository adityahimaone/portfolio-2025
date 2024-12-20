'use client';
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from 'framer-motion';
import { AudioLines, Disc3 } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import { InView } from '../motion-ui/in-view';

interface TimelineEntry {
  title: string | React.ReactNode;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 10%', 'end 50%'],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-white font-sans dark:bg-background-2"
      ref={containerRef}
    >
      <div className="mx-auto max-w-7xl px-4 py-20">
        <InView
          variants={{
            hidden: {
              opacity: 0,
              y: 100,
            },
            visible: {
              opacity: 1,
              y: 0,
            },
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          viewOptions={{ margin: '0px 0px -150px 0px' }}
        >
          <h2 className="flex items-center py-10 font-unbounded text-2xl lg:text-4xl">
            TIMELINE EXPERIENCES
            <AudioLines className="ml-2 h-6 w-6 flex-none text-secondary" />
          </h2>
        </InView>
      </div>
      <div ref={ref} className="relative mx-auto max-w-7xl pb-20 pr-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:gap-10 md:pt-20"
          >
            <div className="sticky top-40 z-40 flex max-w-xs flex-col items-center self-start md:w-full md:flex-row lg:max-w-sm">
              <div className="absolute left-2 flex h-8 w-8 items-center  justify-center rounded-full bg-white dark:bg-black md:left-3 md:h-10 md:w-10">
                {/* <div className="h-3 w-3 rounded-full border border-neutral-300 bg-neutral-200 p-2 dark:border-neutral-700 dark:bg-neutral-800 md:h-4 md:w-4" /> */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
                >
                  <Disc3 className="h-4 w-4 text-neutral-500 dark:text-neutral-500 md:h-6 md:w-6" />
                </motion.div>
              </div>
              <h3 className="hidden text-xl font-bold text-neutral-500 dark:text-neutral-500 md:block md:pl-20 md:text-5xl ">
                {item.title}
              </h3>
            </div>
            <div className="relative w-full pl-14 md:pl-4 md:pr-4">
              <h3 className="mb-4 block text-left text-2xl font-bold text-neutral-500 dark:text-neutral-500 md:hidden">
                {item.title}
              </h3>
              {item.content}{' '}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + 'px',
          }}
          className="absolute left-6 top-0 w-[2px] overflow-hidden bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] dark:via-neutral-700  md:left-8 "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] rounded-full bg-gradient-to-t from-purple-500 from-[0%] via-secondary via-[10%] to-transparent"
          />
        </div>
      </div>
    </div>
  );
};

'use client';

import { BackpackIcon, Home, PhoneCall, Settings, User } from 'lucide-react';
import AnimatedBackground from './motion-ui/animated-background';
import Link from 'next/link';
import { FaTimeline } from 'react-icons/fa6';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function AnimatedTabs() {
  const [showTabs, setShowTabs] = useState(false);

  const TABS = [
    {
      label: 'Home',
      icon: <Home className="h-5 w-5" />,
      href: '#hero',
    },
    {
      label: 'About',
      icon: <User className="h-5 w-5" />,
      href: '#about',
    },
    {
      label: 'skills',
      icon: <FaTimeline className="h-5 w-5" />,
      href: '#skills',
    },
    {
      label: 'timeline',
      icon: <FaTimeline className="h-5 w-5" />,
      href: '#experience',
    },
    {
      label: 'works',
      icon: <BackpackIcon className="h-5 w-5" />,
      href: '#works',
    },
    {
      label: 'contact',
      icon: <PhoneCall className="h-5 w-5" />,
      href: '#contact',
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowTabs(true);
      } else {
        setShowTabs(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 z-50"
      initial={{ y: '100%' }}
      animate={{ y: showTabs ? -10 : '100%' }}
      transition={{ type: 'spring', bounce: 0.2, duration: 0.3 }}
    >
      <div className="flex justify-center md:hidden">
        <div className="flex w-fit space-x-2 rounded-xl border border-zinc-950/10 bg-neutral-900 p-2">
          <AnimatedBackground
            defaultValue={TABS[0].label}
            className="rounded-lg bg-zinc-950"
            transition={{
              type: 'spring',
              bounce: 0.2,
              duration: 0.3,
            }}
          >
            {TABS.map((tab) => (
              <Link
                href={tab.href}
                key={tab.label}
                data-id={tab.label}
                type="button"
                className="inline-flex h-9 w-9 items-center justify-center text-zinc-500 transition-colors duration-100 focus-visible:outline-2 data-[checked=true]:text-secondary"
              >
                {tab.icon}
              </Link>
            ))}
          </AnimatedBackground>
        </div>
      </div>
    </motion.div>
  );
}

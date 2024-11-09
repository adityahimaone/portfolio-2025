import { type ClassValue, clsx } from 'clsx';
import { useEffect, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Custom hook to detect text overflow
export const useTextOverflow = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const [contentWidth, setContentWidth] = useState(0);

  useEffect(() => {
    const element = textRef.current;
    if (element) {
      setIsOverflowing(element.scrollWidth > element.clientWidth);
      setContentWidth(element.scrollWidth);
    }
  }, []);

  return { textRef, isOverflowing, contentWidth };
};

export const useMobileViewport = (breakpoint: number = 768) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    // Check on mount
    checkMobile();

    // Add event listener
    window.addEventListener('resize', checkMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, [breakpoint]);

  return isMobile;
};

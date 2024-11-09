'use client';

import React, { SVGProps, useRef } from 'react';
import { IconTableColumn } from '@tabler/icons-react';
import { IListItem } from '@/lib/types';
import ItemTwo from '@/components/ItemTwo';
import About from '@/components/About';
import SocialMedia from '@/components/SocialMedia';
import Experience from '@/components/Experience';
import TechStack from '@/components/TechStack';
import SkeletonMask from '@/components/SkeletonMask';
import { projectsData } from '@/lib/data';
import { useTranslations } from 'next-intl';
import { TextEffect } from '@/components/motion-ui/text-effect';
import { SpinningText } from '@/components/motion-ui/spinning-text';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { Timeline } from '@/components/ui/timeline';
import FlipLink from '@/components/ui/flip-link';
import NowPlaying from '@/components/NowPlaying';
import { Cursor } from '@/components/motion-ui/cursor';
import { ArrowRight, AudioLines, Music2, Music3, Music4 } from 'lucide-react';
import { BackgroundBeams } from '@/components/ui/background-beams';
import SkillItem from '@/components/ui/skill-item';
import { InView } from '@/components/motion-ui/in-view';
import { TextScramble } from '@/components/motion-ui/text-scramble';
import { useMobileViewport } from '@/lib/utils';

interface Props {
  params: {
    locale: string;
  };
}

const Page = ({ params: { locale } }: Props) => {
  const t = useTranslations('projects');

  const isMobile = useMobileViewport();

  const refSectionHero = useRef<HTMLDivElement>(null);
  const refSectionAbout = useRef<HTMLDivElement>(null);
  const refSectionSkills = useRef<HTMLDivElement>(null);
  const refSectionWorks = useRef<HTMLDivElement>(null);
  const isInViewSectionHero = useInView(refSectionHero, {
    once: true,
  });
  const isInViewSectionAbout = useInView(refSectionAbout);
  const isInViewSectionSkills = useInView(refSectionSkills);
  const isInViewSectionWorks = useInView(refSectionWorks);

  const initialItem: IListItem[] = [
    {
      header: <About />,
      className: 'md:col-span-2 px-7 py-8',
      active: true,
    },
    {
      header: <ItemTwo />,
      className: 'md:col-span-1',
      active: true,
    },
    {
      header: <SocialMedia />,
      className: 'md:col-span-1 px-7 py-8',
      active: true,
    },
    {
      header: <TechStack />,
      className: 'md:col-span-2 px-7 py-8',
      icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
      active: true,
    },
    {
      header: <Experience />,
      className: 'md:col-span-1 md:row-span-2 p-4',
      active: true,
    },
    {
      title: projectsData[0].title,
      description: t(`${[0]}.description`),
      header: <SkeletonMask image={projectsData[0].image} />,
      className: 'md:col-span-1 p-4',
      icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
      active: true,
    },
    {
      title: projectsData[1].title,
      description: t(`${[1]}.description`),
      header: <SkeletonMask image={projectsData[1].image} />,
      className: 'md:col-span-1 p-4',
      icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
      active: true,
    },

    {
      title: projectsData[2].title,
      description: t(`${[2]}.description`),
      header: <SkeletonMask image={projectsData[2].image} />,
      className: 'md:col-span-1 p-4',
      icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
      active: true,
    },
    {
      title: projectsData[3].title,
      description: t(`${[3]}.description`),
      header: <SkeletonMask image={projectsData[3].image} />,
      className: 'md:col-span-1 p-4',
      icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
      active: true,
    },
  ];

  const timelineData = [
    {
      title: 'APR 2024 - SEP 2024',
      content: (
        <div>
          <h3 className="mb-1 text-2xl font-medium text-neutral-800 dark:text-neutral-200">
            Frontend Developer{' '}
            <span className="text-base font-light text-neutral-400 md:text-lg">
              Part Time
            </span>
          </h3>
          <p className="mb-3 text-lg text-secondary">
            80&Company - Kyoto, Japan
          </p>
          <ul className="space-y-3">
            <li className="inline-flex items-start gap-2">
              <div className="mt-2 h-2 w-2 flex-none bg-secondary" />
              Spearheaded the development of a next-generation Human Resources
              Management System incorporating blockchain technology to ensure
              enhanced data security and decentralization.
            </li>
            <li className="inline-flex items-start gap-2">
              <div className="mt-2 h-2 w-2 flex-none bg-secondary" />
              Also responsible for maintaining the application, resolving
              critical bugs to improve system reliability and user experience
            </li>
            <li className="inline-flex items-start gap-2">
              <div className="mt-2 h-2 w-2 flex-none bg-secondary" />
              Collaborated with the design team to create a user-friendly
              interface and ensure a seamless user experience.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: 'OCT 2022 - PRESENT',
      content: (
        <div>
          <h3 className="mb-1 text-xs font-normal text-neutral-800 dark:text-neutral-200 md:text-2xl">
            Frontend Developer{' '}
          </h3>
          <p className="mb-3 text-lg text-secondary">
            Fast 8 People Hub - Jakarta, Indonesia
          </p>
          <ul className="mb-3 space-y-3">
            <li className="inline-flex items-start gap-2">
              <div className="mt-2 h-2 w-2 flex-none bg-secondary" />
              Spearheaded the development of a next-generation Human Resources
              Management System incorporating blockchain technology to ensure
              enhanced data security and decentralization.
            </li>
            <li className="inline-flex items-start gap-2">
              <div className="mt-2 h-2 w-2 flex-none bg-secondary" />
              Also responsible for maintaining the application, resolving
              critical bugs to improve system reliability and user experience
            </li>
            <li className="inline-flex items-start gap-2">
              <div className="mt-2 h-2 w-2 flex-none bg-secondary" />
              Collaborated with the design team to create a user-friendly
              interface and ensure a seamless user experience.
            </li>
          </ul>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Image
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="h-40  w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="h-40  w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: 'JUN 2022 - AUG 2024',
      content: (
        <div>
          <h3 className="mb-1 text-xs font-normal text-neutral-800 dark:text-neutral-200 md:text-2xl">
            Frontend Developer{' '}
          </h3>
          <p className="mb-3 text-lg text-secondary">
            Unzypsoft - Jakarta, Indonesia
          </p>
          <ul className="space-y-3">
            <li className="inline-flex items-start gap-2">
              <div className="mt-2 h-2 w-2 flex-none bg-secondary" />
              Spearheaded the development of a next-generation Human Resources
              Management System incorporating blockchain technology to ensure
              enhanced data security and decentralization.
            </li>
            <li className="inline-flex items-start gap-2">
              <div className="mt-2 h-2 w-2 flex-none bg-secondary" />
              Also responsible for maintaining the application, resolving
              critical bugs to improve system reliability and user experience
            </li>
            <li className="inline-flex items-start gap-2">
              <div className="mt-2 h-2 w-2 flex-none bg-secondary" />
              Collaborated with the design team to create a user-friendly
              interface and ensure a seamless user experience.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: (
        <span>
          <span className="text-secondary">V</span>ocational{' '}
          <span className="text-secondary">O</span>nline{' '}
          <span className="text-secondary">C</span>ourses
        </span>
      ),
      content: (
        <div className="flex flex-col gap-3">
          <div>
            <h3 className="mb-1 text-xs font-normal text-neutral-800 dark:text-neutral-200 md:text-2xl">
              Frontend Developer{' '}
              <span className="text-neutral-400">FEB 2022 - JUL 2022</span>
            </h3>
            <p className="mb-3 text-lg text-secondary">
              Bootcamp Frontend Developer By Binar Academy
            </p>
            <ul className="space-y-3">
              <li className="inline-flex items-start gap-2">
                <div className="mt-2 h-2 w-2 flex-none bg-secondary" />
                Focused on developing a frontend application for car booking
                using a modern stack including NodeJS, EJS, ReactJS, and NextJS.
                The project aimed at providing a user-friendly interface for
                booking vehicles, improving the service accessibility for users.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-1 text-xs font-normal text-neutral-800 dark:text-neutral-200 md:text-2xl">
              Fullstack Engineering{' '}
              <span className="text-neutral-400">AUG 2021 - JAN 2022</span>
            </h3>
            <p className="mb-3 text-lg text-secondary">
              Bootcamp Frontend Developer By Alterra Academy
            </p>
            <ul className="space-y-3">
              <li className="inline-flex items-start gap-2">
                <div className="mt-2 h-2 w-2 flex-none bg-secondary" />
                Developed a comprehensive Calories Tracker & Hospital Management
                System, using a Golang backend for efficient data handling and a
                ReactJS frontend for a smooth user experience. The project
                supported hospital management and health tracking
                functionalities.
              </li>
            </ul>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="https://assets.aceternity.com/pro/hero-sections.png"
                alt="hero template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              />
              <Image
                src="https://assets.aceternity.com/features-section.png"
                alt="feature template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              />
            </div>
          </div>
          <div>
            <h3 className="mb-1 text-xs font-normal text-neutral-800 dark:text-neutral-200 md:text-2xl">
              Cloud Computing
              <span className="text-neutral-400">FEB 2021 - JUL 2021</span>
            </h3>
            <p className="mb-3 text-lg text-secondary">
              Bangkit Academy By Google, Tokopedia, Gojek, & Traveloka
            </p>
            <ul className="space-y-3">
              <li className="inline-flex items-start gap-2">
                <div className="mt-2 h-2 w-2 flex-none bg-secondary" />
                Collaborated on a capstone project to develop a machine learning
                application that estimates calories from food images. Integrated
                with Firebase and deployed on Google Cloud, this project
                utilized cloud balancing to optimize resource use and enhance
                application performance.
              </li>
            </ul>
          </div>
        </div>
      ),
    },
  ];

  const dataSkills = [
    {
      category: 'Languages',
      skills: 'HTML • CSS • JavaScript • TypeScript • Go • Swift',
      imgSrc:
        'https://i.gifer.com/origin/2b/2b604178397000ee589a86d3e9e10b5a_w200.gif',
    },
    {
      category: 'Frameworks',
      skills: 'React • Next • Remix • TailwindCSS',
      imgSrc:
        'https://images.ctfassets.net/23aumh6u8s0i/6pjUKboBuFLvCKkE3esaFA/5f2101d6d2add5c615db5e98a553fc44/nextjs.jpeg',
    },
    {
      category: 'Animations',
      skills: 'Framer Motion • Lottie • GSAP',
      imgSrc:
        'https://camo.githubusercontent.com/02bc2b08d9850c146f2d8e6f09dc971bce7f65dcfc45fa87f9d9e8c244bac28e/68747470733a2f2f6672616d657275736572636f6e74656e742e636f6d2f696d616765732f704d534f6d47503256387353615a525632443769344854425465342e706e67',
    },
    {
      category: 'Design & Tools',
      skills: 'Figma • VSCode • Git',
      imgSrc:
        'https://cdn.sanity.io/images/599r6htc/regionalized/9cd9e0e6b2c322b439633e76e1b7e6fd6c340824-1920x1080.png?rect=0,1,1920,1079&w=804&h=452&q=75&fit=max&auto=format',
    },
    {
      category: 'Project Management',
      skills: 'Trello • Taiga',
      imgSrc:
        'https://images.ctfassets.net/rz1oowkt5gyp/4kCNudjaBYj90CGgG7Lict/cbafa67336b2007278f50d99ceabfb22/Boards_2x.png?w=540',
    },
  ];

  const MouseIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={26}
        height={31}
        fill="none"
        {...props}
      >
        <g clipPath="url(#a)">
          <path
            fill={'#4eef91'}
            fillRule="evenodd"
            stroke={'#fff'}
            strokeLinecap="square"
            strokeWidth={2}
            d="M21.993 14.425 2.549 2.935l4.444 23.108 4.653-10.002z"
            clipRule="evenodd"
          />
        </g>
        <defs>
          <clipPath id="a">
            <path fill={'#4eef91'} d="M0 0h26v31H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  };

  const mailtoUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=adityahimaone@gmail.com&su=${encodeURIComponent('Collaboration Opportunity')}&body=${encodeURIComponent("Hi Aditya,\n\nI'm reaching out because I'm interested in collaborating with you. I'd love to discuss potential opportunities to work together.\n\nLooking forward to hearing from you.\n\nBest regards,")}`;

  return (
    <main className="py-3">
      <div className="relative w-full overflow-x-clip bg-background-2 bg-dot-black/[0.2] dark:bg-dot-white/[0.2]">
        <header className="container py-3">
          <p>adit.</p>
        </header>
        <section id="hero" className="relative">
          <div className="container relative flex h-[90vh] flex-col py-[70px]">
            <div
              ref={refSectionHero}
              className="flex h-full flex-row items-end justify-start"
            >
              <div className="flex flex-col pb-20">
                {/* link resume */}
                <div className="rounded-[12px]text-xl z-10 mb-5 w-fit">
                  <Cursor
                    attachToParent
                    variants={{
                      initial: { scale: 0.3, opacity: 0 },
                      animate: { scale: 1, opacity: 1 },
                      exit: { scale: 0.3, opacity: 0 },
                    }}
                    transition={{
                      ease: 'easeInOut',
                      duration: 0.15,
                    }}
                    className="left-12 top-4"
                  >
                    <div>
                      <MouseIcon className="h-6 w-6" />
                      <div className="ml-4 mt-1 w-full rounded-[4px] bg-[#4eef91] px-2 py-0.5 text-sm text-slate-800">
                        click to download resume
                      </div>
                    </div>
                  </Cursor>
                  <motion.a
                    href="#"
                    target="_blank"
                    variants={{
                      hidden: { x: -100, opacity: 0 },
                      animate: {
                        x: 0,
                        opacity: 1,
                        transition: {
                          type: 'spring',
                          bounce: 0.4,
                          duration: 0.8,
                          delay: 5,
                        },
                      },
                    }}
                  >
                    <button className="group relative inline-flex h-[calc(38px+4px)] cursor-none items-center justify-center rounded-full bg-neutral-800 py-1 pl-6 pr-10 font-medium text-neutral-50 lg:h-[calc(48px+8px)] lg:pr-14">
                      <span className="z-10 pr-2 text-sm group-hover:text-slate-700 lg:text-base">
                        RESUME
                      </span>
                      <div className="absolute right-1 inline-flex h-9 w-9 items-center justify-end rounded-full bg-secondary transition-[width] group-hover:w-[calc(100%-8px)] lg:h-12 lg:w-12">
                        <div className="mr-2 flex items-center justify-center lg:mr-3">
                          <ArrowRight className="h-5 w-5 text-neutral-50 group-hover:text-slate-700 lg:h-6 lg:w-6" />
                        </div>
                      </div>
                    </button>
                  </motion.a>
                </div>
                {/* text hero */}
                <TextEffect
                  per="char"
                  preset="fade"
                  as="h1"
                  className="font-unbounded text-4xl capitalize leading-none md:text-7xl lg:text-8xl xl:text-[165px]"
                  trigger={isInViewSectionHero}
                >
                  Code
                </TextEffect>
                <div className="flex">
                  <TextEffect
                    per="char"
                    preset="slide"
                    as="h1"
                    className="font-unbounded text-4xl capitalize text-secondary md:text-7xl lg:text-8xl xl:text-[165px]"
                    trigger={isInViewSectionHero}
                    delay={0.3}
                  >
                    Virtuoso
                  </TextEffect>
                  <TextEffect
                    per="char"
                    preset="fade"
                    className="font-unbounded text-4xl text-secondary md:text-7xl lg:text-8xl xl:text-[165px]"
                    trigger={isInViewSectionHero}
                    delay={0.8}
                    variants={{
                      item: {
                        visible: {
                          opacity: 1,
                          transition: {
                            repeat: Infinity,
                            repeatType: 'reverse',
                            duration: 0.5,
                          },
                        },
                        hidden: { opacity: 0 },
                      },
                    }}
                  >
                    _
                  </TextEffect>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 flex-none bg-secondary" />
              <TextScramble trigger={isInViewSectionHero} duration={2}>
                JKT, IND
              </TextScramble>
            </div>
            <div className="absolute right-12 top-10 transition-all md:top-24 xl:right-10">
              <SpinningText
                radius={isMobile ? 5 : 6}
                fontSize={isMobile ? 0.8 : 1.2}
                className="font-medium leading-none"
              >
                {`frontend • dynamic-ui • pixel-perfect • `}
              </SpinningText>
              <Music4 className="-mt-3 h-7 w-7 text-white md:-mt-5 md:h-10 md:w-10" />
            </div>
            <div className="">
              <div className="absolute -bottom-10 -left-[50%] z-10 inline-flex h-20 w-[200%] flex-nowrap overflow-hidden bg-[#222222] shadow-lg">
                <div className="inline-flex w-full flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                  <ul className="flex h-full w-full animate-infinite-scroll-ltr items-center justify-center space-x-5 text-lg font-medium md:justify-start md:text-xl [&_img]:max-w-none [&_li]:mx-8">
                    {Array.from({ length: 8 }).map((_, i) => (
                      <li key={i} className="flex w-52 flex-none items-center">
                        <span>code maestro</span>
                        <Music2 className="ml-8 h-4 w-4" />
                      </li>
                    ))}
                  </ul>
                  <ul className="hidden h-full w-full animate-infinite-scroll-ltr items-center justify-center space-x-5 text-lg font-medium md:justify-start md:text-xl lg:flex [&_img]:max-w-none [&_li]:mx-8">
                    {Array.from({ length: 8 }).map((_, i) => (
                      <li key={i} className="flex w-52 flex-none items-center">
                        <span>code maestro</span>
                        <Music2 className="ml-8 h-4 w-4" />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="absolute -bottom-10 -left-[50%] flex h-20 w-[200%] rotate-[-20deg] justify-center bg-neutral-700 opacity-50 shadow-xl lg:rotate-[-8deg]">
                <div className="inline-flex w-full flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                  <ul className="flex h-full w-full animate-infinite-scroll items-center justify-center space-x-5 text-lg font-medium md:justify-start md:text-xl [&_img]:max-w-none [&_li]:mx-8">
                    {Array.from({ length: 8 }).map((_, i) => (
                      <li key={i} className="flex w-44 flex-none items-center">
                        <span>UI virtuoso</span>
                        <Music2 className="ml-8 h-4 w-4" />
                      </li>
                    ))}
                  </ul>
                  <ul className="hidden h-full w-full animate-infinite-scroll items-center justify-center space-x-5 text-lg font-medium md:justify-start md:text-xl lg:flex [&_img]:max-w-none [&_li]:mx-8">
                    {Array.from({ length: 8 }).map((_, i) => (
                      <li key={i} className="flex w-44 flex-none items-center">
                        <span>UI virtuoso</span>
                        <Music2 className="ml-8 h-4 w-4" />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <BackgroundBeams />
        </section>
      </div>
      <section
        id="about"
        className="container mb-32 mt-60 flex h-full flex-col gap-8 overflow-hidden lg:flex-row lg:items-center lg:justify-between"
      >
        <div
          ref={refSectionAbout}
          className="mx-auto flex max-w-screen-2xl flex-col items-start justify-center"
        >
          <TextScramble
            className="mb-5 bg-[#222222] p-3 text-lg"
            trigger={isInViewSectionAbout}
            duration={1}
          >
            @adityahimaone
          </TextScramble>
          <TextEffect
            per="line"
            as="p"
            className="text-pretty break-words font-unbounded text-lg font-light leading-relaxed md:text-2xl"
            trigger={isInViewSectionAbout}
            delay={0.3}
            variants={{
              container: {
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.2 },
                },
              },
              item: {
                hidden: {
                  opacity: 0,
                  y: 40,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.4,
                  },
                },
              },
            }}
          >
            I&apos;m Aditya Himawan, a dedicated Frontend Developer with 2+
            years of experience. I craft visually appealing and user-friendly
            web interfaces. Music is one of my passions - it provides
            inspiration for my creative process. My approach blends technical
            expertise and artistic sensibility, resulting in clean, efficient
            code and visually striking designs. I&apos;m always seeking new
            challenges that push the boundaries of web development.
          </TextEffect>
        </div>
        <InView
          variants={{
            hidden: {
              opacity: 0,
              x: 50,
            },
            visible: {
              opacity: 1,
              x: 0,
            },
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          viewOptions={{ margin: '0px 0px -350px 0px' }}
        >
          <NowPlaying />
        </InView>
      </section>
      <section
        id="skills"
        className="container min-h-[70vh] border-t border-neutral-200 dark:border-neutral-700"
      >
        <div className="py-20 " ref={refSectionSkills}>
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
              SKILLS
              <AudioLines className="ml-2 h-6 w-6 text-secondary" />
            </h2>
          </InView>
          <InView
            viewOptions={{ once: false, margin: '0px 0px -50px 0px' }}
            variants={{
              hidden: {
                opacity: 0,
              },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.5,
                },
              },
            }}
          >
            {dataSkills.map((item, index) => (
              <motion.div
                key={item.category}
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    transition: {
                      type: 'spring',
                      duration: 0.5,
                    },
                  },
                }}
                className="text-lg"
              >
                <SkillItem
                  category={item.category}
                  skills={item.skills}
                  imgSrc={item.imgSrc}
                  index={index}
                />
              </motion.div>
            ))}
          </InView>
        </div>
      </section>
      <section id="experience" className="container w-full">
        <Timeline data={timelineData} />
      </section>
      <section id="works" className="relative min-h-[70vh] overflow-x-clip">
        <div className="container pb-40 pt-80" ref={refSectionWorks}>
          <div className="border-t border-neutral-200 dark:border-neutral-700">
            <InView
              variants={{
                hidden: {
                  opacity: 0,
                  x: -100,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              viewOptions={{ margin: '0px 0px -350px 0px' }}
            >
              <h2 className="flex items-baseline py-10 font-unbounded text-2xl lg:text-4xl">
                WORKS
                <AudioLines className="ml-2 h-6 w-6 text-secondary" />
              </h2>
            </InView>
            <InView
              viewOptions={{ once: false, margin: '0px 0px -250px 0px' }}
              variants={{
                hidden: {
                  opacity: 0,
                },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.5,
                  },
                },
              }}
            >
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {[1, 2, 3, 4].map((_, index) => (
                  <motion.div
                    key={index}
                    variants={{
                      hidden: {
                        opacity: 0,
                        scale: 1.2,
                      },
                      visible: {
                        opacity: 1,
                        scale: 1,
                      },
                    }}
                    transition={{ duration: 0.1, ease: 'easeInOut' }}
                    className="relative flex h-[250px] w-full  overflow-hidden rounded-lg transition-all md:h-[400px] lg:h-[450px]"
                  >
                    <motion.div
                      className="relative h-[250px] w-full rounded-lg md:h-[400px] lg:h-[450px]"
                      whileHover={{
                        scale: 1.1,
                        transition: { duration: 0.3 },
                      }}
                    >
                      <Image
                        src="https://assets.aceternity.com/features-section.png"
                        alt="feature template"
                        width={1000}
                        height={1000}
                        className="h-full w-full object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                      />
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center bg-black/50"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        whileTap={{ opacity: 1 }}
                      >
                        <p className="text-2xl font-bold text-white">
                          Project Title
                        </p>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </InView>
          </div>
        </div>
        <div className="absolute -left-[50%] top-20 z-10 inline-flex h-40 w-[200%] flex-nowrap overflow-hidden">
          <div className="inline-flex w-full flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <ul className="flex h-full w-full animate-infinite-scroll-ltr items-center justify-center space-x-5 text-9xl font-medium md:justify-start md:text-[10rem] [&_img]:max-w-none [&_li]:mx-8">
              {Array.from({ length: 10 }).map((_, i) => {
                return i % 2 === 0 ? (
                  <li
                    key={i}
                    className="flex h-full flex-none items-center text-neutral-800 md:w-[600px]"
                  >
                    <span>WORKS</span>
                    <Music3 className="ml-1 h-10 w-10 flex-none" />
                  </li>
                ) : (
                  <li
                    key={i}
                    className="flex h-full flex-none items-center text-neutral-800 md:w-[800px]"
                  >
                    <span>FEATURED</span>
                    <Music3 className="ml-1 h-10 w-10 flex-none" />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
      <section id="contact" className="relative bg-secondary">
        <div className="grid place-content-center gap-2 px-8 py-24 text-black">
          <FlipLink href="https://github.com/adityahimaone">Github</FlipLink>
          <FlipLink href="https://open.spotify.com/user/212nmrqpklzmvpntgorzpavgq?si=2a79f73cbb334db6">
            Spotify
          </FlipLink>
          <FlipLink href="https://x.com/adityahimaone">X</FlipLink>
          <FlipLink href="https://linkedin.com/in/adityahimaone">
            Linkedin
          </FlipLink>
          <FlipLink href={mailtoUrl}>Email • Me</FlipLink>
        </div>
      </section>
    </main>
  );
};

export default Page;

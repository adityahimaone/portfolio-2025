'use client';

import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import MenuNavigation from '@/components/MenuNavigation';
import React, { ReactNode, useEffect, useState } from 'react';
import axios from 'axios';
import { SiTypescript, SiJavascript, SiSwift, SiGo } from 'react-icons/si';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';
import { HiViewGridAdd } from 'react-icons/hi';

interface IRepoGithub {
  id: number;
  name: string;
  language: string;
  description: string | null;
  topics: string[];
  url: string;
}

interface ILanguageIcons {
  [key: string]: ReactNode;
}

const selectedReposList = [
  'SwiftUI-EmojiFinder',
  'SwiftUI-StateBinding',
  'Next-Fake-Nike-Landing-Page',
  'Framer-Motion',
  'Next-DigitalMarket',
  'SwiftUI-Reusable-Layout',
  'NextJS-Travel-Agency',
  'FE-Cryptocurrency-LandingPage',
  'FE-Daily-Calorie-Apps',
  'FE-Hospital-Management-System',
  'BE-Daily-Calorie-App-Api',
  'go-clean-architecture',
];

const Page = () => {
  const [repos, setRepos] = useState<IRepoGithub[]>();
  const [selectedRepos, setSelectedRepos] = useState<IRepoGithub[]>();

  const languageIcons: ILanguageIcons = {
    typescript: <SiTypescript className="h-8 w-8 text-pallet-blue-1" />,
    javascript: <SiJavascript className="h-8 w-8 text-yellow-300" />,
    swift: <SiSwift className=" h-8 w-8 text-orange-600" />,
    go: <SiGo className="h-8 w-8 text-pallet-blue-1" />,
  };

  const gridItemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.3,
      },
    },
  };

  const gridContainerVariants = {
    // opacity before run is 0
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        // allow children to animate before parent
        staggerChildren: 0.25,
      },
    },
  };

  useEffect(() => {
    const fetchRepos = async () => {
      const response = await axios.get(
        'https://api.github.com/users/adityahimaone/repos?sort=created&per_page=100',
      );
      setRepos(response.data);

      const selected = repos?.filter((repo) =>
        selectedReposList.includes(repo?.name),
      );

      setSelectedRepos(selected);
    };

    fetchRepos();
  }, [repos]);

  console.log(repos, selectedRepos, 'repos');
  return (
    <>
      <main className="min-h-screen px-6 py-3 sm:px-3 md:px-0">
        <MenuNavigation />
        <MaxWidthWrapper>
          <div>
            <motion.h1
              initial={{
                opacity: 0,
                scale: 0,
                x: 5,
              }}
              transition={{ duration: 0.5, delay: 0.5 }}
              animate={{ x: 0, scale: 1, opacity: 1 }}
              className="mb-4 text-2xl"
            >
              Repository
            </motion.h1>
            <motion.section
              variants={gridContainerVariants}
              initial="hidden"
              animate="show"
              className="mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[15rem] md:grid-cols-3"
            >
              {selectedRepos?.map((repo) => (
                <motion.div
                  variants={gridItemVariants}
                  key={repo.id}
                  className="text-wrap rounded-[32px] border border-transparent bg-white p-5 shadow-input dark:border-white/[0.5] dark:bg-card"
                >
                  <div className="flex flex-row items-center gap-x-2">
                    <div className="">
                      <div className="">
                        {languageIcons[repo.language.toLowerCase()]}
                      </div>
                    </div>
                    <div>
                      <h5
                        style={{
                          display: '-webkit-box',
                          WebkitBoxOrient: 'vertical',
                          WebkitLineClamp: 2,
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                        }}
                        className="text-base font-medium"
                      >
                        {repo.name.split('-').join(' ')}
                      </h5>
                    </div>
                  </div>
                  <p
                    className="mt-1 text-sm"
                    style={{
                      display: '-webkit-box',
                      WebkitBoxOrient: 'vertical',
                      WebkitLineClamp: 3,
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {repo.description}
                  </p>
                  <div className="my-3">
                    {repo.topics?.length > 0 ? (
                      <ScrollArea className="h-[80px] rounded-md border border-slate-300 p-1">
                        {repo.topics.map((topic, idx) => (
                          <motion.span
                            key={topic}
                            initial={{ opacity: 0 }}
                            animate={{
                              opacity: 1,
                              transition: {
                                duration: 0.5,
                                delay: idx * 0.2,
                              },
                            }}
                            className="mr-1 inline-flex items-center rounded-full bg-pallet-blue-1 px-2.5 py-0.5 text-xs font-normal text-white"
                          >
                            {topic}
                          </motion.span>
                        ))}
                        <ScrollBar orientation="vertical" />
                      </ScrollArea>
                    ) : (
                      <div className="flex h-20 items-center justify-center rounded-md border border-slate-300 p-1">
                        <div className="flex flex-col items-center justify-center">
                          <div className="flex items-center text-base font-semibold">
                            <span className="mr-1">No Topics</span>
                            <HiViewGridAdd />
                          </div>
                          <div className="text-xs font-normal">
                            Add Topics to your repository
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.section>
          </div>
        </MaxWidthWrapper>
      </main>
    </>
  );
};

export default Page;

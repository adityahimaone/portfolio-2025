import { useState, useEffect } from 'react';
import { AudioLines, Music2 } from 'lucide-react';
import { NowPlayingResponse } from '@/lib/types';
import Image from 'next/image';
import { BorderTrail } from './motion-ui/border-trail';
import { FaSpotify } from 'react-icons/fa6';
import { motion } from 'framer-motion';

const NowPlaying = () => {
  const [data, setData] = useState<NowPlayingResponse | null>(null);

  useEffect(() => {
    const fetchNowPlaying = async () => {
      try {
        const res = await fetch('/api/now-playing');
        const newData: NowPlayingResponse = await res.json();
        setData(newData);
      } catch (error) {
        console.error('Error fetching now playing:', error);
      }
    };

    fetchNowPlaying();
    const interval = setInterval(fetchNowPlaying, 30000);

    return () => clearInterval(interval);
  }, []);

  if (!data) {
    return (
      <div className="relative w-60 overflow-clip rounded-lg bg-secondary drop-shadow-xl">
        <div className="p-4">
          <div className="flex flex-col">
            <div className="relative flex h-52 w-full items-center justify-center overflow-hidden rounded-md bg-black/80">
              <AudioLines className="h-20 w-20 text-green-500" />
              <BorderTrail
                className="bg-gradient-to-l from-blue-200 via-blue-500 to-blue-200 dark:from-orange-300 dark:via-orange-500 dark:to-orange-600"
                size={150}
              />
            </div>
            <div className="mt-2 flex items-center gap-2">
              <FaSpotify
                className="h-8 w-8 flex-none text-black"
                title="Spotify"
              />
              <div className="flex flex-col justify-start overflow-hidden">
                <p className="truncate text-base font-medium text-slate-800">
                  Not Playing
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!data.isPlaying) {
    return (
      <div className="relative w-60 overflow-clip rounded-lg bg-secondary drop-shadow-xl">
        <div className="p-4">
          <div className="flex flex-col">
            <div className="relative flex h-52 w-full items-center justify-center overflow-hidden rounded-md bg-black/80">
              <AudioLines className="h-20 w-20 text-green-500" />
              <BorderTrail
                className="bg-gradient-to-l from-blue-200 via-blue-500 to-blue-200 dark:from-orange-300 dark:via-orange-500 dark:to-orange-600"
                size={150}
              />
            </div>
            <div className="mt-2 flex items-center gap-2">
              <FaSpotify
                className="h-8 w-8 flex-none text-black"
                title="Spotify"
              />
              <div className="flex flex-col justify-start overflow-hidden">
                <p className="truncate text-base font-medium text-slate-800">
                  Not Playing
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-60 overflow-clip rounded-lg bg-secondary drop-shadow-xl">
      <div className="p-4">
        <div className="flex flex-col">
          <motion.div
            className="relative h-full w-full overflow-hidden rounded-md"
            whileHover="hover"
            whileTap="hover"
            initial="initial"
          >
            <motion.div
              variants={{
                initial: { scale: 1 },
                hover: { scale: 1.1 },
              }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={data.albumImageUrl || '/default-album.jpg'}
                alt={data.album ?? 'Album Cover'}
                className="h-full w-full"
                width={500}
                height={500}
              />
            </motion.div>
            <motion.div
              className="absolute inset-0 flex items-center justify-center bg-black/40"
              variants={{
                initial: { opacity: 0 },
                hover: { opacity: 1 },
              }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                variants={{
                  initial: { scale: 0.5, opacity: 0 },
                  hover: { scale: 1, opacity: 1 },
                }}
                transition={{ duration: 0.2 }}
              >
                <AudioLines className="h-20 w-20 text-green-500" />
              </motion.div>
            </motion.div>
            <BorderTrail
              className="bg-gradient-to-l from-blue-200 via-blue-500 to-blue-200 dark:from-purple-300 dark:via-purple-500 dark:to-purple-600"
              size={150}
            />
          </motion.div>
          <div className="mt-2 flex items-center gap-2">
            <FaSpotify
              className="h-8 w-8 flex-none text-black"
              title="Spotify"
            />
            <div className="flex flex-col justify-start overflow-hidden">
              <div className="overflow-hidden whitespace-nowrap">
                <motion.div
                  className="inline-flex gap-4"
                  initial={{ x: '0%' }}
                  animate={{ x: '-50%' }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                >
                  <a
                    href={data.songUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-semibold text-neutral-800 hover:underline"
                  >
                    {data.title}
                  </a>
                  <a
                    href={data.songUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-semibold text-neutral-800 hover:underline"
                  >
                    {data.title}
                  </a>
                </motion.div>
              </div>
              <p className="truncate text-base text-neutral-700">
                {data.artist}
              </p>
              <p className="truncate text-base text-neutral-500">
                {data.album}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NowPlaying;

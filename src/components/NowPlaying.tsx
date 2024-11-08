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
      <div className="h-24 w-72 animate-pulse">
        <div className="flex h-full items-center justify-center">
          <span className="text-gray-400">Loading...</span>
        </div>
      </div>
    );
  }

  if (!data.isPlaying) {
    return (
      <div className="h-24 w-72">
        <div className="flex h-full items-center justify-center">
          <Music2 className="mr-2 h-6 w-6 text-gray-400" />
          <span className="text-gray-400">Not playing</span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-72 overflow-clip rounded-lg bg-secondary drop-shadow-xl">
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
          </motion.div>
          <div className="mt-2 flex items-center gap-2">
            <FaSpotify className="h-12 w-12 text-black" title="Spotify" />
            <div className="flex flex-col justify-start overflow-hidden">
              <a
                href={data.songUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="break-all text-lg font-semibold text-neutral-800 hover:underline"
              >
                {data.title}
              </a>
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
      <BorderTrail
        className="bg-gradient-to-l from-blue-200 via-blue-500 to-blue-200 dark:from-orange-300 dark:via-orange-500 dark:to-orange-600"
        size={150}
      />
    </div>
  );
};

export default NowPlaying;

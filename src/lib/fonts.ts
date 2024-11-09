import { Poppins, Mochiy_Pop_One, Unbounded } from 'next/font/google';

export const poppins = Poppins({
  subsets: ['devanagari'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
});

export const mochiy_pop_one = Mochiy_Pop_One({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-mochiy',
});

export const unbounded = Unbounded({
  subsets: ['cyrillic'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-unbounded',
});

import { StaticImageData } from 'next/image';

export interface IExperienceData {
  id: number;
  title: string;
  subtitle: string;
  work_schema?: string;
  desc: string;
  time: string;
}

export interface IBentoGridItem {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  index: number;
  active?: boolean;
}

export interface IListItem {
  header: React.JSX.Element;
  className: string;
  active: boolean;
  title?: string;
  description?: string;
  icon?: React.ReactNode;
}

export interface IListSocialMedia {
  text: string;
  link: string;
  color: string;
  borderColor: string;
  icon: React.ReactNode;
  shadow: string;
}

export interface IProjectData {
  id: number;
  title: string;
  description: string;
  image: string | StaticImageData;
  url: string;
}

export interface SpotifyArtist {
  name: string;
}

export interface SpotifyImage {
  url: string;
}

export interface SpotifyAlbum {
  name: string;
  images: SpotifyImage[];
}

export interface SpotifyItem {
  name: string;
  artists: SpotifyArtist[];
  album: SpotifyAlbum;
  external_urls: {
    spotify: string;
  };
}

export interface SpotifyNowPlayingData {
  is_playing: boolean;
  item: SpotifyItem;
}

export interface NowPlayingResponse {
  isPlaying: boolean;
  title?: string;
  artist?: string;
  album?: string;
  albumImageUrl?: string;
  songUrl?: string;
}

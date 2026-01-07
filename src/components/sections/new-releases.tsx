import Image from 'next/image';
import { ComponentProps } from 'react';

type Release = {
  id: number;
  imageUrl: string;
  title: string;
  artist: string;
  releaseDate: string;
};

const newReleasesData: Release[] = [
  {
    id: 1,
    imageUrl: "https://www.djcity.jp/assets/images/release-1.jpg",
    title: "Party In My Head",
    artist: "R3SPAWN & Adrena Line",
    releaseDate: "4.23",
  },
  {
    id: 2,
    imageUrl: "https://www.djcity.jp/assets/images/release-2.jpg",
    title: "Voodoo",
    artist: "Garmiani",
    releaseDate: "4.23",
  },
  {
    id: 3,
    imageUrl: "https://www.djcity.jp/assets/images/release-3.jpg",
    title: "Move Your Body",
    artist: "Ownboss & Sevek",
    releaseDate: "4.19",
  },
  {
    id: 4,
    imageUrl: "https://www.djcity.jp/assets/images/release-4.jpg",
    title: "The Motto - Tiesto's VIP Mix",
    artist: "Tiesto & Ava Max",
    releaseDate: "4.19",
  },
  {
    id: 5,
    imageUrl: "https://www.djcity.jp/assets/images/release-5.jpg",
    title: "La Murga",
    artist: "HUGEL & Jenn Morel",
    releaseDate: "4.19",
  },
  // Adding a few more to make the scroll more apparent
  {
    id: 6,
    imageUrl: "https://www.djcity.jp/assets/images/release-1.jpg",
    title: "Party In My Head",
    artist: "R3SPAWN & Adrena Line",
    releaseDate: "4.23",
  },
  {
    id: 7,
    imageUrl: "https://www.djcity.jp/assets/images/release-2.jpg",
    title: "Voodoo",
    artist: "Garmiani",
    releaseDate: "4.23",
  },
];

const ReleaseCard = ({ imageUrl, title, artist, releaseDate }: Release) => {
  const iconActions = [
    { src: "https://www.djcity.jp/assets/icons/play-circle.svg", alt: "Play" },
    { src: "https://www.djcity.jp/assets/icons/cart.svg", alt: "Add to cart" },
    { src: "https://www.djcity.jp/assets/icons/heart.svg", alt: "Add to favorites" },
  ];

  return (
    <div className="flex-shrink-0 snap-start w-[300px] bg-[#0a0a0a] rounded-lg overflow-hidden group/card">
        <div className="relative">
          <Image
            src={imageUrl}
            alt={`Album art for ${title} by ${artist}`}
            width={300}
            height={300}
            className="object-cover w-full h-[300px]"
            priority
          />
            <div className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded">
              {releaseDate}
            </div>
          </div>
        <div className="p-4">
          <h3 className="font-semibold text-white truncate text-base">{title}</h3>
          <p className="text-sm text-[#999999] mt-1 truncate">{artist}</p>
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {iconActions.map((icon, index) => (
                <button key={index} aria-label={icon.alt} className="group">
                  <Image
                    src={icon.src}
                    alt={icon.alt}
                    width={24}
                    height={24}
                    className="filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  const NewReleasesSection = () => {
    return (
      <section className="bg-[#1a1a1a] py-20">
        <div className="container mx-auto px-6">
            <div className="mb-8">
              <h2 className="text-3xl font-bold tracking-[0.2em] uppercase text-white">
                NEW RELEASES
              </h2>
              <div className="w-16 h-1 bg-primary mt-2"></div>
            </div>
          </div>
          <div className="pl-6">
            <div 
              className="flex gap-5 overflow-x-auto pb-5 snap-x snap-mandatory 
              [&::-webkit-scrollbar]:h-1.5 
              [&::-webkit-scrollbar-track]:bg-zinc-800
              [&::-webkit-scrollbar-thumb]:bg-primary 
              [&::-webkit-scrollbar-thumb]:rounded-sm
              scrollbar-thin scrollbar-thumb-primary scrollbar-track-zinc-800"
            >
            {newReleasesData.map((release) => (
            <ReleaseCard key={release.id} {...release} />
          ))}
           <div className="flex-shrink-0 w-1"></div> {/* Gutter at the end */}
        </div>
      </div>
    </section>
  );
};

export default NewReleasesSection;
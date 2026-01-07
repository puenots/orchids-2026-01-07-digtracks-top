import Image from 'next/image';

interface Video {
  id: number;
  title: string;
  thumbnail: string;
  duration: string;
  views: string;
}

const videos: Video[] = [
  {
    id: 1,
    title: 'DJcity Japan - Re-Opening Party Tokyo',
    thumbnail: 'https://www.djcity.jp/assets/images/video-thumb-1.jpg',
    duration: '06:00',
    views: '10.5k',
  },
  {
    id: 2,
    title: 'DJ IKU - DJcity Japan Mix',
    thumbnail: 'https://www.djcity.jp/assets/images/video-thumb-2.jpg',
    duration: '15:01',
    views: '22.1k',
  },
  {
    id: 3,
    title: 'DJ REN - Red Bull 3Style 2018 Japan Final',
    thumbnail: 'https://www.djcity.jp/assets/images/video-thumb-3.jpg',
    duration: '05:45',
    views: '18.3k',
  },
  {
    id: 4,
    title: 'DJ REO - On The Record',
    thumbnail: 'https://www.djcity.jp/assets/images/video-thumb-4.jpg',
    duration: '03:12',
    views: '8.9k',
  },
  {
    id: 5,
    title: 'KID FRESINO - Special Live Performance',
    thumbnail: 'https://www.djcity.jp/assets/images/video-thumb-5.jpg',
    duration: '21:30',
    views: '45.7k',
  },
  {
    id: 6,
    title: 'Awich - Live at WWWX',
    thumbnail: 'https://www.djcity.jp/assets/images/video-thumb-6.jpg',
    duration: '45:02',
    views: '102.6k',
  },
];

const VideoCard = ({ video }: { video: Video }) => (
  <a href="#" className="block group">
    <div className="relative overflow-hidden rounded-md">
      <div className="aspect-video w-full">
        <Image
          src={video.thumbnail}
          alt={video.title}
          fill
          className="object-cover transition-all duration-300 group-hover:brightness-75"
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/40 transition-colors duration-300">
        <div className="flex items-center justify-center w-[60px] h-[60px] bg-white rounded-full transition-transform duration-300 scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100">
          <Image
            src="https://www.djcity.jp/assets/icons/play-button.svg"
            alt="Play"
            width={18}
            height={20}
          />
        </div>
      </div>
      <div className="absolute bottom-2.5 right-2.5 bg-black/75 text-white text-xs font-medium px-2 py-1 rounded-sm">
        {video.duration}
      </div>
    </div>
    <div className="mt-4">
      <h3 className="text-white text-[18px] leading-snug font-medium line-clamp-2 h-[44px]">
        {video.title}
      </h3>
      <div className="flex items-center mt-2 text-sm text-text-tertiary">
        <Image
          src="https://www.djcity.jp/assets/icons/eye.svg"
          alt="Views"
          width={16}
          height={16}
          className="mr-1.5"
        />
        <span>{video.views} Views</span>
      </div>
    </div>
  </a>
);

const VideoSection = () => {
  return (
    <section className="bg-background py-20 lg:py-[100px]">
      <div className="container mx-auto px-6">
        <div className="text-center md:text-left">
           <h2 className="font-english text-white text-[28px] font-semibold tracking-tighter">
             EXCLUSIVE <span className="text-primary">VIDEOS</span>
           </h2>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
        <div className="mt-12 text-center">
            <a 
              href="#"
              className="inline-block border border-white text-white font-semibold text-sm py-3.5 px-8 rounded-full hover:bg-white hover:text-black transition-colors duration-300"
            >
              SEE MORE VIDEOS
            </a>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
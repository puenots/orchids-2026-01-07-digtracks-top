import Image from 'next/image';
import Link from 'next/link';

const newsItems = [
  {
    category: 'TUTORIALS',
    date: '2023.08.01',
    title: 'Pioneer DJ DDJ-FLX10 performance features overview',
    excerpt: 'The DDJ-FLX10 is a 4-channel performance DJ controller for rekordbox and Serato DJ Pro. It includes a host of brand-new features including Track Separation technology.',
    imageUrl: 'https://www.djcity.jp/assets/images/news-1.jpg',
    url: '#',
  },
  {
    category: 'NEWS',
    date: '2023.07.28',
    title: 'AlphaTheta announces the OMNIS-DUO and WAVE-EIGHT',
    excerpt: 'AlphaTheta Corporation has announced new products under its AlphaTheta brand: the OMNIS-DUO portable all-in-one DJ system and the WAVE-EIGHT portable DJ speaker.',
    imageUrl: 'https://www.djcity.jp/assets/images/news-2.jpg',
    url: '#',
  },
  {
    category: 'GEAR',
    date: '2023.07.15',
    title: 'Reloop MIXON 8 PRO - Official Serato DJ Pro & Algoriddim djay Pro controller',
    excerpt: 'The Reloop MIXON 8 PRO is a powerful and versatile 4-channel hybrid DJ controller, designed for Serato DJ Pro and Algoriddim djay Pro.',
    imageUrl: 'https://www.djcity.jp/assets/images/news-3.jpg',
    url: '#',
  },
];

const NewsSection = () => {
  return (
    <section className="bg-[#1a1a1a] py-12 lg:py-20">
      <div className="container">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl uppercase">LATEST NEWS</h2>
          <div className="mt-2 h-1 w-20 bg-primary"></div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {newsItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-md border border-[#333333] bg-[#0a0a0a] transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-[0_8px_24px_rgba(0,0,0,0.5)]"
            >
              <div className="relative aspect-[16/9]">
                <Image src={item.imageUrl} alt={`Featured image for ${item.title}`} fill className="object-cover" />
                <div className="absolute left-0 top-0 bg-primary px-2 py-1">
                  <span className="text-[10px] font-bold uppercase text-white">{item.category}</span>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-3 flex items-center text-xs text-[#999999]">
                  <Image
                    src="https://www.djcity.jp/assets/icons/clock.svg"
                    alt="Clock icon"
                    width={14}
                    height={14}
                    className="mr-2"
                  />
                  <span>{item.date}</span>
                </div>

                <h3 className="mb-2 h-[56px] text-xl font-semibold text-white">
                  <Link href={item.url} className="transition-colors hover:text-primary before:absolute before:inset-0 before:content-['']">
                    {item.title}
                  </Link>
                </h3>

                <p className="mb-4 h-[63px] text-sm text-[#999999] line-clamp-3">{item.excerpt}</p>
                
                <div className="flex items-center text-sm font-semibold text-primary">
                  Read More
                  <Image
                    src="https://www.djcity.jp/assets/icons/arrow-right.svg"
                    alt="Arrow right icon"
                    width={16}
                    height={16}
                    className="ml-1.5 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
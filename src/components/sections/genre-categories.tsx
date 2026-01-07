import Image from 'next/image';
import Link from 'next/link';

const genres = [
  { name: 'HIP HOP', href: '#', image: 'https://www.djcity.jp/assets/images/genre-hiphop.jpg', trackCount: '23,456 Tracks' },
  { name: 'HOUSE', href: '#', image: 'https://www.djcity.jp/assets/images/genre-house.jpg', trackCount: '19,876 Tracks' },
  { name: 'TECHNO', href: '#', image: 'https://www.djcity.jp/assets/images/genre-techno.jpg', trackCount: '15,432 Tracks' },
  { name: 'R&B', href: '#', image: 'https://www.djcity.jp/assets/images/genre-rnb.jpg', trackCount: '18,765 Tracks' },
  { name: 'REGGAE', href: '#', image: 'https://www.djcity.jp/assets/images/genre-reggae.jpg', trackCount: '12,345 Tracks' },
  { name: 'DANCE', href: '#', image: 'https://www.djcity.jp/assets/images/genre-dance.jpg', trackCount: '21,098 Tracks' },
  { name: 'ROCK', href: '#', image: 'https://www.djcity.jp/assets/images/genre-rock.jpg', trackCount: '9,876 Tracks' },
  { name: 'EDM', href: '#', image: 'https://www.djcity.jp/assets/images/genre-edm.jpg', trackCount: '25,678 Tracks' },
];

const GenreCategories = () => {
  return (
    <section className="bg-[#0d0d0d] py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold tracking-[0.2em] uppercase text-white">
            BROWSE BY GENRE
          </h2>
          <div className="w-[70px] h-0.5 bg-primary mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
          {genres.map((genre) => (
            <Link
              key={genre.name}
              href={genre.href}
              className="block relative group overflow-hidden rounded-lg w-full aspect-square md:w-[250px] md:h-[250px] border-[3px] border-transparent hover:border-primary transition-all duration-300"
            >
              <Image
                src={genre.image}
                alt={genre.name}
                fill
                sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 250px"
                className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-300 ease-in-out"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                <h3 className="text-white text-[20px] font-bold uppercase tracking-wider">
                  {genre.name}
                </h3>
                <p className="text-muted-foreground text-sm mt-1">
                  {genre.trackCount}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GenreCategories;
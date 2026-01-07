import Link from 'next/link';
import { CircleArrowDown, MoreHorizontal, Play } from 'lucide-react';
import { cn } from '@/lib/utils';

type Artist = {
  name: string;
  href: string;
};

type Track = {
  id: number;
  title: string;
  artists: Artist[];
  bpm: number;
  key: string;
  genre: 'Hip Hop' | 'Dance' | 'Other';
  recordHref: string;
  genreHref: string;
};

const tracks: Track[] = [
  {
    id: 1,
    title: 'NOKIA - MarkCutz Jingle Bells Ringtone Intro',
    artists: [{ name: 'Drake', href: '/artist/Drake' }],
    bpm: 126,
    key: '1A',
    genre: 'Hip Hop',
    recordHref: '/records/151387-NOKIA-MarkCutz-Jingle-Bells-Ringtone-Intro-Drake',
    genreHref: '/genre/hip-hop',
  },
  {
    id: 2,
    title: 'Jamaican (Bam Bam) - Tall Boys Move Ya Body Intro',
    artists: [
      { name: 'HUGEL', href: '/artist/HUGEL' },
      { name: 'SOLTO (FR)', href: '/artist/SOLTO' },
    ],
    bpm: 122,
    key: '1A',
    genre: 'Dance',
    recordHref: '/records/151193-Jamaican-(Bam-Bam)-Tall-Boys-Move-Ya-Body-Intro-HUGEL-&-SOLTO-(FR)',
    genreHref: '/genre/dance',
  },
  {
    id: 3,
    title: 'Let It Snow! Let It Snow! Let It Snow! - Freejak Remix',
    artists: [{ name: 'Dean Martin', href: '/artist/Dean--Martin' }],
    bpm: 132,
    key: '1A',
    genre: 'Dance',
    recordHref: '/records/151388-Let-It-Snow!-Let-It-Snow!-Let-It-Snow!-Freejak-Remix-Dean-Martin',
    genreHref: '/genre/dance',
  },
  {
    id: 4,
    title: "It's Beginning To Look A Lot Like Christmas - KidCutUp Remix",
    artists: [{ name: 'Michael Bublé', href: '/artist/Michael--Bublé' }],
    bpm: 95,
    key: '1A',
    genre: 'Other',
    recordHref: "/records/151391-It's-Beginning-To-Look-A-Lot-Like-Christmas-KidCutUp-Remix-Michael-Bublé",
    genreHref: '/genre/other',
  },
  {
    id: 5,
    title: 'Last Christmas - Joan Qveralt Remix',
    artists: [{ name: 'Taylor Swift', href: '/artist/Taylor--Swift' }],
    bpm: 127,
    key: '1A',
    genre: 'Other',
    recordHref: '/records/151394-Last-Christmas-Joan-Qveralt-Remix-Taylor-Swift',
    genreHref: '/genre/other',
  },
];

const genreStyles: Record<Track['genre'], string> = {
  'Hip Hop': 'bg-chart-3/30 text-blue-300 border-chart-3',
  'Dance': 'bg-chart-1/30 text-orange-300 border-chart-1',
  'Other': 'bg-muted text-muted-foreground border-border',
};

const TrackRow = ({ track, last }: { track: Track; last: boolean }) => (
  <div
    className={cn(
      'grid grid-cols-[auto_1fr] md:grid-cols-[3rem_1fr_4rem_4rem_8rem_3rem_3rem] items-center gap-x-4 py-3 border-b border-border',
      last && 'border-b-0',
      'hover:bg-secondary/50 transition-colors duration-200 -mx-4 px-4 group',
      'border-l-2 border-l-transparent hover:border-l-primary'
    )}
  >
      <div className="flex items-center space-x-4 md:col-start-1">
        <button className="bg-muted w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200">
          <span className="group-hover:hidden">{track.id}</span>
          <Play className="hidden group-hover:block w-4 h-4 fill-current ml-0.5" />
        </button>
      </div>

            <div className="md:col-start-2">
              <Link href={track.recordHref} className="group/title">
                <h4 className="font-semibold text-foreground group-hover/title:text-primary transition-colors">{track.title}</h4>
              </Link>
            <p className="text-sm text-zinc-400">
              {track.artists.map((artist, index) => (
                <span key={artist.name}>
                  <Link href={artist.href} className="text-zinc-400 hover:text-zinc-200 transition-colors">
                    {artist.name}
                  </Link>
                  {index < track.artists.length - 1 && ' & '}
                </span>
              ))}
            </p>
          </div>

    {/* Mobile footer */}
    <div className="col-span-2 md:hidden flex items-center justify-between mt-2 pl-12">
        <span className="text-sm font-bold text-foreground">{track.bpm} BPM • {track.key}</span>
        <Link href={track.genreHref} className="hover:no-underline">
            <span className={cn(
              'text-xs font-semibold px-3 py-1 rounded-full border transition-transform duration-200 hover:scale-110 inline-block', 
              genreStyles[track.genre]
            )}>
              {track.genre}
            </span>
        </Link>
        <div className="flex items-center space-x-1">
            <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
                <CircleArrowDown className="w-5 h-5" />
            </button>
            <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
                <MoreHorizontal className="w-5 h-5" />
            </button>
        </div>
    </div>
    
    {/* Desktop Columns */}
    <span className="hidden md:block text-foreground text-center font-bold">{track.bpm}</span>
    <span className="hidden md:block text-foreground text-center font-bold">{track.key}</span>
    <div className="hidden md:flex justify-center">
      <Link href={track.genreHref} className="hover:no-underline">
        <span className={cn(
          'text-xs font-semibold px-3 py-1 rounded-full border transition-transform duration-200 hover:scale-110 inline-block', 
          genreStyles[track.genre]
        )}>
          {track.genre}
        </span>
      </Link>
    </div>
      <div className="hidden md:flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
          <CircleArrowDown className="w-5 h-5" />
        </button>
      </div>
      <div className="hidden md:flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>
  </div>
);

const MostPopularTracks = () => {
  return (
    <div className="bg-card rounded-lg p-6 lg:p-8">
      <header className="flex items-center mb-4">
        <div className="w-1 h-5 bg-primary mr-3"></div>
        <Link href="/most-popular" className="group hover:no-underline">
          <h3 className="font-display text-2xl font-semibold text-foreground tracking-wide group-hover:text-primary transition-colors">
            Most Popular
          </h3>
        </Link>
      </header>

      <div className="hidden md:grid md:grid-cols-[3rem_1fr_4rem_4rem_8rem_3rem_3rem] items-center gap-x-4 mb-2 -mx-4 px-4">
        <div className="md:col-start-2">
          <span className="text-xs font-semibold uppercase text-muted-foreground">Records</span>
        </div>
        <div className="text-center">
          <span className="text-xs font-semibold uppercase text-muted-foreground">BPM</span>
        </div>
        <div className="text-center">
          <span className="text-xs font-semibold uppercase text-muted-foreground">KEY</span>
        </div>
        <div className="text-center">
          <span className="text-xs font-semibold uppercase text-muted-foreground">Genre</span>
        </div>
      </div>
      
      <div>
        {tracks.map((track, index) => (
          <TrackRow key={track.id} track={track} last={index === tracks.length - 1} />
        ))}
      </div>
    </div>
  );
};

export default MostPopularTracks;

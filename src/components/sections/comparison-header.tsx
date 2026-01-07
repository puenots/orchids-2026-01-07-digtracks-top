import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const ComparisonHeader = () => {
  return (
    <section id="comparison" className="py-16 text-center sm:py-20 md:py-24">
      <div className="container">
        <Link href="/comparison" className="group inline-block">
          <h1 className="inline-flex flex-wrap items-center justify-center gap-x-4 gap-y-2 font-display text-3xl font-bold uppercase text-foreground sm:text-4xl lg:text-[56px] lg:leading-tight">
            DJ DOWNLOAD RECORD POOL COMPARISON
            <ArrowUpRight
              className="h-8 w-8 flex-shrink-0 text-primary transition-transform duration-300 group-hover:rotate-45 sm:h-10 sm:w-10 lg:h-12 lg:w-12"
              strokeWidth={2.5}
            />
          </h1>
        </Link>
        <p className="mt-4 text-base font-normal uppercase tracking-wider text-muted-foreground md:text-lg">
          DIGTRACKS IS THE BEST RECORD POOL FOR BEGINNER &amp; EXPERT DJS
        </p>
      </div>
    </section>
  );
};

export default ComparisonHeader;
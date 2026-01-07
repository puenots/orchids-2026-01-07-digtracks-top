import { ArrowUpRight } from 'lucide-react';

const IntegrationsHeader = () => {
  return (
    <div id="integrations" className="menuSection bg-background py-20 px-6">
      <div className="mx-auto max-w-5xl text-center">
        <a href="/integrations" className="group inline-block text-foreground no-underline">
          <h1 className="font-display text-4xl font-bold uppercase leading-tight tracking-tight md:text-5xl">
            DJcity integrates effortlessly with all DJ software
            <ArrowUpRight className="ml-2 inline-block h-8 w-8 -translate-y-1 transform text-primary transition-transform group-hover:rotate-45 md:h-10 md:w-10" />
          </h1>
        </a>
        <p className="mt-4 font-sans text-lg text-muted-foreground">
          Works with Serato, Rekordbox, Traktor, VirtualDJ, and DJAY
        </p>
      </div>
    </div>
  );
};

export default IntegrationsHeader;
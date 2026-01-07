"use client";

import * as React from "react";
import Image from "next/image";
import { FadeInImage } from "@/components/ui/fade-in-image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    logoSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7791b4c9-fd6f-4a5b-9047-d1e474a73773-djcity-com/assets/images/testimonial_1-16.png",
    altText: "Digital DJ Tips logo",
    quote: "It has a great user experience, including an impressive mobile app, and lots of exclusive remixes and useful curated playlists.",
    logoWidth: 151,
    logoHeight: 40,
  },
  {
    logoSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7791b4c9-fd6f-4a5b-9047-d1e474a73773-djcity-com/assets/images/tiesto_logo-19.png",
    altText: "Tiësto logo",
    quote: "I love going to DIGTRACKS once a week to check out their latest uploads. They have a lot of cool original tracks and mash-ups which I pick for my live-sets or radio show!",
    logoWidth: 115,
    logoHeight: 40,
  },
  {
    logoSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7791b4c9-fd6f-4a5b-9047-d1e474a73773-djcity-com/assets/images/diplo_logo-20.png",
    altText: "Diplo logo",
    quote: "Big shout out to DIGTRACKS - that's the first place I go to get my music in the whole world. You guys were the first, got tons of exclusives, and are blowing it up every time!",
    logoWidth: 117,
    logoHeight: 40,
  },
  {
    logoSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7791b4c9-fd6f-4a5b-9047-d1e474a73773-djcity-com/assets/images/djsnake_logo-21.png",
    altText: "DJ Snake logo",
    quote: "Shout out to all the DJs on DIGTRACKS - the #1 website in the world!",
    logoWidth: 161,
    logoHeight: 40,
  },
  {
    logoSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7791b4c9-fd6f-4a5b-9047-d1e474a73773-djcity-com/assets/images/testimonial_2-17.png",
    altText: "Serato logo",
    quote: "With monthly charts of the most downloaded songs and trending tracks picked by DJs in the know, DIGTRACKS is a great hub for staying connected to what's cool.",
    logoWidth: 122,
    logoHeight: 40,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="menuSection bg-[#101010] pt-10 pb-20">
      <div className="container">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="relative"
        >
          <CarouselContent className="-ml-3">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-3 basis-auto">
                <div className="w-[320px] flex-shrink-0">
                  <div className="bg-[#191919] rounded-lg p-10 h-full flex flex-col">
                      <FadeInImage
                        src={testimonial.logoSrc}
                        alt={testimonial.altText}
                        width={testimonial.logoWidth}
                        height={testimonial.logoHeight}
                        className="h-10 w-auto object-contain self-start mb-[30px]"
                      />
                    <p className="text-white text-base leading-6">
                      "{testimonial.quote}"
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden lg:block">
            <CarouselPrevious className="absolute -left-5 top-1/2 -translate-y-1/2 bg-charcoal-medium/80 hover:bg-charcoal-medium size-10 rounded-full border-none text-white disabled:bg-charcoal-medium/30" />
            <CarouselNext className="absolute -right-5 top-1/2 -translate-y-1/2 bg-charcoal-medium/80 hover:bg-charcoal-medium size-10 rounded-full border-none text-white disabled:bg-charcoal-medium/30" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
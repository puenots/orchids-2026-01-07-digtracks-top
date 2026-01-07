"use client";

import * as React from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronRight } from "lucide-react";

const FaqSection = () => {
  const t = useTranslations("Faq");

  // Get the number of items or use the known structure
  const faqItems = [
    {
      value: "item-1",
      question: t("items.0.question"),
      answer: t("items.0.answer"),
    },
    {
      value: "item-2",
      question: t("items.1.question"),
      answer: t("items.1.answer"),
    },
    {
      value: "item-3",
      question: t("items.2.question"),
      answer: t("items.2.answer"),
    },
    {
      value: "item-4",
      question: t("items.3.question"),
      answer: t("items.3.answer"),
    },
  ];

  return (
    <section id="faq" className="bg-background text-foreground py-24 lg:py-[100px]">
      <div className="container mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12 lg:gap-16">
        <div className="lg:max-w-[400px] w-full lg:pr-[50px]">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="font-display text-[80px] leading-[1] font-black uppercase text-white"
          >
            {t("title")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="mt-[25px] text-base leading-6 text-white"
          >
            {t("description")}
          </motion.p>
        </div>
        <div className="w-full lg:max-w-[800px]">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <motion.div
                key={item.value}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 * index }}
              >
                <AccordionItem value={item.value} className="border-b border-white/10">
                  <AccordionTrigger className="group py-[25px] text-2xl font-medium text-left hover:no-underline">
                    <span className="flex-1 pr-4">{item.question}</span>
                    <ChevronRight className="h-5 w-5 shrink-0 text-white transition-transform duration-200 group-data-[state=open]:rotate-90" />
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-muted-foreground text-base">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;

import Image from "next/image";
import { FadeInImage } from "@/components/ui/fade-in-image";
import Link from "next/link";
import { useTranslations } from "next-intl";

export const CatalogCta = () => {
  const t = useTranslations("CatalogCta");

  return (
    <Link href="/catalog" className="block h-full w-full">
        <div className="group relative h-full w-full overflow-hidden rounded-xl bg-card transition-transform duration-300 ease-in-out hover:-translate-y-1">
                  <FadeInImage
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/29-1767095900140.png"
                    alt="DJ at work"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1200px"
                    className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
          <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <div
            className="transform cursor-pointer rounded-[6px] bg-[#5e17eb] px-9 py-4 text-center font-display text-base font-bold uppercase tracking-wider text-primary-foreground transition-all duration-200 ease-in-out group-hover:scale-102 hover:!scale-105 hover:bg-[#4d10c5]"
          >
            {t("button")}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CatalogCta;

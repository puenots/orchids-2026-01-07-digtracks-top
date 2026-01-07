import { LandingPageClient } from "@/components/landing-page-client";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  await params;
  
  return <LandingPageClient />;
}

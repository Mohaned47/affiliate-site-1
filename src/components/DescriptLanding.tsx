import { motion } from "framer-motion";
import {
  BadgeCheck,
  Captions,
  CheckCircle2,
  CircleDashed,
  Languages,
  Mic2,
  Sparkles,
  WandSparkles,
  XCircle,
} from "lucide-react";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { Marquee } from "@/components/magicui/marquee";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type LandingProps = {
  productName: string;
  affiliateLink: string;
  hero: {
    badge: string;
    headline: string;
    subheadline: string;
    ctaText: string;
    ctaSubtext: string;
    priceLabel: string;
    priceValue: string;
  };
  features: { title: string; description: string }[];
};

const iconMap = [WandSparkles, Captions, Mic2, Languages, Sparkles, BadgeCheck];

const trustedLogos = [
  "https://descript-website.vercel.app/images/logos/Spotify-2.svg",
  "https://descript-website.vercel.app/images/logos/microsoft-2.svg",
  "https://descript-website.vercel.app/images/logos/github-2.svg",
  "https://descript-website.vercel.app/images/logos/figma-2.svg",
  "https://descript-website.vercel.app/images/logos/nyt-2.svg",
  "https://descript-website.vercel.app/images/logos/reuters-2.svg",
];

const reveal = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

export default function DescriptLanding({
  productName,
  affiliateLink,
  hero,
  features,
}: LandingProps) {
  return (
    <div className="relative pb-24 bg-[#030303] min-h-screen text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#030303]/70 backdrop-blur-xl">
        <div className="container mx-auto flex items-center justify-between px-6 py-4 md:px-8">
          <div className="text-xl font-semibold tracking-tight">{productName} Review</div>
          <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#features" className="transition hover:text-white">Features</a>
            <a href="#pricing" className="transition hover:text-white">Pricing</a>
          </nav>
          <a href={affiliateLink} target="_blank" rel="noopener sponsored">
            <Button>Get Exclusive Discount</Button>
          </a>
        </div>
      </header>

      <section className="container mx-auto px-6 pb-20 pt-20 text-center md:px-8 md:pt-28">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={reveal}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-5xl"
        >
          <Badge variant="subtle" className="mx-auto border-amber-300/30 bg-amber-200/10 text-amber-200">
            <AnimatedGradientText>Editor&apos;s Choice 2026</AnimatedGradientText>
          </Badge>

          <h1 className="mt-8 text-5xl font-black leading-[1.04] tracking-tight md:text-6xl lg:text-7xl">
            Why Descript Is the King of AI Editing in 2026
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-300 md:text-xl">
          Our hands-on review tests Descript across podcast production, short-form video, and client workflows. The verdict: unmatched speed, cleaner output, and better ROI for teams shipping content weekly.


          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a href={affiliateLink} target="_blank" rel="noopener sponsored">
              <Button size="lg">Check Price</Button>
            </a>
          </div>
        </motion.div>
      </section>

      <section className="container mx-auto px-6 md:px-8 mb-24">
        <Card className="p-3 bg-white/5 border-white/10">
          <Marquee>
            {trustedLogos.map((logo, i) => (
              <div
                key={i}
                className="flex h-10 w-36 items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 mx-4"
              >
                <img src={logo} alt="logo" className="max-h-4 w-auto opacity-80" />
              </div>
            ))}
          </Marquee>
        </Card>
      </section>

      <section id="features" className="container mx-auto px-6 pb-24 md:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={reveal}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <h2 className="text-5xl font-black tracking-tight md:text-6xl">Features</h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = iconMap[index % iconMap.length];
            return (
              <motion.div
                key={index}
                className={index === 0 || index === 3 ? "md:col-span-2" : ""}
              >
                <Card className="h-full bg-white/5 border-white/10 transition hover:bg-white/[0.08]">
                  <CardHeader>
                    <div className="mb-4 inline-flex w-fit rounded-xl border border-white/15 bg-white/5 p-3">
                      <Icon className="h-5 w-5 text-indigo-300" />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-400">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section id="pricing" className="container mx-auto px-6 pb-20 md:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="md:col-span-2 bg-white/5 border-white/10">
            <CardHeader>
              <CardTitle className="text-4xl">Pricing that scales</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-300">Start free and upgrade as you grow.</p>
            </CardContent>
          </Card>
          <Card className="bg-white/5 border-white/10 text-center">
            <CardHeader>
              <CardDescription className="uppercase">{hero.priceLabel}</CardDescription>
              <CardTitle className="text-5xl text-amber-300">{hero.priceValue}</CardTitle>
            </CardHeader>
            <CardContent>
              <a href={affiliateLink} target="_blank" rel="noopener sponsored">
                <Button className="w-full">Get Discount</Button>
              </a>
            </CardContent>
          </Card>
          <section className="w-full py-16">
  <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch px-4 max-w-[1200px] mx-auto">
    
    {/* Pros Box */}
    <div className="flex-1 bg-[#111] border border-white/10 p-8 rounded-2xl min-w-[320px]">
      <h3 className="flex items-center gap-3 text-3xl font-bold mb-6 text-white">
        <span className="text-emerald-400">✔</span> Pros
      </h3>
      <div className="space-y-4">
        <p className="flex items-start gap-3 text-lg text-slate-200">
          <span className="text-emerald-400 mt-1">○</span> 
          Best-in-class text-based editing workflow
        </p>
        <p className="flex items-start gap-3 text-lg text-slate-200">
          <span className="text-emerald-400 mt-1">○</span> 
          Massive time savings with AI cleanup tools
        </p>
        <p className="flex items-start gap-3 text-lg text-slate-200">
          <span className="text-emerald-400 mt-1">○</span> 
          Excellent for solo creators and teams
        </p>
      </div>
    </div>

    {/* Cons Box */}
    <div className="flex-1 bg-[#111] border border-white/10 p-8 rounded-2xl min-w-[320px]">
      <h3 className="flex items-center gap-3 text-3xl font-bold mb-6 text-white">
        <span className="text-amber-400">✘</span> Cons
      </h3>
      <div className="space-y-4">
        <p className="flex items-start gap-3 text-lg text-slate-300">
          <span className="text-amber-400 mt-1">○</span> 
          Heavy users may need higher-tier plans
        </p>
        <p className="flex items-start gap-3 text-lg text-slate-300">
          <span className="text-amber-400 mt-1">○</span> 
          Requires a stable connection for best performance
        </p>
        <p className="flex items-start gap-3 text-lg text-slate-300">
          <span className="text-amber-400 mt-1">○</span> 
          Advanced motion design needs dedicated tools
        </p>
      </div>
    </div>

  </div>
</section>
        </div>
      </section>
    </div>
  );
}
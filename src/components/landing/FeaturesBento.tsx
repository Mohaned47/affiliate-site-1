import { motion } from "framer-motion";
import { Captions, Mic2, Sparkles, WandSparkles, Workflow } from "lucide-react";

type Feature = {
  title: string;
  description: string;
};

type Props = {
  features: Feature[];
};

const iconSet = [WandSparkles, Captions, Mic2, Workflow, Sparkles];

export default function FeaturesBento({ features }: Props) {
  return (
    <section id="features" className="container mx-auto px-6 py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mx-auto mb-14 max-w-3xl text-center"
      >
        <h2 className="text-4xl font-black text-white md:text-6xl">One workspace for your entire content pipeline</h2>
        <p className="mt-4 text-lg text-slate-300">
          Inspired by top SaaS product pages: strong hierarchy, spacious layout, and conversion-focused sections.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {features.map((feature, index) => {
          const Icon = iconSet[index % iconSet.length];
          const large = index === 0 || index === 3;
          return (
            <motion.article
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className={`rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-lg ${
                large ? "md:col-span-2" : ""
              }`}
            >
              <div className="mb-5 inline-flex rounded-xl border border-white/15 bg-white/5 p-3">
                <Icon className="h-6 w-6 text-indigo-300" />
              </div>
              <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
              <p className="mt-3 max-w-2xl leading-7 text-slate-300">{feature.description}</p>
              <div className="mt-6 h-40 rounded-xl border border-white/10 bg-gradient-to-br from-indigo-500/30 via-violet-500/20 to-slate-700/30" />
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

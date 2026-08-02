import { motion } from 'framer-motion';
import {
  ArrowRight,
  X,
  Search,
  Target,
  Share2,
  Users,
  Globe,
  AlertTriangle,
  UserX,
  Scissors,
  PhoneOff,
  MessageSquare,
  TrendingUp,
  Star,
  Calendar,
  Percent,
  DollarSign,
  MessageCircle,
} from 'lucide-react';
import { SlideHeader, SlideContent } from './Slide';
import StatCard from './StatCard';
import PipelineFlow from './PipelineFlow';
import GrowthFlywheel from './GrowthFlywheel';
import ReviewCollage from './ReviewCollage';
import RoadmapTimeline from './RoadmapTimeline';
import RequirementCard from './RequirementCard';
import TrafficChart from './TrafficChart';
import RatingMeter from './RatingMeter';
import TeamResponsibilityGrid from './TeamResponsibilityGrid';
import VideoPreviewCard from './VideoPreviewCard';
import { reviewImages } from '../../data/presentation';

const channelIcons = { search: Search, target: Target, share: Share2, users: Users };
const kpiIcons = {
  'trending-up': TrendingUp,
  star: Star,
  calendar: Calendar,
  percent: Percent,
  dollar: DollarSign,
  'message-circle': MessageCircle,
};
const problemIcons = {
  'user-x': UserX,
  scissors: Scissors,
  'phone-off': PhoneOff,
  'message-square': MessageSquare,
};

export default function SlideRenderer({ slide, onStart }) {
  switch (slide.type) {
    case 'cover':
      return (
        <>
          <div className="flex-1 flex flex-col items-center justify-center px-8 text-center relative overflow-hidden">
            {slide.floatingLabels.map((label, i) => {
              const positions = [
                { top: '15%', left: '10%' },
                { top: '25%', right: '12%' },
                { bottom: '30%', left: '8%' },
                { bottom: '20%', right: '10%' },
                { top: '40%', left: '5%' },
              ];
              return (
                <motion.span
                  key={label}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.4, y: [0, -8, 0] }}
                  transition={{
                    opacity: { delay: 0.5 + i * 0.1 },
                    y: { duration: 4 + i, repeat: Infinity, ease: 'easeInOut' },
                  }}
                  className="absolute hidden md:block text-xs uppercase tracking-widest text-bella-lavender/60 font-medium"
                  style={positions[i]}
                >
                  {label}
                </motion.span>
              );
            })}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="w-16 h-16 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-bella-purple to-bella-dark border border-bella-lavender/30 flex items-center justify-center">
                <span className="font-display text-2xl text-white font-bold">B</span>
              </div>
              <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold text-white mb-4 leading-tight">
                {slide.title}
              </h1>
              <p className="text-bella-lavender text-lg mb-2">{slide.subtitle}</p>
              <p className="text-white/40 text-sm mb-10">{slide.presenter}</p>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={onStart}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-bella-purple hover:bg-bella-purple/90 text-white font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-bella-lavender"
              >
                {slide.cta}
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          </div>
        </>
      );

    case 'stats':
      return (
        <>
          <SlideHeader section={slide.section} title={slide.title} subtitle={slide.subtitle} />
          <SlideContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
              {slide.stats.map((stat, i) => (
                <StatCard key={stat.label} stat={stat} index={i} />
              ))}
            </div>
          </SlideContent>
        </>
      );

    case 'system-map':
      return (
        <>
          <SlideHeader section={slide.section} title={slide.title} subtitle={slide.subtitle} />
          <SlideContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {slide.nodes.map((node, i) => (
                <motion.div
                  key={node.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.08 }}
                  className={`rounded-xl p-4 text-center border ${
                    node.status === 'live'
                      ? 'bg-green-500/10 border-green-500/30'
                      : node.status === 'partial'
                        ? 'bg-bella-gold/10 border-bella-gold/30'
                        : 'bg-white/5 border-white/10'
                  }`}
                >
                  <div className="text-sm font-medium text-white mb-1">{node.label}</div>
                  <div
                    className={`text-[10px] uppercase tracking-wider ${
                      node.status === 'live'
                        ? 'text-green-400'
                        : node.status === 'partial'
                          ? 'text-bella-gold'
                          : 'text-white/40'
                    }`}
                  >
                    {node.status}
                  </div>
                </motion.div>
              ))}
            </div>
          </SlideContent>
        </>
      );

    case 'friction-journey':
      return (
        <>
          <SlideHeader section={slide.section} title={slide.title} subtitle={slide.subtitle} />
          <SlideContent>
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center justify-between mb-8 overflow-x-auto pb-2">
                {slide.steps.map((step, i) => (
                  <div key={step.label} className="flex items-center shrink-0">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className={`px-4 py-3 rounded-xl text-center min-w-[90px] ${
                        step.status === 'blocked'
                          ? 'bg-red-500/10 border border-red-500/30 line-through opacity-60'
                          : step.status === 'bad'
                            ? 'bg-red-500/20 border border-red-500/40'
                            : step.status === 'warning'
                              ? 'bg-bella-gold/10 border border-bella-gold/30'
                              : 'bg-white/5 border border-white/10'
                      }`}
                    >
                      <div className="text-xs text-white/80">{step.label}</div>
                    </motion.div>
                    {i < slide.steps.length - 1 && (
                      <ArrowRight className="w-4 h-4 text-white/20 mx-1 shrink-0" />
                    )}
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 mb-6 justify-center">
                {slide.crossedOut.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-300 text-sm line-through"
                  >
                    <X className="w-3 h-3 inline mr-1" />
                    {item}
                  </span>
                ))}
              </div>
              <ul className="space-y-2 max-w-lg mx-auto">
                {slide.painPoints.map((p, i) => (
                  <motion.li
                    key={p}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.08 }}
                    className="flex items-center gap-2 text-sm text-white/60"
                  >
                    <AlertTriangle className="w-4 h-4 text-red-400 shrink-0" />
                    {p}
                  </motion.li>
                ))}
              </ul>
            </div>
          </SlideContent>
        </>
      );

    case 'pipeline':
      return (
        <>
          <SlideHeader section={slide.section} title={slide.title} subtitle={slide.subtitle} />
          <SlideContent>
            <PipelineFlow stages={slide.stages} earlyResult={slide.earlyResult} />
          </SlideContent>
        </>
      );

    case 'email-timeline':
      return (
        <>
          <SlideHeader section={slide.section} title={slide.title} subtitle={slide.subtitle} />
          <SlideContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3">
                {slide.timeline.map((item, i) => (
                  <motion.div
                    key={item.day}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4 items-start"
                  >
                    <div className="shrink-0 w-12 text-center">
                      <div className="text-bella-gold text-xs font-bold">Day {item.day}</div>
                    </div>
                    <div className="flex-1 bg-bella-dark/50 border border-bella-purple/20 rounded-xl p-3">
                      <div className="text-white text-sm font-medium">{item.label}</div>
                      <div className="text-white/50 text-xs">{item.description}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
              <VideoPreviewCard videoUrl={slide.videoUrl} driveUrl={slide.driveUrl} />
            </div>
          </SlideContent>
        </>
      );

    case 'traffic':
      return (
        <>
          <SlideHeader section={slide.section} title={slide.title} subtitle={slide.subtitle} />
          <SlideContent>
            <TrafficChart
              chartData={slide.chartData}
              current={slide.current}
              target={slide.target}
              locations={slide.locations}
            />
          </SlideContent>
        </>
      );

    case 'channels':
      return (
        <>
          <SlideHeader section={slide.section} title={slide.title} subtitle={slide.subtitle} />
          <SlideContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {slide.channels.map((ch, i) => {
                const Icon = channelIcons[ch.icon] || Globe;
                return (
                  <motion.div
                    key={ch.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-bella-dark/50 border border-bella-purple/20 rounded-xl p-4 text-center"
                  >
                    <Icon className="w-6 h-6 text-bella-lavender mx-auto mb-2" />
                    <div className="text-white text-sm font-medium mb-1">{ch.name}</div>
                    <div className="text-white/50 text-xs">{ch.description}</div>
                  </motion.div>
                );
              })}
            </div>
            <div className="flex items-center justify-center gap-2 flex-wrap">
              {slide.flow.map((step, i) => (
                <div key={step} className="flex items-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="px-5 py-2.5 rounded-full bg-bella-purple/20 border border-bella-purple/40 text-white text-sm font-medium"
                  >
                    {step}
                  </motion.div>
                  {i < slide.flow.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-bella-lavender/50 mx-2" />
                  )}
                </div>
              ))}
            </div>
          </SlideContent>
        </>
      );

    case 'seo':
      return (
        <>
          <SlideHeader section={slide.section} title={slide.title} subtitle={slide.subtitle} />
          <SlideContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-bella-lavender text-xs uppercase tracking-wider mb-3">Target Keywords</h4>
                <div className="flex flex-wrap gap-2">
                  {slide.keywords.map((kw, i) => (
                    <motion.span
                      key={kw}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.06 }}
                      className="px-3 py-1.5 rounded-full bg-bella-purple/20 border border-bella-purple/30 text-white text-xs"
                    >
                      {kw}
                    </motion.span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-bella-lavender text-xs uppercase tracking-wider mb-3">Content Categories</h4>
                <div className="space-y-2">
                  {slide.contentCategories.map((cat, i) => (
                    <motion.div
                      key={cat}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08 }}
                      className="flex items-center gap-2 bg-bella-dark/50 rounded-lg px-3 py-2"
                    >
                      <Search className="w-4 h-4 text-bella-lavender shrink-0" />
                      <span className="text-white/70 text-sm">{cat}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-center text-bella-gold text-sm mt-8"
            >
              {slide.rankingTarget}
            </motion.p>
          </SlideContent>
        </>
      );

    case 'video-split':
      return (
        <>
          <SlideHeader section={slide.section} title={slide.title} subtitle={slide.subtitle} />
          <SlideContent>
            <div className="grid md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="aspect-video rounded-2xl bg-bella-dark/50 border border-bella-purple/30 flex items-center justify-center relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-bella-purple/20 to-transparent" />
                <div className="text-center z-10">
                  <Globe className="w-12 h-12 text-bella-lavender mx-auto mb-2" />
                  <div className="text-white font-medium">Campus Walkthrough</div>
                  <div className="text-white/50 text-sm">Single filming session</div>
                </div>
              </motion.div>
              <div className="grid grid-cols-2 gap-3">
                {slide.assets.map((asset, i) => (
                  <motion.div
                    key={asset.label}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + i * 0.08 }}
                    className="bg-bella-dark/50 border border-bella-purple/20 rounded-xl p-3"
                  >
                    <div className="text-white text-xs font-medium mb-0.5">{asset.label}</div>
                    <div className="text-bella-lavender text-[10px]">{asset.duration}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </SlideContent>
        </>
      );

    case 'reviews':
      return (
        <>
          <SlideHeader section={slide.section} title={slide.title} subtitle={slide.subtitle} />
          <SlideContent>
            <div className="grid lg:grid-cols-3 gap-6 mb-6">
              <RatingMeter current={slide.currentRating} target={slide.targetRating} />
              <div className="lg:col-span-2 space-y-4">
                <ReviewCollage images={reviewImages} caption={slide.caption} />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mt-4">
              <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-4">
                <div className="text-red-300 text-sm font-medium mb-1">{slide.additionalNegatives}</div>
                <div className="text-white/40 text-xs">Beyond the featured examples above</div>
              </div>
              <div>
                <h4 className="text-bella-lavender text-xs uppercase tracking-wider mb-2">Review Recovery Process</h4>
                <ol className="space-y-1">
                  {slide.recoverySteps.map((step, i) => (
                    <li key={step} className="flex items-start gap-2 text-xs text-white/60">
                      <span className="text-bella-purple font-bold shrink-0">{i + 1}.</span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </SlideContent>
        </>
      );

    case 'prospect-comparison':
      return (
        <>
          <SlideHeader section={slide.section} title={slide.title} subtitle={slide.subtitle} />
          <SlideContent>
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {[slide.prospectA, slide.prospectB].map((p, i) => (
                <motion.div
                  key={p.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className={`rounded-2xl p-6 border ${
                    i === 0
                      ? 'bg-red-500/5 border-red-500/20'
                      : 'bg-green-500/5 border-green-500/20'
                  }`}
                >
                  <div className="text-sm font-medium text-white/60 mb-3">{p.label}</div>
                  <div className="flex items-center gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star
                        key={s}
                        className={`w-5 h-5 ${
                          s <= Math.round(p.rating)
                            ? i === 0
                              ? 'text-red-400 fill-red-400'
                              : 'text-green-400 fill-green-400'
                            : 'text-white/10'
                        }`}
                      />
                    ))}
                    <span className="ml-2 text-2xl font-bold text-white">{p.rating}</span>
                  </div>
                  <div className="text-white/70 text-sm mb-2">{p.action}</div>
                  <div
                    className={`text-sm font-medium ${i === 0 ? 'text-red-300' : 'text-green-300'}`}
                  >
                    → {p.outcome}
                  </div>
                </motion.div>
              ))}
            </div>
          </SlideContent>
        </>
      );

    case 'flywheel':
      return (
        <>
          <SlideHeader section={slide.section} title={slide.title} subtitle={slide.subtitle} />
          <SlideContent>
            <GrowthFlywheel steps={slide.flywheelSteps} phases={slide.phases} />
          </SlideContent>
        </>
      );

    case 'team-grid':
      return (
        <>
          <SlideHeader section={slide.section} title={slide.title} subtitle={slide.subtitle} />
          <SlideContent>
            <TeamResponsibilityGrid alanto={slide.alanto} bella={slide.bella} />
          </SlideContent>
        </>
      );

    case 'problem-cards':
      return (
        <>
          <SlideHeader section={slide.section} title={slide.title} subtitle={slide.subtitle} />
          <SlideContent>
            <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {slide.problems.map((problem, i) => {
                const Icon = problemIcons[problem.icon] || AlertTriangle;
                return (
                  <motion.div
                    key={problem.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-bella-dark/50 border border-white/10 rounded-xl p-5"
                  >
                    <div className="flex items-start gap-3">
                      <Icon className="w-5 h-5 text-bella-lavender shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-white font-medium text-sm mb-1">{problem.title}</h4>
                        <p className="text-white/50 text-xs leading-relaxed">{problem.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </SlideContent>
        </>
      );

    case 'requirements':
      return (
        <>
          <SlideHeader section={slide.section} title={slide.title} subtitle={slide.subtitle} />
          <SlideContent>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {slide.requirements.map((req, i) => (
                <RequirementCard key={req.title} requirement={req} index={i} />
              ))}
            </div>
            {slide.appointmentOwner && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-bella-gold/10 border border-bella-gold/30 rounded-xl p-5 max-w-2xl mx-auto text-center"
              >
                <div className="text-bella-gold text-xs uppercase tracking-wider mb-1">Key Role</div>
                <div className="text-white font-semibold mb-2">{slide.appointmentOwner.role}</div>
                <div className="flex flex-wrap justify-center gap-3">
                  {slide.appointmentOwner.responsibilities.map((r) => (
                    <span key={r} className="text-white/60 text-xs bg-white/5 px-3 py-1 rounded-full">
                      {r}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}
          </SlideContent>
        </>
      );

    case 'roadmap':
      return (
        <>
          <SlideHeader section={slide.section} title={slide.title} subtitle={slide.subtitle} />
          <SlideContent>
            <RoadmapTimeline milestones={slide.milestones} />
          </SlideContent>
        </>
      );

    case 'kpi-dashboard':
      return (
        <>
          <SlideHeader section={slide.section} title={slide.title} subtitle={slide.subtitle} />
          <SlideContent>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {slide.metrics.map((metric, i) => {
                const Icon = kpiIcons[metric.icon] || TrendingUp;
                return (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.08 }}
                    className="bg-bella-dark/50 border border-bella-purple/20 rounded-xl p-4"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <Icon className="w-4 h-4 text-bella-lavender" />
                      <span className="text-white/60 text-xs">{metric.label}</span>
                    </div>
                    <div className="flex items-end justify-between">
                      <div>
                        <div className="text-[10px] text-white/40 uppercase">Current</div>
                        <div className="text-lg font-bold text-white">{metric.current}</div>
                      </div>
                      <ArrowRight className="w-3 h-3 text-white/20" />
                      <div className="text-right">
                        <div className="text-[10px] text-bella-gold uppercase">Target</div>
                        <div className="text-lg font-bold text-bella-gold">{metric.target}</div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </SlideContent>
        </>
      );

    case 'final':
      return (
        <>
          <div className="flex-1 flex flex-col items-center justify-center px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-2xl"
            >
              <SlideHeader section={slide.section} title={slide.title} subtitle={slide.subtitle} />
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="font-display text-xl md:text-2xl text-bella-lavender leading-relaxed mb-10 italic"
              >
                "{slide.statement}"
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-white text-lg font-medium mb-2"
              >
                {slide.cta}
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-bella-gold text-sm"
              >
                {slide.contact}
              </motion.p>
            </motion.div>
          </div>
        </>
      );

    default:
      return (
        <SlideContent>
          <p className="text-white/50">Slide type "{slide.type}" not implemented.</p>
        </SlideContent>
      );
  }
}

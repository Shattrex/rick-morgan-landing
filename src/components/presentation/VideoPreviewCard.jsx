import { motion } from 'framer-motion';
import { Play, ExternalLink } from 'lucide-react';

export default function VideoPreviewCard({ videoUrl, driveUrl }) {
  const videoId = videoUrl?.match(/(?:youtu\.be\/|v=)([^&?]+)/)?.[1];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="relative rounded-2xl overflow-hidden border border-bella-purple/30 bg-bella-dark/50 group"
    >
      <div className="aspect-video relative bg-bella-black">
        {videoId ? (
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title="Tour follow-up video"
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <Play className="w-16 h-16 text-bella-lavender/50" />
          </div>
        )}
      </div>
      <div className="p-4 flex items-center justify-between">
        <div>
          <div className="text-white text-sm font-medium">Campus Tour Video</div>
          <div className="text-white/50 text-xs">Embedded in email follow-up sequence</div>
        </div>
        {driveUrl && (
          <a
            href={driveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs text-bella-lavender hover:text-white transition-colors"
          >
            Drive <ExternalLink className="w-3 h-3" />
          </a>
        )}
      </div>
    </motion.div>
  );
}

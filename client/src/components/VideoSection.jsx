import { motion } from "framer-motion";
import { useRef } from "react";

import video1 from "@/components/videos/video1.mp4";
import video2 from "@/components/videos/video2.mp4";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, type: "spring", bounce: 0.3 },
  },
};

export default function VideoSection() {
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);

  const handlePlay = (current, other) => {
    if (other?.current) {
      other.current.pause();
    }
  };

  return (
    <motion.section
      className="py-16 lg:py-24 relative"
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4 lg:px-8">

        <h2 className="text-2xl lg:text-3xl xl:text-4xl font-black text-center mb-12 bg-gradient-to-r from-blue-800 to-indigo-900 bg-clip-text text-transparent">
          Research & Academic Highlights
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          <motion.div
            whileHover={{ scale: 1.02, y: -6 }}
            className="rounded-2xl overflow-hidden shadow-2xl bg-white border border-gray-200"
          >
            <video
              ref={videoRef1}
              src={video1}
              controls
              onPlay={() => handlePlay(videoRef1, videoRef2)}
              className="w-full h-[260px] lg:h-[360px] object-cover"
            />
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02, y: -6 }}
            className="rounded-2xl overflow-hidden shadow-2xl bg-white border border-gray-200"
          >
            <video
              ref={videoRef2}
              src={video2}
              controls
              onPlay={() => handlePlay(videoRef2, videoRef1)}
              className="w-full h-[260px] lg:h-[360px] object-cover"
            />
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}

import { motion } from "framer-motion";

const InfiniteCarousel = () => {
  const images = [
    "/assets/carousel1.png",
    "/assets/carousel2.png",
    "/assets/carousel3.png",
    "/assets/carousel4.png",
    "/assets/carousel5.png",
    "/assets/carousel6.png",
    "/assets/carousel7.png",
    "/assets/carousel8.png",
  ];

  // Duplicate images for seamless loop
  const duplicatedImages = [...images, ...images];

  return (
    <div className="w-full bg-[#f5f5f5] py-10 overflow-hidden">
      <div className="relative">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Top wrapper with concave shape - curves inward at middle */}
        <div
          className="topWrapper"
          style={{
            clipPath:
              "polygon(0 0%, 25% 5%, 50% 10%, 75% 5%, 100% 0%, 100% 100%, 75% 95%, 50% 90%, 25% 95%, 0 100%)",
            position: "relative" as const,
          }}
        >
          {/* Infinite scrolling container */}
          <motion.div
            className="flex gap-6"
            animate={{
              x: [0, -200 * images.length],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}
          >
            {duplicatedImages.map((src, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-64"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                style={{
                  transform: `scale(${
                    1 -
                    Math.abs(0.5 - (index % images.length) / images.length) *
                      0.1
                  })`,
                }}
              >
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-64 object-cover rounded-xl shadow-lg"
                  draggable={false}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default InfiniteCarousel;

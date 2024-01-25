import { stylesWithCssVar } from "@/utils/motion";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const StreamlinedExperience = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  });
  const textX = useTransform(scrollYProgress, [0.1, 0.7], ["100%", "-100%"]);
  const opacitySection = useTransform(scrollYProgress, [0.1, 0.5], [0, 1]);
  const scale = useTransform(scrollYProgress, [0.1, 0.7], [1, 0.7]);

  const opacityBorder = useTransform(
    scrollYProgress,
    [0.7, 0.71, 0.72],
    [1, 1, 0]
  );
  const finalTextOpacity = useTransform(
    scrollYProgress,
    [0.7, 0.71, 0.72, 0.8, 0.9],
    [0, 0, 1, 1, 0]
  );

  const finalTextScale = useTransform(scrollYProgress, [0.8, 0.9], [1, 0.7]);

  return (
    <motion.section
      style={stylesWithCssVar({
        opacity: opacitySection,
        "--scale": scale,
        "--opacity-border": opacityBorder,
      })}
      ref={targetRef}
      className="mt-[40vh] flex h-[500vh] items-start justify-start"
    >
      <div className="sticky top-1/2 left-1/2 min-h-[50rem] min-w-[50rem] -translate-x-2/2
                       -translate-y-1/2 whitespace-nowrap before:absolute before:inset-0
                      before:scale-[var(--scale)] before:border-[2.5rem] before:border-purple-500
                      before:opacity-[var(--opacity-border)] mobile-w sm:-translate-x-1/2 md:-translate-x-0
                       ">
        <motion.p
          aria-hidden
          style={{ x: textX, y: "-50%" }}
          className="whitepspace-nowrap min-w-screen absolute top-1/2 left-[calc(-50vw+10rem)]
                     lg:text-[23rem] text-[10rem] md:text-[16rem] text-heading md:left-[calc(-50vw+10rem)]
                     lg:left-[calc(-50vw+15rem)] xl:left-[calc(-50vw+0rem)]
                     "
        >
          Oogway comics
        </motion.p>
        <motion.p
          style={{
            opacity: finalTextOpacity,
            scale: finalTextScale,
            y: "-50%",
            x: "-50%",
          }}
          className="absolute dostijenia  left-1/2 md:left-1/4 xl:left-0 md:text-[3rem] xl:text-[5rem] top-1/2 text-[4rem] leading-tight text-white"
        >
          <span className="font-bold gradient-text head-text">Наши достижения</span>
          <br />
          За 3 года, наше издательство стало <br /> популярно среди более 6000 школьников
        </motion.p>
        <span className="absolute left-[calc(50%*var(--scale)+50%)] top-0 z-10 h-full w-[50vw] origin-left scale-[var(--scale)] bg-background opacity-[var(--opacity-border)]" />
        <span className="absolute left-[calc(50%*var(--scale)+50%-(2.5rem*var(--scale)))] top-0 z-[12] h-full w-[50vw] origin-left scale-[var(--scale)] border-l-[2.5rem] border-purple-500 opacity-[var(--opacity-border)]" />
      </div>
    </motion.section>
  );
};

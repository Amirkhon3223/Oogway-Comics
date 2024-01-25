import { stylesWithCssVar } from "@/utils/motion";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export const Features = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.9, 1], [0.8, 0.8, 1]);
  const x = useTransform(scrollYProgress, [0.5, 0], ["60%", "10%"]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.5, 0.6, 0.85, 0.9],
    [1, 1, 0.4, 0.4, 1]
  );

  const text1Opacity = useTransform(
    scrollYProgress,
    [0.3, 0.4, 0.5],
    [0, 1, 0]
  );
  const text1Y = useTransform(
    scrollYProgress,
    [0.3, 0.4, 0.5],
    ["30px", "0px", "-30px"]
  );

  const text2Opacity = useTransform(
    scrollYProgress,
    [0.5, 0.6, 0.7],
    [0, 1, 0]
  );
  const text2Y = useTransform(
    scrollYProgress,
    [0.5, 0.6, 0.7],
    ["30px", "0px", "-30px"]
  );

  const text3Opacity = useTransform(
    scrollYProgress,
    [0.7, 0.8, 0.9],
    [0, 1, 0]
  );
  const text4Opacity = useTransform(
    scrollYProgress,
    [0.88, 1, 1.4],
    [0, 1, 0]
  );
  const text3Y = useTransform(
    scrollYProgress,
    [0.7, 0.8, 0.9],
    ["30px", "0px", "-30px"]
  );
  const text4Y = useTransform(
    scrollYProgress,
    [0.9, 1, 1.4],
    ["30px", "0px", "-30px"]
  );

  return (
    <section
      ref={targetRef}
      className="flex h-[450vh] flex-col items-center justify-start max-w-7xl mx-auto"
    >
      <div
        className="sticky nasa-other top-[16.7vh] h-[66.8vh] px-16 text-2xl leading-[.9] text-white [&_p]:w-[45rem] [&_p]:max-w-[90%]">
        <motion.div style={{x, scale}} className="relative h-full imgs">
          <motion.figure style={{opacity}} className="h-full">
            <img src="/nasa.png" className="h-full w-auto nasa-logo" />
          </motion.figure>
          <motion.figure style={{opacity: text2Opacity}}>
            <img
              src="/marvel.png"
              className="absolute inset-0 h-full w-auto"
            />
          </motion.figure>
          <motion.figure style={{opacity: text3Opacity}}>
            <img
              src="/almacon.png"
              className="absolute inset-0 h-full w-auto"
            />
          </motion.figure>
          <motion.figure style={{opacity: text4Opacity}}>
            <img
              src="/cmicbooks.png"
              className="absolute inset-0 h-full w-auto"
            />
          </motion.figure>
        </motion.div>
        <motion.p
          style={stylesWithCssVar({
            opacity: text1Opacity,
            "--y": text1Y,
          })}
          className="translate-y-centered-offset absolute top-1/2 left-0 text-nasa"
        >
          <span className="gradient-text font-bold text-[5rem]">
            Global NASA Space finalists
          </span>
          <br /><br />
          Двухкратные глобальные финалисты NASA Space Apps Challange 2021- 2023
        </motion.p>
        <motion.p
          style={stylesWithCssVar({
            opacity: text2Opacity,
            "--y": text2Y,
          })}
          className="translate-y-centered-offset absolute top-1/2 left-0 text-nasa"
        >
          <span className="gradient-text font-bold text-[5rem] text-marvel">Marvel Collaboration</span>
          <br /><br />
          Среди преподавателей наших клубов есть иллюстраторы из Марвел
        </motion.p>
        <motion.p
          style={stylesWithCssVar({
            opacity: text3Opacity,
            "--y": text3Y,
          })}
          className="translate-y-centered-offset absolute top-1/2 left-0 text-nasa"
        >
          <span className="gradient-text font-bold text-[5rem]">Almacon participant</span>
          <br /><br />
          Мы представляли таджикские комиксы на комикс фестивале в ЦА
        </motion.p>
        <motion.p
          style={stylesWithCssVar({
            opacity: text4Opacity,
            "--y": text4Y,
          })}
          className="translate-y-centered-offset absolute top-1/2 left-0 text-nasa"
        >
          <span className="gradient-text font-bold text-[5rem]">10 000 comicbooks</span>
          <br /><br />
          За 3 года мы распечатали раздали более 10 000 тиражей комиксов
        </motion.p>
      </div>
    </section>
  );
};

import {useScroll, useTransform, motion} from "framer-motion";
import {useEffect, useRef} from "react";

export const Hero = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const {scrollYProgress} = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const position = useTransform(scrollYProgress, (pos) =>
    pos >= 1 ? "relative" : "fixed"
  );

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      if (!targetRef.current) return;
      const {clientX, clientY} = ev;
      targetRef.current.style.setProperty("--x", `${clientX}px`);
      targetRef.current.style.setProperty("--y", `${clientY}px`);
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);
  const xShift = useTransform(scrollYProgress, [0, -10], [0, 0]);


  return (
    <motion.section
      style={{opacity}}
      ref={targetRef}
      className="relative mb-[8rem] h-screen py-10 text-white before:pointer-events-none
                 before:fixed before:inset-0 before:z-0  before:opacity-40
                 before:bg-[radial-gradient(circle_farthest-side_at_var(--x,_100px)_var(--y,_100px),_var(--color-secondary)_0%,_transparent_100%)]"
    >
      <motion.div
        style={{position, scale, x: "-50%"}}
        className="fixed left-1/2 z-10 flex flex-col items-center"
      >
        <h1 className="pt-28 text-center font-extrabold lg:text-[5.5rem] sm:text-3xl text-2xl leading-[1]">
          Oogway Comics
        </h1>
        <p className="font-semibold text-5xl mt-5">present</p>
      </motion.div>
      <motion.img
        style={{x: xShift}}
        src="/oogway_comics.svg"
        className="w-[75vw] mx-auto mt-56 oogway-logo"
      />
    </motion.section>
  );
};

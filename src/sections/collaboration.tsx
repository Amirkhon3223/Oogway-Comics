import {useTransform, useScroll, motion} from "framer-motion";
import {useRef} from "react";

export const Collaboration = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const extendedRef = useRef<HTMLDivElement | null>(null);

  const {scrollYProgress} = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  });

  const {scrollYProgress: scrollYProgressIncludingOverlap} = useScroll({
    target: extendedRef,
    offset: ["start end", "end end"],
  });

  const scale = useTransform(
    scrollYProgressIncludingOverlap,
    [0, 0., 0.1, 5],
    [1, 1.2, 1.5, 1]
  );
  const x = useTransform(
    scrollYProgressIncludingOverlap,
    [0.1, 0.25, 0.70, 0],
    ["-100vw", "50vw", "0vw", "0vw"]
  );

  const y = useTransform(
    scrollYProgressIncludingOverlap,
    [0, 0],
    ["-100vh", "0vh"]
  );
  const opacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);

  return (
    <section ref={targetRef} className="relative mt-[50vh] h-[200vh]">
      <div ref={extendedRef} className="mb-[-100vh] h-[420vh] max-w-7xl mx-auto">
        <div className="sticky top-[0vh]">
          <div className="lg:flex sm:flex-row justify-center items-center w-full">
            <motion.div style={{opacity}}
                        className="translate-y-centered-offset mt-20 relative lg:left-[50px] lg:px-0 px-3 w-2/3
                                   team-block -top-5
                        ">
              <motion.p className="gradient-text font-bold xl:text-[6rem] lg:text-[5rem] text-[4rem]">
                О нас
              </motion.p>
              <motion.p className="text-white font-normal text-md w-3/4
                                   pr-5 md:pr-0 leading-[1.3] team-text"
              >
                Мы команда джедаев? Котов? Тех кто всю зарплау тратить на костюм астронавта. <br />
                А вообще Oogway - сборище людей, которые видят мир в другом
                свете и создают нечто крутое на страницах комиксов...
                Наша миссия показать людям насколько могут быть нереальными обычные,
                на первый взгляд вещи
              </motion.p>
              <motion.img
                style={{opacity}}
                src="/oogway_comics/team.jpg"
                className="h-auto team max-h-none xl:w-1/2 lg:w-1/2 absolute lg:mt-0 xl:mt-10 border-4 rounded-2xl rotate-6 lg:left-0
                           -left-2 md:absolute lg:top-[95%] md:top-0 md:left-[100%] md:w-3/4"
              />
            </motion.div>
            <motion.div style={{scale, y}}
                        className="translate-y-centered-offset relative -right-[100px] -top-52 lg:w-1/3 md:w-2/3">
              <motion.img
                style={{opacity, y}}
                src="/OgVector.png"
                className="h-auto OgVector max-h-none lg:w-[40vw] absolute lg:top-32 md:w-full
                            top-64 md:top-32 lg:left-0 left-14"
              />

            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

import {stylesWithCssVar} from "@/utils/motion";
import {useScroll, useTransform, motion} from "framer-motion";
import {useRef} from "react";

const animationOrder = {
  initial: 0,
  fadeInEnd: 0.15,
  showParagraphOne: 0.25,
  hideParagraphOne: 0.3,
  showParagraphTwoStart: 0.35,
  showParagraphTwoEnd: 0.4,
  hideParagraphTwo: 0.5,
  showLoadingScreenStart: 0.54,
  showLoadingScreenEnd: 0.58,
  createBranchStart: 0.65,
  createBranchEnd: 0.7,
  createBranchFadeInStart: 0.78,
  createBranchFadeInEnd: 0.85,
  endTextFadeInStart: 0.80,
  endTextFadeInEnd: 1,
};

export const SamePage = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const {scrollYProgress} = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  });


  const opacity = useTransform(
    scrollYProgress,
    [
      animationOrder.initial,
      animationOrder.fadeInEnd,
      animationOrder.createBranchEnd,
      animationOrder.endTextFadeInStart,
    ],
    [0, 1, 0, 0]
  );
  const scale = useTransform(
    scrollYProgress,
    [
      animationOrder.initial,
      animationOrder.fadeInEnd,
      animationOrder.showLoadingScreenEnd,
      animationOrder.createBranchStart,
    ],
    [1, 1, 1.3, 0]
  );
  const x = useTransform(
    scrollYProgress,
    [
      animationOrder.initial,
      animationOrder.initial,
      animationOrder.showParagraphOne,
      animationOrder.hideParagraphOne,
      animationOrder.showParagraphTwoStart,
      animationOrder.showParagraphTwoEnd,
      animationOrder.hideParagraphTwo,
      animationOrder.showLoadingScreenStart,
      animationOrder.showLoadingScreenEnd,
      animationOrder.createBranchEnd,
    ],
    ["0%", "0", "40%", "50%", "50%", "-50%", "-50%", "-60%", "-70%", "-100%"]
  );

  const loadingScreenOpacity = useTransform(
    scrollYProgress,
    [
      animationOrder.showLoadingScreenStart,
      animationOrder.showLoadingScreenEnd,
    ],
    [0, 1]
  );
  const loadingScreenX = useTransform(
    scrollYProgress,
    [animationOrder.initial, animationOrder.showParagraphOne,
      animationOrder.createBranchStart, animationOrder.createBranchEnd],
    ["0%", "50%", "50%", "100%"]
  );
  const loadingScreenscale = useTransform(
    scrollYProgress,
    [animationOrder.createBranchStart, animationOrder.createBranchEnd],
    [1, 0.5]
  );

  const paragraph1Opacity = useTransform(
    scrollYProgress,
    [
      animationOrder.fadeInEnd + 0.02,
      animationOrder.showParagraphOne,
      animationOrder.hideParagraphOne,
    ],
    [0, 1, 0]
  );
  const paragraph1TranslateY = useTransform(
    scrollYProgress,
    [
      animationOrder.fadeInEnd + 0.02,
      animationOrder.showParagraphOne,
      animationOrder.hideParagraphOne,
    ],
    ["4rem", "1rem", "-4rem"]
  );

  const paragraph2Opacity = useTransform(
    scrollYProgress,
    [
      animationOrder.showParagraphTwoStart,
      animationOrder.showParagraphTwoEnd,
      animationOrder.hideParagraphTwo,
    ],
    [0, 1, 0]
  );
  const paragraph2TranslateY = useTransform(
    scrollYProgress,
    [
      animationOrder.showParagraphTwoStart,
      animationOrder.showParagraphTwoEnd,
      animationOrder.hideParagraphTwo,
    ],
    ["4rem", "0rem", "-4rem"]
  );

  const newBranchOpacity = useTransform(
    scrollYProgress,
    [
      animationOrder.createBranchFadeInStart,
      animationOrder.createBranchFadeInEnd,
    ],
    [0, 1]
  );

  const endTextOpacity = useTransform(
    scrollYProgress,
    [animationOrder.endTextFadeInStart, animationOrder.endTextFadeInEnd],
    [0, 1]
  );

  const endTexty = useTransform(
    scrollYProgress,
    [animationOrder.endTextFadeInStart, animationOrder.endTextFadeInEnd],
    ["4rem", "0rem"]
  );

  const position = useTransform(scrollYProgress, (pos) =>
    pos >= 1 ? "relative" : "fixed"
  );

  const avatarOpacity = useTransform(scrollYProgress, (pos) =>
    pos >= animationOrder.fadeInEnd ? 1 : 0
  );


  return (
    <section ref={targetRef}>
      <div className="relative h-[800vh] max-w-7xl mx-auto">

        <div className="sticky top-1/2 flex origin-center items-center -translate-y-1/2 justify-between">
          <motion.div
            className="translate-x-centered-offset lg:absolute sm:left-1/2 left-0 top-1 flex
                      sm:w-[100vw] lg:w-[55vw] md:w-[65vw] mx-auto -translate-y-1/2
                      lg:scale-[var(--scale)] sm:scale-[var(--scale)] md:scale-[var(--scale)] flex-col items-center justify-center"
            style={stylesWithCssVar({
              opacity,
              "--x": x,
              "--scale": scale,
            })}
          >
            <img src="/app2.png" className="h-auto w-1/3 lg:w-1/3 scale-125 lg:scale-100 md:scale-125" />
          </motion.div>
          <motion.div
            className="translate-x-centered-offset absolute sm:left-1/2 md:-left-0 lg:-left-72 xl:-left-[10%] -top-1 flex
                       xl:w-[70vw] -translate-y-1/2 md:scale-[var(--scale)] lg:scale-[var(--scale)]
                       flex-col items-center mr-52 app-download-img"
            style={stylesWithCssVar({
              opacity: loadingScreenOpacity,
              "--x": loadingScreenX,
              "--scale": loadingScreenscale,
            })}
          >
            <img src="/oogway_app.png"
                 className="h-auto w-full mt-1 relative lg:top-0 -top-0 scale-125" />
          </motion.div>

          <motion.div
            className="app-download translate-y-centered-offset absolute lg:-top-64 left-[calc(50%-40rem)]
                      w-[50] md:w-[50rem] lg:w-[50rem] sm:pl-1 top-96
                      md:pl-5 leading-[1] text-white px-4 mt-5  md:bottom-16 md:mt-16"
            style={stylesWithCssVar({
              opacity: endTextOpacity,
              "--y": endTexty,
            })}
          >
            <motion.p
              className="lg:text-[5rem] md:text-[3rem] text-[2.5rem] leading-[1] font-bold gradient-text">
              Приложение доступно для Android и IOS:
            </motion.p>
            <div className="flex space-x-4 font-normal lg:text-[2.2rem] text-[1.2rem] leading-[1.3] lg:mt-5 mt-3">
              <a
                href="https://play.google.com/store/apps/details?id=com.oogway.comics&hl=ru&gl=US"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/appstore.svg"
                     className="lg:w-[16vw] hover:scale-105 transition"
                     alt="Oogway Comics" />
              </a>
              <a
                href="https://apps.apple.com/us/app/oogway-comics/id1587722385"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/googleplay.svg"
                     className="lg:w-[16vw] hover:scale-105 transition"
                     alt="Oogway Comics" />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          style={stylesWithCssVar({
            opacity: paragraph1Opacity,
            "--y": paragraph1TranslateY,
            position,
          })}
          className="translate-y-centered-offset bottom-0 lg:top-1/2 lg:bottom-20 sm:left-[1px]
                     lg:left-[100px] md:left-[0px] sm:w-1/3 lg:w-1/2 md:w-full md:bottom-10
                     sm:space-y-4 space-y-2 sm:pl-16 md:pl-8 px-3 font-bold text-white"
        >
          <motion.p className="font-bold xl:text-[6rem] lg:text-[4rem] text-[3.4rem] leading-[1]">
            Все в <span className="gradient-text">одном</span> приложении
          </motion.p>
          <motion.p className="font-normal text-[1.5rem] leading-[1.2]">
            Читайте комиксы, следите за последними новостями и заказывайте мерч
          </motion.p>
        </motion.div>

        <motion.div
          style={stylesWithCssVar({
            opacity: paragraph2Opacity,
            "--y": paragraph2TranslateY,
            position,
          })}
          className="translate-y-centered-offset top-1/2 bottom-32 lg:bottom-0 xl:w-1/2
                    sm:right-[200px] lg:right-[5%] xl:right-[5%] md:right-[10px] right-0 sm:w-1/2 md:w-1/2
                    lg:w-1/2 text-left sm:pr-16 lg:pr-4 xl:pr-10 md:pr-10 px-3 lg:px-0 text-white justify-start cool-opp-block"
        >
          <img src="/app2.png" alt="" className="app2png" />
          <motion.p
            className="cool-opp font-bold text-[3rem] md:text-[3rem] lg:text-[3rem] xl:text-[3rem] leading-[1] gradient-text">
            Крутейщая возможность читать наши <span className="gradient-text">комиксы </span>бесплатно
          </motion.p>
          <br />
          <motion.p className="cool-opp-sec-text font-semibold xl:text-[2.2rem] lg:text-[1.8rem] text-[1.5rem] mb-10 leading-[1.3] mt-5">
            Также, у тебя будет возможность, заказать через приложение, настоящие комиксы и не только их,
            но и футболки, жетоны, кружки, стикеры и другие вещички прямо из приложение
          </motion.p>
        </motion.div>

      </div>
    </section>
  );
};

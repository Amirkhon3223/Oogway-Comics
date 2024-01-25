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
  showLoadingScreenStart: 0.53,
  showLoadingScreenEnd: 0.58,
  createBranchStart: 0.65,
  createBranchEnd: 0.7,
  createBranchFadeInStart: 0.78,
  createBranchFadeInEnd: 0.85,
  endTextFadeInStart: 0.80,
  endTextFadeInEnd: 1,
};


export const Dc = () => {
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
    [2, 1, 2, 0]
  );
  const x = useTransform(
    scrollYProgress,
    [
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
    ["150%", "50%", "50%", "50%", "-60%", "-60%", "-60%", "-60%", "-60%"]
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
    [animationOrder.createBranchStart, animationOrder.createBranchEnd],
    ["50%", "80%"]
  );
  const loadingScreenscale = useTransform(
    scrollYProgress,
    [animationOrder.createBranchStart, animationOrder.createBranchEnd],
    [.8, 0.5]
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
            className="translate-x-centered-offset lg:absolute sm:left-2/2 left-0 top-1 flex md:left-[20%]
                      sm:w-[100vw] lg:w-[65vw] xl:w-[50vw] md:w-[60vw] -translate-y-1/2 items-center md:absolute
                      scale-[var(--scale)] flex-col justify-center md:-top-52 lg:-top-0 lg:left-[40%] xl:left-[40%]"
            style={stylesWithCssVar({
              opacity,
              "--x": x,
              "--scale": scale,
            })}
          >
            <img src="/oogway_comics/OogwayCard.png" className="h-auto w-2/3 lg:w-1/2 scale-105 lg:scale-105 md:scale-125" />
          </motion.div>

          <motion.div
            className="translate-x-centered-offset absolute sm:left-1/2 -top-10 -left-1/4 lg:-top-1 flex sm:w-[50vw] md:w-[80vw] lg:w-[60vw] w-[100vw]
                      -translate-y-1/2 scale-[var(--scale)] flex-col items-center justify-center md:left-96 xl:left-52 lg:left-86 md:-top-24"
            style={stylesWithCssVar({
              opacity: loadingScreenOpacity,
              "--x": loadingScreenX,
              "--scale": loadingScreenscale,
            })}
          >
            <img src="/oogway_comics/DC.png" className="dcpng h-auto w-full mt-1 relative lg:top-0 -top-5 -left-4 scale-[1.8] lg:scale-[1.2] md:scale-[1.8]" />
          </motion.div>

          <motion.div
            className="translate-y-centered-offset absolute lg:top-1/2 lg:left-[calc(50%-36rem)] left-[calc(50%-44rem)]
                      w-[50] md:w-[50rem] lg:w-[45rem] sm:pl-1 top-[250px] md:left-[calc(50%-23rem)]
                      md:pl-5 leading-[1] text-white block-dcpng px-5 xl:left-[calc(50%-45rem)]"
            style={stylesWithCssVar({
              opacity: endTextOpacity,
              "--y": endTexty,
            })}
          >
            <motion.p
              className="dc-near xl:text-[4rem] lg:text-[3rem] md:text-[3rem] text-[2.5rem] leading-[1] font-bold gradient-text">
              Стань ближе к героям Oogway Comics с картами Dushanbe City Bank
            </motion.p>
            <motion.p className="font-normal smalldctext lg:text-[2.2rem] text-[1.2rem] leading-[1.3] lg:mt-5 mt-1">
              Закажите себе и своему ребёнку карту Душанбе Сити с дизайном персонажей Oogway comics
            </motion.p>
            <div className="mt-5 ">
              <a
                href="https://oogway.dc.tj/#fill"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-[2.2rem] justify-start font-normal"
              >
                <div className="hover:scale-[1.1] items-center transition flex space-x-2">
                  <div className="gradient-text choiseHero">
                    Выбрать героя
                  </div>
                  <div className="mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="next" width="55" height="35" viewBox="0 0 25 20">
                      <path d="M1 9.75H23.5M23.5 9.75L16.5 18.25M23.5 9.75L16.5 1.75" stroke="#00bfff" stroke-width="4"
                            stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                </div>
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
          className="translate-y-centered-offset bottom-0 lg:top-1/2 lg:bottom-20 sm:left-[1px] lg:left-[50px] md:left-[0px] xl:left-[250px]
                     sm:w-1/3 lg:w-1/2 xl:w-1/3 md:w-full sm:space-y-4 space-y-2 sm:pl-16 md:pl-8 pl-4 font-bold text-white"
        >
          <motion.p className="font-bold lg:text-[5rem] xl:text-[6rem] text-[4.2em] leading-[1]">
            Коллаб с <span className="gradient-text">Dushanbe City Bank</span>
        </motion.p>
          <br />
          <motion.p className="text-white sm:text-xl text-sm">
            <a
              href="https://oogway.dc.tj/#"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#a103fd] sm:px-6 sm:py-3 px-4 py-2 rounded-full font-bold hover:scale-[1.11] transition "
            > Заказать
            </a>
          </motion.p>
        </motion.div>

        <motion.div
          style={stylesWithCssVar({
            opacity: paragraph2Opacity,
            "--y": paragraph2TranslateY,
            position,
          })}
          className="translate-y-centered-offset top-1/2 sm:-bottom-10 lg:-bottom-[20vw] xl:-bottom-32
                    sm:right-[200px] xl:right-[10%] lg:right-[0] md:right-[10px] right-0 sm:w-1/2 md:w-11/12 md:bottom-[100vw]
                    lg:w-1/2 xl:w-1/3  text-left sm:pr-16 lg:pr-5 md:pr-10 px-3 lg:px-0 text-white justify-start"
        >
          <img src="/oogway_comics/OogwayCard.png"
               className="h-auto w-2/2 lg:w-1/2 scale-105 lg:scale-105 md:scale-125 mb-5 dccardbank" />

          <motion.p className="font-bold choiseDC text-[3rem] md:text-[4rem] lg:text-[5rem] xl:text-[5rem] leading-[1] gradient-text">
            Выбери свою карту и выиграй крутой мерч
          </motion.p>
          <br />
          <motion.p className="font-semibold eachCard lg:text-[2rem] text-[1.1rem] mb-10 leading-[1.3] mt-5">
            Каждая карта представляет из себя набора в котором есть карточка,
            инфо о персонаже, ссылка на комикс и стикерпак.
            Найди стикерпак персонажей из Лавки Чудес и выиграй крутой мерч
          </motion.p>
        </motion.div>

      </div>
    </section>
  );
};

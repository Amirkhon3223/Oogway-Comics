import {motion, useScroll, useTransform} from "framer-motion";
import {useRef} from "react";
import Image from 'next/image';

import mitan1 from '/public/oogway_comics/mitan1.png';
import mitan2 from '/public/oogway_comics/mitan_peremens.png';
import mitan3 from '/public/oogway_comics/mitan3.png';
import spiritus1 from '/public/oogway_comics/spiritus1.jpg';
import spiritus2 from '/public/oogway_comics/spiritus2.jpg';
import lavka1 from '/public/oogway_comics/lavka.jpg';
import lavka2 from '/public/oogway_comics/lavka2.png';
import lostWorld from '/public/oogway_comics/lost_worlds.jpg';
import togetherland from '/public/oogway_comics/together1.jpg';
import Nassy from '/public/oogway_comics/nassy.jpg';


const content = [
  {
    image: mitan1,
    title: "Дети Митана. Начало",
    pdf: "oogway_comics/pdf/Mitan1.pdf"
  },
  {
    image: mitan2,
    title: "Дети Митана. Перемены",
    pdf: "oogway_comics/pdf/Mitan2.pdf"
  },
  {
    image: mitan3,
    title: "Дети Митана 3",
    pdf: "oogway_comics/pdf/Mitan3.pdf"
  },
  {
    image: spiritus1,
    title: "Спириус",
    pdf: "oogway_comics/pdf/Spiritus1.pdf"
  },
  {
    image: spiritus2,
    title: "Спиритус",
    pdf: "oogway_comics/pdf/Spiritus2.pdf"
  },
  {
    image: lavka1,
    title: "Лавка Чудес",
    pdf: "oogway_comics/pdf/lavka1.pdf"
  },
  {
    image: lavka2,
    title: "Лавка 2 Чудес",
    pdf: "oogway_comics/pdf/lavka2.pdf"
  },
  {
    image: togetherland,
    title: "Togetherland",
    pdf: "oogway_comics/pdf/Togetherland.pdf"
  },
  {
    image: lostWorld,
    title: "Поетрянные Миры",
    pdf: "oogway_comics/pdf/the_lost_worlds.pdf"
  },
  {
    image: Nassy,
    title: "NASSY",
    pdf: "oogway_comics/pdf/Nassy.pdf"
  },
];

export const MoreFeatures = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0.88, 1], [1, 0]);
  const y = useTransform(scrollYProgress, [0.8, 1], ["0vh", "50vh"]);

  const handleDownload = (pdfUrl: string) => {
    window.open(pdfUrl, '_blank');
  };

  return (
    <div className="py-20 text-center px-2 our-comics">
      <h1 className="gradient-text text-center font-extrabold lg:text-[5.5rem] sm:text-3xl text-2xl leading-[1]">Наши комиксы</h1>
      <motion.section
        ref={targetRef}
        style={{ opacity, y }}
        className="mx-auto grid w-full max-w-[120rem] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 pt-8 justify-center items-center"
      >
        {content.map(({ image, title, pdf }) => (
          <a
            key={title}
            className="mx-auto hover:scale-105 transition duration-200 cursor-pointer"
            href={pdf}
            download
          >
            <span className="items-center justify-center">
              <Image src={image} alt="Oogway Comics" className="w-96 mx-auto" />
            </span>
            <h3 className="text-sm text-center mt-3 text-white font-bold">{title}</h3>
          </a>
        ))}
      </motion.section>
    </div>
  );
};
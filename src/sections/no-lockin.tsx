export const NoLockin = () => (
  <section className="relative z-10 pt-24 pb-52 bg-white  footer">
    <h2 className="mt-12 f-header-text text-center text-3xl font-bold leading-[1]
                   tracking-tighter text-[#171618]">
      Created by
    </h2>
    <h2 className="text-secondary mt-3 f-oogway-heading text-center text-3xl font-bold leading-[1]">
      Oogway Comics
    </h2>

    <div className="mx-auto max-w-7xl bg-white text-center text-lg text-black">
      <div className="mx-auto flex justify-center space-x-3 items-center mt-20">
        <a
          className="hover:scale-150 transition duration-300"
          href="https://www.instagram.com/oogway_comics/"
          target="_blank"
          rel="noopener nofollow noreferrer"
        >
          <img src="/instagram.svg" alt="oogway instagram" className="w-10" />
        </a>
        <a
          className="hover:scale-150 transition duration-300"
          href="https://www.facebook.com/Oogwaycomics"
          target="_blank"
          rel="noopener nofollow noreferrer"
        >
          <img src="/facebook.svg" alt="oogway facebook" className="w-10" />
        </a>
        <a
          className="hover:scale-150 transition duration-300"
          href="https://t.me/oogway_comics"
          target="_blank"
          rel="noopener nofollow noreferrer"
        >
          <img src="/telegram.svg" alt="oogway telegram" className="w-10" />
        </a>
        <a
          className="hover:scale-150 transition duration-300"
          href="https://www.youtube.com/@oogway8267"
          target="_blank"
          rel="noopener nofollow noreferrer"
        >
          <img src="/youtube.svg" alt="oogway youtube" className="w-10" />
        </a>
      </div>
      <div className="flex justify-center space-x-3 items-center mt-20 pb-10 bg-white w-full">
        <iframe className="video"
                src="https://www.youtube.com/embed/M8EhaQQi4QE" frameBorder="0"
                allowFullScreen>
        </iframe>
      </div>
    </div>
  </section>
);

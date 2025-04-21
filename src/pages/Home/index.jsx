const Home = () => {
  return (
    <section className="w-full min-h-screen bg-[url(src/assets/img/home/background-home-mobile.jpg)] bg-cover bg-center grid grid-cols-4 grid-rows-10 gap-2 p-6 pt-16 md:bg-[url(src/assets/img/home/background-home-tablet.jpg)] md:grid md:grid-cols-8 md:grid-rows-9 md:gap-4">
      <div className="col-span-4 flex flex-col-reverse text-center md:col-span-6 md:col-start-2 md:row-start-2">
        <span className="uppercase font-baloo font-light tracking-[.2em] text-sky-100/80 text-lg md:font-barlow-condensed md:text-3xl md:tracking-[.3em]">
          So, you want to travel to
        </span>
      </div>
      <div className="col-span-4 row-span-2 row-start-2 flex justify-center items-center md:col-span-6 md:row-span-2 md:col-start-2 md:row-start-3">
        <h1 className="text-8xl font-bellefair uppercase text-white text-center md:text-[13rem]">
          Space
        </h1>
      </div>
      <div className="col-span-4 row-span-4 row-start-4 p-2 md:col-span-6 md:row-span-2 md:col-start-2 md:row-start-5">
        <p className=" text-sky-100/60 text-center font-barlow text-base leading-8 tracking-wider md:text-xl">
          Let's face it; if you want to go space, you might as well genulnely go
          to outer space and not hover kind of on the edge of it. Well sit back,
          and relax because we'll give you a truly out this world experience!
        </p>
      </div>
      <div className="col-span-2 row-span-2 col-start-2 row-start-8 grid place-content-center w-40 h-40 font-bellefair uppercase text-2xl text-indigo-950 bg-white rounded-full md:col-span-4 md:row-span-4 md:col-start-3 md:row-start-6 md:w-96 md:h-96 md:text-5xl md:m-auto">
        Explore
      </div>
    </section>
  );
};
export default Home;

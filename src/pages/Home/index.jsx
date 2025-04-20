const Home = () => {
  return (
    <section className="w-full min-h-screen bg-[url(src/assets/img/home/background-home-mobile.jpg)] bg-cover bg-center grid grid-cols-4 grid-rows-10 gap-2 p-6 pt-16">
      <div className="col-span-4 flex flex-col-reverse text-center">
        <span className="uppercase font-baloo font-light tracking-[.2em] text-sky-100/80 text-lg">
          So, you want to travel to
        </span>
      </div>
      <div className="col-span-4 row-span-2 row-start-2 flex justify-center items-center">
        <h1 className="text-8xl font-bellefair uppercase text-white text-center">
          Space
        </h1>
      </div>
      <div className="col-span-4 row-span-4 row-start-4 p-2">
        <p className=" text-sky-100/60 text-center font-barlow text-base leading-8 tracking-wider">
          Let's face it; if you want to go space, you might as well genulnely go
          to outer space and not hover kind of on the edge of it. Well sit back,
          and relax because we'll give you a truly out this world experience!
        </p>
      </div>
      <div className="col-span-2 row-span-2 col-start-2 row-start-8 flex justify-center items-center">
        <button className="w-40 h-40 font-bellefair uppercase text-2xl text-blue-950 bg-white rounded-full">
          Explore
        </button>
      </div>
    </section>
  );
};
export default Home;

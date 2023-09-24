import Map from "../assets/hero.jpg";

const Hero = () => {
  return (
    <>
      <header className="flex flex-col md:flex-row justify-between px-6 lg:px-[190px] gap-6 h-[calc(80vh+100px)] items-center min-w-[300px]">
        <section className="p-4 flex flex-col items-center md:items-start">
          <h1 className="text-primary text-center md:text-start pt-20 text-2xl md:text-[56px] md:leading-normal font-extrabold">
            Check My Postcode
          </h1>
          <p className="text-dark text-2xl leading-normal text-center md:text-start">
            Or use your device's geolocation service to find postcodes near you
          </p>
          <button className="flex py-2 px-6 transition-all rounded-md justify-center items-center gap-2 bg-accent text-white text-xl mt-7">
            Locate me
          </button>
        </section>
        <section>
          <img src={Map} alt="Map Img" />
        </section>
      </header>
    </>
  );
};

export default Hero;

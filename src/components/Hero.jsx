import Map from "../assets/hero.jpg";

const Hero = () => {
  return (
    <>
      <header className="flex justify-between px-[190px] gap-6 h-[calc(100vh-100px)] items-center">
        <section className="p-4">
          <h1 className="text-primary text-[56px] leading-normal font-extrabold">
            Check My Postcode
          </h1>
          <p className="text-dark text-2xl leading-normal">
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

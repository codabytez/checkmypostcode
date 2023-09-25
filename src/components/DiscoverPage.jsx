import Sixt from "../assets/Sixt.jpeg";
import Trondheim from "../assets/Trondheim.jpeg";
import Vierville from "../assets/Vierville.jpeg";
import Ladro from "../assets/Ladro.jpeg";
import Cala from "../assets/Cala.jpeg";

const DiscoverPage = () => {
  return (
    <>
      <div className="px-10 lg:px-[120px] mt-16">
        <h2 className="relative z-10 py-4 text-black text-5xl leading-normal font-bold">
          Discover
        </h2>
        <div className="grid grid-rows-5 sm:grid-rows-3 lg:grid-rows-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 relative">
          <div className="absolute -top-9 -left-[50px] bg-white rounded-[110%] border-primary h-[90px] w-[calc(100%+100px)] hidden z-10 lg:block"></div>
          <div className="absolute -bottom-10 -left-[50px] bg-white rounded-[110%] border-primary h-[90px] w-[calc(100%+100px)] hidden lg:block z-10"></div>
          <Img src={Ladro} name="Pieve Di Ledro" />
          <Img src={Vierville} name="Vierville-sur-Mer" />
          <Img src={Cala} name="Cala Aguila" />
          <Img src={Trondheim} name="Trondheim" />
          <Img src={Sixt} name="Sixt" />
        </div>
      </div>
    </>
  );
};

export default DiscoverPage;

const Img = ({ src, alt, name }) => {
  return (
    <div className="h-full rounded-lg overflow-hidden relative">
      <img src={src} alt={alt} className="h-full object-cover" />
      <h3 className="text-lg text-white font-bold leading-normal absolute bottom-2 lg:bottom-[18%] bg-tertiary/50 p-2 m-1 rounded">
        {name}
      </h3>
    </div>
  );
};

const City = ({ name, src, properties }) => {
  return (
    <div>
      <div className="relative h-full rounded-lg overflow-hidden">
        <img src={src} alt={name} className="h-full object-cover" />
        <div className="text-white font-bold leading-normal absolute bottom-0 bg-tertiary/50 p-2 m-2">
          <h3 className="text-xl">{name}</h3>
          <p className="text-sm">{properties} Properties</p>
        </div>
      </div>
      <p className="text-dark/60 font-bold text-end p-1">Double from</p>
    </div>
  );
};

export default City;

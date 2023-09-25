const Footer = () => {
  return (
    <footer className="bg-primary flex flex-col justify-between mt-[100px] min-w-[300px]">
      <div className="lg:px-[120px] py-[100px] flex flex-col justify-center lg:flex-row lg:justify-evenly gap-10 lg:gap-32">
        <div className="flex flex-col text-white sm:text-2xl items-center text-center lg:items-start lg:text-start">
          <p className="leading-[48px]">Search</p>
          <p className="leading-[48px]">
            {" "}
            <span className="font-bold">postcode</span> by Country
          </p>
          <p className="leading-[48px]">
            {" "}
            <span className="font-bold">postcode</span> by introduction Date
          </p>
          <p className="leading-[48px]">
            {" "}
            <span className="font-bold">postcode</span> Near Me
          </p>
          <p className="leading-[48px]">
            {" "}
            <span className="font-bold">postcode</span> Lottery
          </p>
        </div>
        <div className="flex flex-col text-white sm:text-2xl items-center text-center lg:items-start lg:text-start">
          <p className="leading-[48px]">
            {" "}
            <span className="font-bold">postcode</span> Map by User Type
          </p>
          <p className="leading-[48px]">
            {" "}
            <span className="font-bold">postcode</span> Map by Use Category
          </p>
          <p className="leading-[48px]">
            {" "}
            <span className="font-bold">postcode</span> Map by Council Tax Band
          </p>
        </div>
        <div className="flex flex-col text-white sm:text-2xl items-center text-center lg:items-start lg:text-start">
          <p className="leading-[48px]">About this Website</p>
          <p className="leading-[48px]">Disclaimer and limitations</p>
          <p className="leading-[48px]">Privacy Policy</p>
        </div>
      </div>
      <p className="bg-primary p-5 text-white text-center sm:text-2xl leading-normal font-bold">
        Check My Postcode
      </p>
      <p className="text-center text-white lg:text-2xl sm:font-bold bg-[#030303] py-7 lg:px-[120px]">
        CheckMypostcode.UK is a{" "}
        <span className=" text-accent-2">Good Stuff</span> website.
      </p>
    </footer>
  );
};

export default Footer;

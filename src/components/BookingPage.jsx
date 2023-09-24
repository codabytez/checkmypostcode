import Sixt from "../assets/Sixt.jpeg";
import Bransgore from "../assets/Bransgore.jpeg";
import Trondheim from "../assets/Trondheim.jpeg";

import City from "./City";

const BookingPage = () => {
  return (
    <>
      <section className="flex flex-col gap-7 min-w[300px]">
        <h2 className="text-accent text-4xl sm:text-5xl font-bold leading-normal py-6 text-center sm:text-start sm:px-[87px] bg-secondary">
          Booking
          <span className="text-accent-2">.com</span>
        </h2>
        <div className="grid grid-rows-4 lg:grid-cols-4 px-8 lg:px-[83px] gap-10">
          <form className="flex flex-col px-6 pt-6 gap-4 bg-[#D9D9D933] rounded-lg h-max">
            <div className="flex flex-col gap-4">
              <label htmlFor="search">Search</label>
              <input
                type="text"
                placeholder="e.g city, region, district..."
                id="search"
                aria-label="search"
                className="flex p-3 items-center rounded-lg border border-black focus:outline-0"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="checkIn">Check in date</label>
              <input
                className="p-3 rounded-lg border border-black focus:outline-0"
                type="date"
                id="checkIn"
                aria-label="checkIn"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="checkIn">Check Out date</label>
              <input
                className="p-3 rounded-lg border border-black focus:outline-0"
                type="date"
                id="checkOut"
                aria-label="checkOut"
              />
            </div>
            <button className="flex text-white text-xl font-bold py-2 px-4 justify-center items-center gap-3 bg-accent rounded-lg transition-all">
              Search
            </button>
            <a className="underline text-dark text-lg font-bold pb-2" href="#">
              Guests
            </a>
          </form>
          <City src={Trondheim} name="Trondheim" properties={45} />
          <City src={Sixt} name="Sixt" properties={21} />
          <City src={Bransgore} name="Bransgore" properties={4} />
        </div>
      </section>
    </>
  );
};

export default BookingPage;

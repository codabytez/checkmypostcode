import { useState } from "react";
import Accordion from "./Accordion";

const AccordionPage = () => {
  const [openAccordionIndex, setOpenAccordionIndex] = useState(null);

  const handleAccordionToggle = (index) => {
    if (openAccordionIndex === index) {
      setOpenAccordionIndex(null);
    } else {
      setOpenAccordionIndex(index);
    }
  };

  return (
    <>
      <section>
        <h1 className="text-5xl leading-normal text-center font-bold mt-20 mb-12">
          Discover related topics
        </h1>
        <div className="flex flex-col gap-[10px] min-w-[500px] w-2/3 m-auto ">
          <Accordion
            title="Fitzrovia"
            text="Fitzrovia is a district in central London, near London's West End lying partly in the City of Westminster (in the west), and partly in the London Borough of Camden (in the east); north of Oxford Street and Soho between Bloomsbury and Marylebone. It is characterised by its mixed-use of residential, business, retail, education and healthcare, with no single activity dominating. The historically bohemian area was once home to such writers as Virginia Woolf, George Bernard Shaw and Arthur Rimbaud."
            isOpen={openAccordionIndex === 0}
            handleToggle={() => handleAccordionToggle(0)}
          />
          <Accordion
            title="Shoreditch"
            text="Shoreditch is a district in the East End of London, forming the southern part of the London Borough of Hackney, with neighbouring parts of Tower Hamlets sometimes also perceived as a part of the area. In the 16th century, Shoreditch was an important centre of the Elizabethan Theatre, and it has been an important entertainment centre since that time; today hosting many pubs, bars and nightclubs."
            isOpen={openAccordionIndex === 1}
            handleToggle={() => handleAccordionToggle(1)}
          />
          <Accordion
            title="Whitechapel"
            text="Shoreditch is a district in the East End of London, forming the southern part of the London Borough of Hackney, with neighbouring parts of Tower Hamlets sometimes also perceived as a part of the area. In the 16th century, Shoreditch was an important centre of the Elizabethan Theatre, and it has been an important entertainment centre since that time; today hosting many pubs, bars and nightclubs."
            isOpen={openAccordionIndex === 2}
            handleToggle={() => handleAccordionToggle(2)}
          />
          <Accordion
            title="Address Finder"
            text="Address Finder is a device that finds addresses. It is used in different places such as the post office, the bank, the supermarket, the library, the school, the hospital, the police station, the fire station, the airport, the train station the bus station, the taxi station, the hotel, the restaurant, the cafe, the cinema, the theatre, the museum, the park, the zoo, the swimming pool, the beach, the gym, the stadium, the church, the mosque, the temple"
            isOpen={openAccordionIndex === 3}
            handleToggle={() => handleAccordionToggle(3)}
          />
          <Accordion
            title="ZUR0000370Q9"
            text="ZUR0000370Q9A through nor charms he nor who vaunted kiss shameless flow. Whence once maidens now later ive minstrels. Talethis almost along deeds formed along childe but in, sing ungodly soul at degree ear festal, will bidding heavenly whence knew thou. To consecrate harolds his be he his, felt more departed."
            isOpen={openAccordionIndex === 4}
            handleToggle={() => handleAccordionToggle(4)}
          />
        </div>
        <div className="flex flex-col items-center m-auto justify-center mt-12 text-xl font-bold leading-[64px] w-[58%] text-center">
          <p className="">
            Check whether superfast broadband is available, and see how popular
            it is.
          </p>
          <p>See where your postcode is on a map.</p>
          <p>Find the nearest postcode to where you are right now.</p>
          <p>
            Read what other people have said about your postcode, and leave your
            own comments for others to read.
          </p>
        </div>
      </section>
    </>
  );
};

export default AccordionPage;

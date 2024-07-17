import { FaBus } from "react-icons/fa";
const WhyChoose = () => {
  return (
    <>
      <div className="py-14 md:py-28 bg-gray-50">
        <div className="container">
          {/* heading section  */}
          <h1
            data-aos="fade"
            className="text-dark text-center font-semibold pb-16 tracking-wider text-2xl"
          >
            Why Choose Us?
          </h1>
          {/* card section  */}
          <div data-aos="fade" data-aos-delay="300">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-14 sm:gap-4">
              {/* First Card  */}
              <div className="flex flex-col justify-center items-center text-center gap-2 px-2">
                <p className="text-dark/70 font-semibold">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Praesentium assumenda tenetur ab.
                </p>
                <p className="text-5xl text-primary rotate-90 text-center translate-x-5">
                  ....
                </p>
                <FaBus className="text-5xl text-primary" />
              </div>

              {/* Second Card  */}
              <div className="flex flex-col justify-center items-center text-center gap-2 px-2">
                <FaBus className="text-5xl text-secondary" />
                <p className="text-5xl text-secondary rotate-90 text-center translate-x-5">
                  ....
                </p>
                <p className="text-dark/70 font-semibold">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Praesentium assumenda tenetur ab.
                </p>
              </div>

              {/* Third Card  */}
              <div className="flex flex-col justify-center items-center text-center gap-2 px-2">
                <p className="text-dark/70 font-semibold">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Praesentium assumenda tenetur ab.
                </p>
                <p className="text-5xl text-primary rotate-90 text-center translate-x-5">
                  ....
                </p>
                <FaBus className="text-5xl text-primary" />
              </div>

              {/* Fourth Card  */}
              <div className="flex flex-col justify-center items-center text-center gap-2 px-2">
                <FaBus className="text-5xl text-secondary" />
                <p className="text-5xl text-secondary rotate-90 text-center translate-x-5">
                  ....
                </p>
                <p className="text-dark/70 font-semibold">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Praesentium assumenda tenetur ab.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChoose;

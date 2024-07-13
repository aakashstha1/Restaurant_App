import heroImg from "../assets/hero.png";
import HeroBg from "../assets/heroBg.png";
import PrimaryButton from "../shared/PrimaryButton";

const BgStyle = {
  backgroundImage: `URL(${HeroBg})`,
  backgroundRepeate: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  width: "100%",
  height: "100%",
};
const Hero = () => {
  return (
    <>
      <div style={BgStyle} className="relative z-[-1]">
        <div className="container py-6 sm:py-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center min-h-[600px]">
            {/* text content section */}
            <div className="space-y-7 order-2">
              <h1 className="text-7xl text-dark order-2 sm:order1 ">
                Fresh & Healthy Meal Plan
                <span className="text-secondary font-cursive text-7xl">
                  Delivery
                </span>{" "}
                in Itahari
              </h1>
              <p className="lg:pr-64">
                Delecious Meals Delivered to our Door From Rs.1000 per week
              </p>

              {/* Button section  */}
              <div>
                <PrimaryButton />
              </div>
            </div>
            {/* Image section */}
            <div className="order-1 sm:order-2">
              <img
                src={heroImg}
                alt="hero.png"
                className="w-full sm:scale-120 sm:translate-y-15"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

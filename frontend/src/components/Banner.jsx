import apple from "../assets/apple.png";
import kiwi from "../assets/kiwi.png";
import leaf from "../assets/leaf.png";
import tomato from "../assets/tomato.png";
import lemon from "../assets/lemon.png";
import PrimaryButton from "../shared/PrimaryButton";

const Banner = () => {
  return (
    <>
      <div className="container py-14 relative mx-auto">
        <div>
          <h1 className="tracking-wider text-2xl py-8 text-center text-dark font-semibold">
            Taste the Healthy Difference
          </h1>

          {/* text content section */}
          <div className="space-y-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-10">
              <div>
                <p>
                  We know that <span className="text-primary">time</span> is the
                  greatest value in the modern world. Our healthy meal plan
                  delivery service Good Food in Miami is the answer for those
                  who want to eat healthily, saving time for buying food and
                  preparing delicious, healthy meals.
                </p>
              </div>
              <div></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-10">
              <div></div>
              <div>
                <p>
                  We know that <span className="text-primary">time</span> is the
                  greatest value in the modern world. Our healthy meal plan
                  delivery service Good Food in Miami is the answer for those
                  who want to eat healthily, saving time for buying food and
                  preparing delicious, healthy meals.
                </p>
              </div>
            </div>
          </div>
          {/* Button section */}
          <div className="flex justify-center mt-10 sm:mt-14">
            <PrimaryButton />
          </div>
        </div>
        {/* bg fruits image */}
        <div className="absolute top-5 -left-16 sm:bottom-0 sm:left-0 opacity-50 sm:opacity-100">
          <img src={leaf} alt="leaf" className="max-w-[600px]" />
        </div>
        <div className="absolute -bottom-16 -left-16 sm:bottom-0 sm:left-0 opacity-50 sm:opacity-100">
          <img src={tomato} alt="tomato" className="max-w-[300px]" />
        </div>
        <div className="absolute top-10 -right-16 sm:right-20 opacity-50 sm:opacity-100">
          <img src={lemon} alt="lemon" className="max-w-[200px]" />
        </div>
        <div className="absolute top-1/2 left-1/3  opacity-50 sm:opacity-100">
          <img src={kiwi} alt="kiwi" className="max-w-[300px]" />
        </div>
        <div className="absolute bottom-0 -right-20 -translate-x-1/2 -translate-y-1/5 opacity-0 sm:opacity-100">
          <img src={apple} alt="apple" className="max-w-[200px]" />
        </div>
      </div>
    </>
  );
};

export default Banner;

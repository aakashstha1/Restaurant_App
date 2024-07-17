import apple from "../assets/apple.png";
import kiwi from "../assets/kiwi.png";
import leaf from "../assets/leaf.png";
import tomato from "../assets/tomato.png";
import lemon from "../assets/lemon.png";
import PrimaryButton from "../shared/PrimaryButton";

const Banner = () => {
  return (
    <section className="container py-14 relative mx-auto">
      <header>
        <h1
          data-aos="fade-up"
          data-aos-delay="300"
          className="tracking-wider text-2xl py-8 text-center text-dark font-semibold"
        >
          Taste the Healthy Difference
        </h1>
      </header>

      {/* Text Content Section */}
      <div className="space-y-10">
        <article
          data-aos="fade-up"
          data-aos-delay="500"
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-10"
        >
          <div>
            <p>
              We know that <span className="text-primary">time</span> is the
              greatest value in the modern world. Our healthy meal plan delivery
              service Good Food in Miami is the answer for those who want to eat
              healthily, saving time for buying food and preparing delicious,
              healthy meals.
            </p>
          </div>
          <div></div>
        </article>

        <article
          data-aos="fade-up"
          data-aos-delay="300"
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-10"
        >
          <div></div>
          <div>
            <p>
              We know that <span className="text-primary">time</span> is the
              greatest value in the modern world. Our healthy meal plan delivery
              service Good Food in Miami is the answer for those who want to eat
              healthily, saving time for buying food and preparing delicious,
              healthy meals.
            </p>
          </div>
        </article>
      </div>

      {/* Button Section */}
      <div
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-offset="0"
        className="flex justify-center mt-10 sm:mt-14"
      >
        <PrimaryButton className="z-100" />
      </div>

      {/* Background Fruits Image */}
      <div
        data-aos="fade-right"
        className="absolute top-5 -left-16 sm:bottom-0 sm:left-0 opacity-50 sm:opacity-100 z-[-99]"
      >
        <img src={leaf} alt="Leaf" className="max-w-[600px]" />
      </div>
      <div
        data-aos="fade-right"
        className="absolute -bottom-16 -left-16 sm:bottom-0 sm:left-0 opacity-50 sm:opacity-100 z-[-99]"
      >
        <img src={tomato} alt="Tomato" className="max-w-[300px]" />
      </div>
      <div
        data-aos="fade-left"
        className="absolute top-10 -right-16 sm:right-20 opacity-50 sm:opacity-100 z-[-99]"
      >
        <img src={lemon} alt="Lemon" className="max-w-[200px]" />
      </div>
      <div
        data-aos="fade-right"
        className="absolute top-1/2 left-1/3 opacity-50 sm:opacity-100 z-[-99]"
      >
        <img src={kiwi} alt="Kiwi" className="max-w-[300px]" />
      </div>
      <div
        data-aos="fade-left"
        className="absolute bottom-0 right-2 opacity-50 sm:opacity-100 z-[-99]"
      >
        <img src={apple} alt="Apple" className="max-w-[200px]" />
      </div>
    </section>
  );
};

export default Banner;

import Polygon from "../assets/polygon.png";
import Vector from "../assets/vector-wave.png";
import { FaUser } from "react-icons/fa";

const bgStyle = {
  backgroundImage: `url(${Polygon})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  width: "100%",
  height: "100%",
  position: "relative",
};

const About = ({ HandlePopup }) => {
  return (
    <>
      <div style={bgStyle} className="py-14">
        <div className="container min-h-[500px] z-10 relative">
          <h1
            data-aos="fade"
            className="pt-20 tracking-wider text-4xl text-white font-semibold text-center"
          >
            About Us
          </h1>

          {/* Card section  */}
          <div
            data-aos="fade"
            data-aos-delay="300"
            className="bg-white/80 p-10 my-10"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
            ullam et excepturi non odio natus laboriosam dolores cum eius
            accusantium nulla deserunt similique veniam veritatis dolor,
            temporibus consequatur accusamus rerum quidem ducimus perspiciatis
            deleniti. Blanditiis fuga ratione qui et facilis nam tenetur eius,
            aliquid numquam quaerat libero soluta, repudiandae dignissimos ab,
            obcaecati aut similique nemo hic? Et impedit in nesciunt ratione, ut
            sed deserunt deleniti maiores necessitatibus architecto. Fuga odio a
            consequuntur, ab minima nihil in consequatur ex magnam magni
            molestiae quaerat perferendis sunt ea placeat maiores aliquid dolor
            nesciunt? Sunt cumque consectetur quaerat, placeat itaque
            exercitationem! Esse, dolorum aliquam.
            <div className="pt-10  flex justify-center">
              <button
                onClick={HandlePopup}
                className="flex justify-center items-center gap-2 bg-primary text-white h-[40px] px-5 py-2 text-xl hover:scale-105 duration-300"
              >
                <FaUser />
                My Account
              </button>
            </div>
          </div>
        </div>

        {/* Wave vector  */}
        <div className="absolute top-0 left-0 w-full">
          <img src={Vector} alt="" className="mx-auto w-full" />
        </div>
      </div>
    </>
  );
};

export default About;

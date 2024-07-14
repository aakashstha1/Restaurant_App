import { FaArrowRight } from "react-icons/fa";

const PrimaryButton = () => {
  return (
    <div className="flex items-center group">
      <button className="bg-primary text-white h-[40px] px-3 py-2">
        Choose Your Meal
      </button>
      <FaArrowRight className="bg-primaryDark inline-block group-hover:translate-x-2 duration-200 h-[40px] w-[40px] text-white p-2 text-base cursor-pointer" />
    </div>
  );
};

export default PrimaryButton;

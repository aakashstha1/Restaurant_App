import { IoCloseOutline } from "react-icons/io5";
import { FaFacebook, FaGoogle } from "react-icons/fa";

const Popup = ({ showPopup, setShowPopup }) => {
  return (
    <>
      {showPopup && (
        <div>
          <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
            <div className="top-1/2 left-1/2 fixed -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white rounded-md w-[300px] duration-300">
              <div className="flex justify-end">
                <IoCloseOutline
                  className="text-2xl cursor-pointer"
                  onClick={() => setShowPopup(false)}
                />
              </div>
              {/* header section  */}
              <div className="flex justify-center items-center mb-4">
                <h1 className="text-2xl font-bold text-dark flex">Login</h1>
              </div>
              {/* Login form  */}
              <input
                type="email"
                placeholder="Enter Email"
                required
                className="w-full border border-gray-300 dark:border-gray-500 px-2 py-1 mb-4 rounded-md"
              />

              <input
                type="password"
                placeholder="Enter password"
                required
                className="w-full border border-gray-300 dark:border-gray-500 px-2 py-1 mb-4 rounded-md"
              />

              {/* Login button  */}
              <div>
                <button className="bg-primary text-white font-semibold w-full p-2 rounded-md">
                  Login
                </button>
              </div>

              {/* social login  */}
              <div className="mt-4">
                <p className="text-center"> or login with</p>
              </div>
              <div className="flex justify-center gap-4 mt-2">
                <FaFacebook className="text-3xl hover:text-blue-500 duration-200" />
                <FaGoogle className="text-3xl hover:text-primary duration-200" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;

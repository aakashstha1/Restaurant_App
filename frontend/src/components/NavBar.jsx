import { FaCaretDown, FaUser } from "react-icons/fa";

const NavLinks = [
  { id: 1, name: "Home", link: "/#" },
  { id: 2, name: "About", link: "/#" },
  { id: 3, name: "Contact", link: "/#" },
];

const DropdownLinks = [
  { id: 1, name: "Vegetables", link: "/#" },
  { id: 2, name: "Fruits", link: "/#" },
  { id: 3, name: "Grains", link: "/#" },
];

const NavBar = () => {
  return (
    <div className="bg-white shadow-md">
      <div className="container flex justify-between py-4 sm:py-3">
        {/* Logo section */}
        <div className="font-bold text-3xl">Logo</div>

        {/* Nav link section */}
        <div>
          <ul className="flex items-center gap-10">
            {NavLinks.map(({ id, name, link }) => (
              <li key={id}>
                <a
                  href={link}
                  className="inline-block text-xl font-semibold hover:text-primary"
                >
                  {name}
                </a>
              </li>
            ))}

            {/* Dropdown Menu */}
            <li className="cursor-pointer group ">
              <a
                href="/#"
                className="inline-block text-xl font-semibold hover:text-primary"
              >
                <div className="flex items-center gap-[2px] py-2 ">
                  Categories
                  <FaCaretDown className="group-hover:rotate-180 duration-300" />
                </div>
              </a>

              {/* Dropdown section */}
              <div className="absolute z-[9999] hidden group-hover:block w-[120px] bg-white text-black shadow-md">
                <ul>
                  {DropdownLinks.map(({ id, name, link }) => (
                    <li key={id}>
                      <a
                        href={link}
                        className="block text-md w-full rounded-md px-4 py-2 hover:bg-primary/20"
                      >
                        {name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            {/* Login button */}
            <li>
              <button className="flex justify-center items-center gap-2 bg-secondary text-white h-[40px] px-5 py-2 text-xl hover:scale-105 duration-300">
                <FaUser />
                My Account
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

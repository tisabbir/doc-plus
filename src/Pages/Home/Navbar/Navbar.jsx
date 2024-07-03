import img from '../../../assets/logo.png';
import { MdArrowOutward } from "react-icons/md";
const Navbar = () => {

    const nav = <>
    <li> <a href="#"> Home </a> </li>
    <li> <a href="#"> Services </a> </li>
    <li> <a href="#"> Blog </a> </li>
    <li> <a href="#"> About Us </a> </li>
    </>
  return (
    <div className='mt-6 max-w-6xl mx-auto'>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {
                nav
              }
            </ul>
          </div>
          <img src={img} />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {
                nav
            }
          </ul>
        </div>
        <div className="navbar-end">
          <button className="btn border border-black rounded-xl">Appointment <MdArrowOutward /></button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

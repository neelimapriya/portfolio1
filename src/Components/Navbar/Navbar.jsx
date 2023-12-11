import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav
  className="block w-full max-w-screen-xl px-6 py-3 mx-auto text-black  border shadow-md rounded-xl  bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200">
  <div className="flex items-center justify-between md:justify-around text-blue-gray-900">
    <Link to='/' className="justify-start">Nelima Sultana</Link>
    <div className="hidden lg:block">
      <ul className="flex flex-col gap-2 my-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        <li className="block p-1 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
        <Link to='/about'>About</Link>
        </li>
        <li className="block p-1 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
          <Link to='/resume'>Resume</Link>
        </li>
        <li className="block p-1 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
          <Link to='/skill'>Skill</Link>
        </li>
        <li className="block p-1 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
         <Link to='/project'>Project</Link>
        </li>
        <li className="block p-1 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
         <Link to='/contact'>Contact</Link>
        </li>
      </ul>
    </div>
    <button
      className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
      type="button">
      <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"
          aria-hidden="true" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
        </svg>
      </span>
    </button>
  </div>
</nav>
        </div>
    );
};

export default Navbar;
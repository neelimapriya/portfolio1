import { Link } from "react-router-dom";
import {  FaGithub,  FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className=" w-full bg-black">
    <nav className="navbar flex text-center justify-around   mx-auto">
      <Link to='/'><h2 className="text-xl font-serif font-semibold text-slate-100">Nelima Sultana</h2></Link>
    
 <ul className="flex gap-5">
 <li>
                <a href="https://www.linkedin.com/in/nelima-sultana-7b4280298">
                  <FaLinkedin className="text-2xl text-slate-100"></FaLinkedin>
                </a>
              </li>
              <li>
                <a href="https://github.com/neelimapriya">
                  <FaGithub className="text-2xl text-slate-100"></FaGithub>
                </a>
              </li>
              <li>
                <Link to="/contact">
                  <IoMail className="text-2xl text-slate-100"></IoMail>{" "}
                </Link>
              </li>
 </ul>
    </nav>
    </div>
  );
};

export default Navbar;

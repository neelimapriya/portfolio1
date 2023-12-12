import Marquee from "react-fast-marquee";
import {
  FaCss3,
  FaGithub,
  FaHtml5,
  FaNodeJs,
  FaReact,
  FaStripeS,
} from "react-icons/fa";
import { SiExpress, SiFirebase, SiJavascript, SiMongodb } from "react-icons/si";

const Skill = () => {
  return (
    <div className="flex flex-col text-center text-slate-100 bg-black py-5 font-serif">
      <h2 className="text-3xl font-semibold">My Skill</h2>
      <h3 className="text-xl font-serif">Things I Love!</h3>
      <div className="md:w-2/3 md:mx-auto">
        <Marquee
          className=" text-slate-100  mt-2"
          pauseOnHover={true}
          speed={50}
        >
          <div className="flex flex-col justify-center items-center pr-6 ">
            <FaHtml5 size={50} className="hover:text-orange-600" />
            <h2>HTML</h2>
          </div>
          <div className="flex flex-col justify-center items-center pr-6 ">
            <FaCss3 size={50} className="hover:text-blue-500" />
            <h2>CSS</h2>
          </div>

          <div className="flex flex-col justify-center items-center pr-6 ">
            <SiJavascript size={50} className="hover:text-yellow-500" />

            <h2>JavaScript</h2>
          </div>

          <div className="flex flex-col justify-center items-center pr-6 ">
            <FaReact size={50} className="hover:text-blue-500" />

            <h2>React</h2>
          </div>
          <div className="flex flex-col justify-center items-center pr-6 ">
            <FaNodeJs size={50} className="hover:text-green-600" />

            <h2>Node.Js</h2>
          </div>
          <div className="flex flex-col justify-center items-center pr-6 ">
            <SiExpress size={50} className="hover:bg-white hover:text-black" />

            <h2>Express.js</h2>
          </div>

          <div className="flex flex-col justify-center items-center pr-6 ">
            <SiFirebase size={50} className="hover:text-orange-400" />

            <h2>Firebase</h2>
          </div>
          <div className="flex flex-col justify-center items-center pr-6 ">
            <FaGithub size={50} className="hover:text-slate-600" />

            <h2>GitHub</h2>
          </div>
          <div className="flex flex-col justify-center items-center pr-6 ">
            <SiMongodb size={50} className="hover:text-green-600" />

            <h2>Mongodb</h2>
          </div>
          <div className="flex flex-col justify-center items-center pr-6 ">
            <FaStripeS size={50} className="hover:text-violet-700" />

            <h2>Stripe</h2>
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Skill;

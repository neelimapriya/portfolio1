import image from "../../../assets/856dba19-7eb9-407f-87c4-f3cf79d994b4 (2).jpg";

import { Link } from "react-router-dom";
const Banner = () => {

  
  return (
    <div
    className="bg-fixed min-h-screen hero w-full"  style={{
        backgroundImage:
          "url(https://raw.githubusercontent.com/neelimapriya/portfolio1/main/src/assets/abstract-digital-grid-black-background.jpg)",
      }}
    
    >
      <div className="flex flex-col  md:flex-row justify-center items-center max-w-6xl hero-content" >

       <div className=" flex flex-col justify-center items-center text-slate-200" data-aos="fade-right"
          data-aos-duration="2000">
       <img
          className="w-32 h-32 md:w-72 md:h-72 rounded-full md:rounded-lg"
          src={image}
          alt=""
        />
        <h2
          className="text-2xl font-semibold font-serif my-2"
          
        >
          Meet Nelima Sultana
        </h2>
       </div>
       
       <div className="flex flex-col justify-center items-center text-center text-slate-300 md:w-2/3 mx-auto px-3" data-aos="fade-left"
          data-aos-duration="2000">
       
        <h2 className="text-3xl bg-gradient-to-r from-green-500 to-blue-500 rounded-lg my-3 p-2 font-serif">About me</h2>
        <h4
          className="text-lg md:text-xl font-serif font-semibold "
          
        >
          A gentle artisan in the world of <span className="text-blue-400">Frontend development</span>, delicately
          weaving code into beautiful digital tapestries that enchant the user`s
          experience with a touch of grace.
        </h4>
        <p className="font-serif "  >
          A Frontend Developer with a passion for crafting delightful digital
          interfaces. Skilled in the artistry of <span className="text-orange-500"> HTML</span> , <span className="text-violet-500">CSS</span> , <span className="text-yellow-500">JavaScript</span> and I
          have a gentle touch with <span className="text-blue-500">React</span> . My journey includes collaborative
          projects that aim to create user-friendly and visually appealing web
          experiences. I am eager to contribute my skills to a nurturing
          development environment where continuous learning is valued. Committed
          to continuous learning and staying updated with the latest industry
          trends.
        </p>
       <div className="flex gap-3">
       <div className="mt-3 py-2 px-4 border border-yellow-600 rounded-full text-white  hover:bg-gradient-to-r from-green-500 to-blue-500">
        <a  href="/public/neelimas_resume (2).pdf" download>
            Download Resume
        </a>
      </div>
      <Link to='/contact' className="mt-3 py-2 px-4 border border-yellow-600 rounded-full text-white  hover:bg-gradient-to-r from-green-500 to-blue-500">Contact me</Link>
       </div>
       </div>
      </div>
   
    </div>
  );
};

export default Banner;

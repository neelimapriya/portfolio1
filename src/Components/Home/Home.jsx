import About from "./About/About";
import Banner from "./Banner/Banner";
import Contact from "./Contact/Contact";
import Project from "./Project/Project";
import Resume from "./Resume/Resume";
import Skill from "./Skill/Skill";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Resume></Resume>
            <Skill></Skill>
            <Project></Project>
            <Contact></Contact>
        </div>
    );
};

export default Home;
import AboutData from "../../../assets/data/about.json";
import Dropdown from "../../../Components/Dropdown/Dropdown";
import Banner from "../../../Components/Banner/Banner";
import AboutBanner from "../../../assets/image/bkg/mountain.jpeg";

const About = () => {
    const aboutData = AboutData;

    return (
            <section className="About">
                <Banner image={ AboutBanner } alt="Photo de montagne" title=""/>

                <div className="about_block">
                    <div className="dropdown_block">
                        {aboutData.map((element) => (
                            <Dropdown key={element.id} title={element.title} content={[element.content]} />
                        ))}
                    </div>
                </div>
            </section>           
    );
};

export default About;
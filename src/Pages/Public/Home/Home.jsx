import Banner from "@/Components/Banner/Banner";
import HomeBanner from "@/Assets/image/bkg/cliff.jpeg";
import Card from "@/Components/Card/Card";

import { NavLink } from 'react-router-dom';

import logementservice from '@/_Services/Service.logement.jsx';

const Home = () => {

    return (
    
        <section className="home">
            <Banner image={ HomeBanner } alt="Photo d'une falaise" title="Chez vous, partout et ailleurs"/>

            <ul>
                {
                    logementservice.GetAllLogement().map((logement) => 
                    <NavLink key={logement.id} to={"/logement/" + logement.id + "/#"}>
                        <Card />
                    </NavLink>
                    )
                }
            </ul>

        </section>
    )
}

export default Home;
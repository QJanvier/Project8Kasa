import Banner from "@/Components/Banner/Banner";
import HomeBanner from "@/assets/image/bkg/cliff.jpeg";
import Card from "@/Components/Card/Card";

import { NavLink } from 'react-router-dom';

import logementservice from '@/_Services/Service.logement.jsx'; //use this to add property

const Home = () => {

    return (
    
        <section className="home">
            <Banner image={ HomeBanner } alt="Photo d'une falaise" title="Chez vous, partout et ailleurs"/>

            <ul className="property_list">
                {
                    logementservice.GetAllLogement().map((logement) => 
                    <NavLink key={logement.id} to={"/logement/" + logement.id + "/#"}>
                        <Card property={logement} />
                    </NavLink> //Le property={logement recupere les infos de ton service}
                    )
                }
            </ul>

        </section>
    )
}

export default Home;
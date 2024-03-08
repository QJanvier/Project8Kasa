import Banner from "../components/Banner"
import HomeBanner from "../../src/assets/image/bkg/cliff.jpeg"


export default function Home() {
    return (
        <>
        <main>
            <section className="home-banner banner">
                <Banner 
                className="banner-img"
                image={ HomeBanner }
                alt="Photo d'une falaise"
                title1="Chez vous,"
                title2="partout et ailleurs"
                />
            </section>
        </main>
        </>
    )
}



// proptypes ?
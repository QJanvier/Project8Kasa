import PropTypes from 'prop-types';



const Banner = ({ image, alt, title }) => {

    return (
        <div className="container_banner">
            <div className="banner">
                <img src={ image } alt={ alt } className="banner_image" />
                <h1 className="banner_text">
                    <span>{ title }</span>
                </h1>
            </div>
        </div>
    );
}

export default Banner;

Banner.propTypes = {
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}
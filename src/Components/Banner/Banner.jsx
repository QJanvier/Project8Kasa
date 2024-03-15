import PropTypes from 'prop-types';

Banner.propTypes = {
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}

export default function Banner({ image, alt, title }) {



    return (
        <div className="container-banner">
            <div className="banner">
                <img src={ image } alt={ alt } className="banner-image" />
                <h1 className="banner-text">
                    <span>{ title }</span>
                </h1>
            </div>
        </div>
    );
}


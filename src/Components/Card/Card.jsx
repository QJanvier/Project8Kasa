import PropTypes from 'prop-types';
import  { Link } from 'react-router-dom';

const Card = ( {property} ) => {
    return (
        <li className="card">
            <Link to={`../Pages/Property/${property.id}`} title={property.title}>
                <article className='card_article'>
                    <img src={property.cover} alt={property.title} className="card_image" />
                        <h2 className="card_title">
                            {property.title}
                        </h2>
                        <p className="card_location">
                            {property.location}
                        </p>
                </article>
            </Link>
        </li>
    )
}

export default Card;

Card.propTypes = {
    property: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        cover: PropTypes.string.isRequired,
        pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
        description: PropTypes.string.isRequired,
        host: PropTypes.shape({
            name: PropTypes.string.isRequired,
            picture: PropTypes.string.isRequired,
        }).isRequired,
        rating: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        equipements: PropTypes.arrayOf(PropTypes.string).isRequired,
        tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
};
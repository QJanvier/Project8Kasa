import activeRating from "../../Assets/image/stars/star-active.png";
import inactiveRating from "../../Assets/image/stars/star-inactive.png";
import PropTypes from 'prop-types';

const Rating = ({starRating}) => {
    const maxRating = 5;
    const star = [];
    for (let i = 1; i <= maxRating; i++) {
        star.push(
            <img key={i} src={i <= starRating ? activeRating : inactiveRating} alt={i <= starRating ? "Active rating" : "Inactive rating"}/>
        )
    }

    return (
        <div className="rating">{star}</div>
    );
}

export default Rating;

Rating.propTypes = {
    starRating : PropTypes.string.isRequired
};
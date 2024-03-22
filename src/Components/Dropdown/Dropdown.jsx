import { useState } from "react";
import Arrow from "../../Assets/image/arrow/arrow_back.png";
import PropTypes from "prop-types";


const Dropdown = ({ title, content }) => {
    const [isContentVisible, setContentVisible] = useState(false);

    const toggleContent = () => {
        setContentVisible(!isContentVisible);
    };
    const contentBlockClass = `dropdown_content ${isContentVisible ? "lineDown" : ""}`;
    const arrowIconClass = `arrow-icon ${isContentVisible ? "open" : ""}`;

    return (
        <div className="dropdown expend_dropdown">
            <button className="dropdown_header" onClick={toggleContent}>
                {title}
                <img src={Arrow} alt="Icône" className={arrowIconClass} />
            </button>
            {isContentVisible && (
                <div id="contentBlock" className={contentBlockClass}>
                    <ul>
                    {content.map((value) => <li key={value}>{value}</li>)}                    
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Dropdown;

Dropdown.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.arrayOf(PropTypes.string).isRequired,
};
import { useParams, Navigate } from "react-router-dom";
import propertyData from '../../../assets/data/logements.json';
import SlideShow from '../../../Components/Slideshow/Slideshow';
import Rating from '../../../Components/Rating/Rating';
import Dropdown from "../../../Components/Dropdown/Dropdown";


const Property = () => {
    const { id } = useParams();
    const property = propertyData.find((item) => item.id === id);

    return (
        <div className="site_container">
            {!property && <Navigate to="Error404" replace={true} />}
            {property && (
                <>
                    <SlideShow pictures={property.pictures} title={property.title} />

                    <div id="details_block">
                        <div className="property_block">
                            <div>
                                <h1 className="property_title">{property.title}</h1>
                            </div>
                            <div className="property_location">{property.location}</div>
                            <div className="property_tags">
                            <div className="property_tags_details">
                                {property.tags.map((tag, index) =>(
                                    <div className="tag" key={index}>
                                        <p>{tag}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        </div>

                        
                        <div className="property_owner">
                            <div className="property_owner_details">
                                <div className="property_owner_name">
                                    {property.host.name}
                                </div>
                                <img src={property.host.picture} alt={property.host.name} className="property_owner_pp" />
                            </div>                            
                            <div className="property_tags_rating">
                                <Rating starRating={property.rating} />
                            </div>
                        </div>     

                        <div className="dropdown_block_property">                            
                            <Dropdown key={`dropdown-${property.id}-description`} title="Description" content={[property.description]} className="dropdown_description" />

                            <Dropdown key={`dropdown-${property.id}-equipements`} title="Équipements" content={property.equipments} className="dropdown_equipements" />
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default Property;
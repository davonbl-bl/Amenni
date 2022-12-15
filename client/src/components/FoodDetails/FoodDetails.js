import './FoodDetails.scss';
import axios from 'axios';
import NutritionFacts from '../NutritionFacts/NutritionFacts'


function FoodDetails({food_name, image}) {
  return (
    <>
    <div className= 'food__items'>
        <div className = 'food__image'>
            <img className="food__photo" src={image} />
        </div>

        <div className="food__title">
            <p className="food__text">{food_name}</p>
        </div>
    </div>

    </>
  );
}

export default FoodDetails;

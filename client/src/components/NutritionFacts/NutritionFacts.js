import './NutritionFacts.scss';
import {Link} from "react-router-dom"; 
import axios from 'axios';
import {useParams} from 'react';


function NutritionFacts({name, image, saturated_fat, cholesterol,sodium, potassium, total_carbohydrates,
    dietary_fiber, sugar, protein }) {

        // const zero = $0; 


    return (
    <div className= 'facts'>
        <div className = "commentPage__return">
            <p className= 'commentPage__return-text'> 
                <Link to ="/search">Return Page </Link>
            </p>
        </div>
        <div className= 'facts__info'>
        <div className ='facts__text facts__list'>
                <p className="facts__name">{name} </p>
                <img className="food__photo" src={image} />
            </div>
            <div className ='facts__fat facts__list'>
                <p className = "facts__text">Saturated Fat</p>
                <p className="facts__fat-fact">{saturated_fat} </p>
            </div>

            <div className="facts__cholesterol facts__list">
                <p className = "facts__text">Cholesterol</p>
                <p className="facts__cholesterol-detail">{cholesterol}</p>
            </div>
            <div className="facts__sodium facts__list">
                <p className = "facts__text">Sodium</p>
                <p className="facts__sodium-detail">{sodium}</p>
            </div>
            <div className="facts__potassium facts__list">
                <p className = "facts__text">Potassium</p>
                <p className="facts__potassium-detail">{potassium}</p>
            </div>
            <div className="total_carbohydrates facts__list">
                <p className = "facts__text">Total Carbohydrates</p>
                <p className="food__total_carbohydrates-fact">{total_carbohydrates}</p>
            </div>
            <div className="total_fiber facts__list">
                <p className = "facts__text">Dietary Fiber</p>
                <p className="food__total_carbohydrates-fact">{dietary_fiber}</p>
            </div> 
            <div className="total_sugar facts__list">
                <p className = "facts__text">Sugar</p>
                <p className="food__total_carbohydrates-fact">{sugar}</p>
            </div>
         </div>


     </div>
  )
}

export default NutritionFacts;

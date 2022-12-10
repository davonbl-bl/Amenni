import './NutritionFacts.scss';
import axios from 'axios';
import {useParams} from 'react';


function NutritionFacts({saturated_fat, cholesterol,sodium, total_carbohydrates, vitamin_a, calcium  }) {

    //  {saturated_fat, cholesterol, sodium, total_carbohydrates }
    let totalFat = saturated_fat;

    return (
        // <div>
        //     <p>testing</p>
        // </div>
    <div classNme= 'food__items'>

         <div className = 'food__fat'>
             <p className>Saturated Fat</p>
             <p className="food__fat-fact">{saturated_fat} </p>
         </div>

         <div className="food__cholesterol">
             <p className>Cholesterol</p>
             <p className="food__cholesterol-detail">{cholesterol}</p>
         </div>
         <div className="food__sodium">
             <p className>Sodium</p>
             <p className="food__sodium-detail">{sodium}</p>
         </div>
         <div className="total_carbohydrates">
             <p className>Total Carbohydrates</p>
             <p className="food__total_carbohydrates-fact">{total_carbohydrates}</p>
         </div>
         <div className="total_vitamin-a">
             <p className>Vitamin A</p>
             <p className="food__total_carbohydrates-fact">{vitamin_a}</p>
         </div>
         <div className="total_calcium">
             <p className>Calcium</p>
             <p className="food__total_carbohydrates-fact">{calcium}</p>
         </div>


     </div>
  )
}

export default NutritionFacts;

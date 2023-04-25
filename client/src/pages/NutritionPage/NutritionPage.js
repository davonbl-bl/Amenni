import './NutritionPage.scss';
import axios from 'axios';
import { useParams, Link , NavLink } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import NutritionFacts from '../../components/NutritionFacts/NutritionFacts';


function NutritionPage() {

    const [nutrients, setNutrients] = useState([])
    const { name } = useParams()

    let postEndPoint = 'https://trackapi.nutritionix.com/v2/natural/nutrients';
    let myApiKey = '4c42a2e66a39c03a961bb0010312e00c';
    let myId = '8dac521d';


    const nuritionValue = () => {

        const params = { query: `${name} vitamin a vitamin c vitamin a` }


        axios.post(postEndPoint, params,
            {
                headers: {
                    'x-app-id': myId,
                    "x-app-key": myApiKey
                }
            })
            .then((res) => {
                console.log(res.data)
                setNutrients(res.data.foods)

                console.log(res.data.foods[0])

            }).catch((error) => {
                console.log(error)
            })
    }

    useEffect(()=> {
        nuritionValue()
    },[name])

    return (
        // fix this issue later on 
        <div classNme='food__items'>

            {
                nutrients.map((ele, index) => {
                    return (
                        <div>
                                <NutritionFacts
                                    key={index}
                                    name = {ele.food_name}
                                    image={ele.photo.thumb}
                                    calories = {ele.nf_calories}
                                    saturated_fat={ele.nf_saturated_fat}
                                    cholesterol={ele.nf_cholesterol}
                                    sodium={ele.nf_sodium}
                                    potassium= {ele.nf_potassium}
                                    total_carbohydrates={ele.nf_total_carbohydrate}
                                    dietary_fiber = {ele.nf_dietary_fiber}
                                    sugar= {ele.nf_sugars}
                                    protein = {ele.nf_protein}
                                    vitamin_a = {ele.full_nutrients[30].attr_id}
                                    calcium = {ele.nf_calcium_mg}
                                />  
                            
                        </div>
                        
                    )
                })
            }

        </div>
    );
}

export default NutritionPage;

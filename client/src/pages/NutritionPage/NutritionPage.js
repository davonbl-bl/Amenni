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

        const params = { query: name }


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
            }).catch((error) => {
                console.log(error)
            })
    }

    useEffect(()=> {
        nuritionValue()
    },[name])

    return (
        <div classNme='food__items'>
            {name}
            {/* <p>{food_name}</p> */}

            {
                nutrients.map((ele, index) => {
                    return (
                    //    <NutritionFacts/>
                        <div>

                            {/* <Link to={`/${ele.name}`}><Link/> */}
                                <NutritionFacts
                                    key={index}
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

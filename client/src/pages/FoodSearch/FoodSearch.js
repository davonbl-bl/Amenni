import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import {useState} from 'react';
import '../FoodSearch/FoodSearch.scss';



function FoodSearch() {

    //Comment out section
    // let myKeys = {
    //     "x-app-id": myApiKey,
    //     'x-app-key': myId
    // }
    // let getEndPoint='https://trackapi.nutritionix.com/v2/search/instant' 
    // this would be used to search different food items
    // let newGetEndPoint = `https://trackapi.nutritionix.com/v2/search/instant?query=${item}`;
    // let testEndPoint= 'https://trackapi.nutritionix.com/v2/search/instant?query=apple';
    // let testEndPoint = `https://trackapi.nutritionix.com/v2/search/instant?query=`;
    //I want to connect the testEndPoint with the postEndPoint in order to get the nutriton facts
    // const params = { query: `${newItem}` }
    
    const {tag_id} = useParams()
    const [details, setDetails]= useState([])

    let myApiKey = '4c42a2e66a39c03a961bb0010312e00c';
    let myId = '8dac521d';

    let postEndPoint = 'https://trackapi.nutritionix.com/v2/natural/nutrients';

    const foodItems = (search) => {
        axios.get(`https://trackapi.nutritionix.com/v2/search/instant?query=${search}` ,
            {
                headers: {
                    'x-app-id': myId,
                    "x-app-key": myApiKey
                }
            })
            .then((res) => {
                // let foodData= res.data;
                // console.log(foodData)
                let commonFoodData = res.data.common;
                console.log(commonFoodData)
                // displayData=commonFoodData; 
                setDetails(commonFoodData)

            }).catch((error) => {
                console.log(error)
            })
    }

    const nuritionValue = (search) => {

        const params = { query: search }

        axios.post(postEndPoint, params,
            {
                headers: {
                    'x-app-id': myId,
                    "x-app-key": myApiKey
                }
            })
            .then((res) => {
                console.log(res)
            }).catch((error) => {
                console.log(error)
            })
    }

    // const handleClick = (e) => {
    //     e.preventDefault();

    //     console.log("it works")
    //     console.log("e.currentTarget")
    // }

    return(
        <div className="food__container">
            {
                details.map((ele, index)=>{
                    return(
                        <Link to = {`/${ele.name}`}
                            key={index}
                            saturated_fat={ele.nf_saturated_fat}
                            cholesterol={ele.nf_cholesterol}
                            sodium = {ele.nf.sodium}
                            total_carbohydrates = {ele.nf_total_carbohydrate}
                        />
                    )
                }) 
            }
        </div>

    )

}


export default FoodSearch ; 
import axios from 'axios';
import './SearchPage.scss';
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FoodDetails from '../../components/FoodDetails/FoodDetails';
import FoodImg from '../../Assets/images/flat-healthy-food-icons.jpg'
import Comments from '../../components/Comments/Comments';



function SearchPage() {


    const [toEat, setToEat]= useState([])

    let myApiKey = '4c42a2e66a39c03a961bb0010312e00c';
    let myId = '8dac521d';

    let postEndPoint = 'https://trackapi.nutritionix.com/v2/natural/nutrients';

    const foodItems = (search) => {
        axios.get(`https://trackapi.nutritionix.com/v2/search/instant?query=${search}`,
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
                setToEat(commonFoodData)

            }).catch((error) => {
                console.log(error)
            })
    }


    // const nuritionValue = (search) => {

    //     const params = { query: search }

    //     axios.post(postEndPoint, params,
    //         {
    //             headers: {
    //                 'x-app-id': myId,
    //                 "x-app-key": myApiKey
    //             }
    //         })
    //         .then((res) => {
    //             console.log(res.data.foods[0])
    //         }).catch((error) => {
    //             console.log(error)
    //         })
    // }


    const searchFoodItems = (e) => {
        e.preventDefault();
        let search = e.target.search.value
        foodItems(search)
        // nuritionValue(search)
    }

    return (

        <div className="food">
            {/* <Link to = "/createcomment">Click Here</Link> */}
            {/* <Comments/> */}
            
            <form className="food__form" onSubmit={searchFoodItems}>
                <h1 className="food__title">Search</h1>
                <img className="food__photo" src={FoodImg} />
                <input className="food__input" id="search" type="text" placeholder="Search Food Database" />
                <button className="food__btn" type="submit">Search</button>
            </form>

            <div className="food__container">
                {
                    toEat.map((ele, index) => {
                        return (
                            <Link to={`/${ele.food_name}`}>
                                <FoodDetails
                                    key={index}
                                    food_name={ele.food_name}
                                    image={ele.photo.thumb}
                                />
                            </Link>
                        )
                    })

                }

            </div>



        </div>

    )
}


export default SearchPage; 
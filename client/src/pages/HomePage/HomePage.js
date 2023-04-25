import './HomePage.scss';
import masonJars from '../../Assets/images/pexels-ella-olsson-1640767.jpg';
import {Link} from 'react-router-dom'
function HomePage() {
    return (
        <div className="info">
            <div className="info__body">
                <div className="info__body-left">
                    <p className="info__title">
                        Amenni
                    </p>
                    <p className ='info__quote'>
                        {/* "to be at balance with one's self: physically and mentally." */}
                        "In health, to be at balance with one's self."
                    </p>
                    <p className="info__brief-text">
                        Register <Link to ="/register">here</Link> and continue your journey towards wellness with Amenni and its community. 

                    </p>
                </div>
                <div className="info__body-right">
                    <img className="info__stock-photo" src={masonJars} />
                </div>
            </div>
            <div className="info__body-two">
                <p className="info__text">
                    Amenni is an application where you can keep track of and understand
                    what you are eating. Thanks to Nutritionnix,
                    we provide access to nutritional data on over 10,000 common food items.
                    With our nutrition search engine, a personalized food diary, and upcoming
                    interactive tools it is our objective to assist users in bridging the
                    gap between health and nutrition.

                </p>

            {/* being at balance with one'self: physically and mentally */}
            </div>
        </div>
    )
}

export default HomePage;
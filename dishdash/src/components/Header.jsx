
import { Link } from 'react-router-dom';
import '../App.css';
import '../css/mystyles.css';
// import '../css/recipes.css';
import MainImage from '../img/korean-cuisine-travel-to-korea-food-dishes-menu-traditional-meals-vector-kimchi-soup-rolls-hobak-juk-bibimbap-jajangmyeon-171772455.jpg';
import Logo from '../img/lc.png';

function Header() {
    return (
        <section id="Home">
            <nav>
                <div className="logo">
                    <img src={Logo} alt="Dish Dash" />
                </div>

                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/recipes">Recipes</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>

            </nav>

            <div className="main">

                <div className="men_text">
                    <h1>Learn<span>Korean Food</span><br/>in Easy way</h1>
                </div>

                <div className="main_image">
                    <img src={MainImage} />
                </div>
            </div>

            <p>
            Welcome to DishDash, your ultimate destination for authentic Korean cuisine! At DishDash, we bring the rich flavors and vibrant culture of Korea to your kitchen. Whether you're a seasoned chef or a culinary novice, our easy-to-follow recipes, expert tips, and engaging content will inspire you to create delicious Korean dishes. Join our community of food enthusiasts and embark on a delightful culinary journey with DishDash, where every dish tells a story.

            </p>

        </section >
    );
}

export default Header;

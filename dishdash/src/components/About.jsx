
import '../App.css';
import '../css/mystyles.css';
// import '../css/recipes.css';
import Image from '../img/logo-cat222.png';

function About() {
    return (
    <div className="about" id="About">
        <div className="about_main">

            <div className="image">
                <img src={Image}/>
            </div>

            <div className="about_text">
                <h1><span>About</span> the page</h1>
                <h3>Annyeong!</h3>
                <p>
                DishDash is a passion-driven platform dedicated to sharing the rich and diverse culinary traditions of Korea. Founded by a team of food enthusiasts and culinary experts, our mission is to make Korean cooking accessible and enjoyable for everyone</p>
            </div>

        </div>
    </div>

    );
}

export default About;

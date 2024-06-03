

import '../App.css';
import '../css/mystyles.css';
// import '../css/recipes.css';
import MenuIMG3 from '../img/bibimbap.jfif';
import MenuIMG4 from '../img/kimchi-jjigae-stew.webp';
import MenuIMG2 from '../img/kimchi.jpg';
import MenuIMG from '../img/tteokbokki.jfif';




function Menu() {
    return (
        <div className="menu" id="Menu">
            <h1><span>RECIPES</span></h1>

            <div className="menu_box">
                <div className="menu_card">

                    <div className="menu_image">
                        <img src={MenuIMG} /> 
                    </div>

                    <div className="menu_info">
                        <h2>Tteokbokki</h2>
                        
                        <p>
                        Dive into the bold flavors of Tteokbokki, a beloved Korean street food. These chewy rice cakes are drenched in a fiery gochujang sauce, mingled with fish cakes and crisp vegetables for a truly spicy kick.
                        </p>

                    </div>

                </div>

                <div className="menu_card">

                    <div className="menu_image">
                        <img src={MenuIMG2} />
                    </div>

                    <div className="menu_info">
                        <h2>Kimchi</h2>
                        <p>Experience the tangy crunch of Kimchi, Korea's national dish. This iconic fermented delicacy is a symphony of seasoned vegetables like napa cabbage and radish, bursting with spicy and sour notes that awaken the palate.
                        </p>

                    </div>

                </div>

                <div className="menu_card">

                    <div className="menu_image">
                        <img src={MenuIMG3}/>
                    </div>

                    <div className="menu_info">
                        <h2>Bibimbap</h2>
                        <p>Savor the harmony of Bibimbap, a vibrant bowl of nourishment. Warm white rice forms the foundation, crowned with an array of sautéed vegetables, tender slices of beef, and a glistening fried egg, all to be stirred with a dollop of savory gochujang sauce.
                        </p>
                    </div>

                </div>

                <div className="menu_card">

                    <div className="menu_image">
                        <img src={MenuIMG4} />
                    </div>

                    <div className="menu_info">
                        <h2>Kimchi Stew</h2>
                        <p>Warm your soul with Kimchi Stew, a comforting Korean classic. This hearty stew bubbles with the robust flavors of kimchi, tofu, and pork or tuna, simmered together in a broth that's both spicy and soothingly sour.
                        </p>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Menu;

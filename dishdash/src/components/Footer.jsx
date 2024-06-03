

import '../App.css';
import '../css/mystyles.css';
// import '../css/recipes.css';


function Footer() {
    return (
    <footer>
        <div class="footer_main" id="Footer">

            <div class="footer_tag">
                <h2>Quick Link</h2>
                <p>Home</p>
                <p>Recipes</p>
                <p>About Us</p>
                <p>Contact</p>
            </div>

            <div class="footer_tag">
                <h2>Contact</h2>
                <p>+63 905 098 1370</p>
                <p>+63 975 626 9604</p>
                <p>presciouspajo19@gmail.com</p>
                <p>butlay.hazelkate@gmail.com</p>
            </div>
            
            <div class="footer_tag">
                <h2>Follows</h2>
                <a href="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook-f"></i></a>
                <a href="https://twitter.com/" target="_blank"><i class="fab fa-twitter"></i></a>
                <a href="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram"></i></a>
            </div>            

        </div>

        <p class="end">Design by <span><i class="fa-solid fa-face-grin"></i> Dish Dash Web Developer Team.</span> </p>

    </footer>

    );
}

export default Footer;

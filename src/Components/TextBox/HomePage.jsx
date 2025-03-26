import React from 'react';
import "./Homepage.css";

const HomePage = () => {
    return (
        <div>
            {/* <nav>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#exhibit">Exhibit</a></li>
            <li></li>
        </ul>
    </nav> */}
    <div className='homen'>
    <header id="home">
        <h1>Translate Titans</h1>
        <p class="tagline">Translate Like a Pro</p>
    </header>
    </div>
    <div className='aboutn'>
    <section class="about" id="about">
        <div class="about-content">
            <div>
                <img src="./src/assets/assets/istockphoto-1078112608-612x612.jpg" alt="" />
            </div>
            <div>
            <h2>About the Project</h2>
            <p>Our project addresses the critical need for accurate machine translation in Indian languages. With a rich linguistic heritage and hundreds of spoken languages in India, the absence of reliable translation tools has created significant barriers to communication, education, and research. By tackling this challenge, our initiative aims to bridge these gaps and promote inclusivity.</p>
            <p>Our work fosters education by enabling students and educators to access diverse resources, research materials, and educational content that were previously inaccessible due to language limitations. It also facilitates collaboration among researchers and professionals across regions, empowering the exchange of ideas and innovations.</p>
            <p>Beyond education and research, our project contributes to preserving and promoting India's regional languages. By ensuring these languages are represented accurately in translations, we create opportunities for greater cultural awareness and unity.</p>
            <p>Ultimately, our goal is to make language a unifying force—enhancing access to knowledge, fostering collaboration, and empowering individuals from diverse linguistic backgrounds. Let me know if you'd like to add or fine-tune anything further!
            </p>
            </div>
        </div>
    </section>
    </div>
    <div className='selectn'>
    <section class="exhibit" id="exhibit">
        <h2>Easy Translate</h2>
        <div class="photo-frame">
            <img src="./src/assets/assets/Gemini_Generated_Image_glaynuglaynuglay.jpeg" alt="" />
        <div class="photo-caption">
                
            <div className='buttonn'>
                <a href="http://localhost:5173/texttranslater">
                <button class="button-30" role="button">Translate</button>
                </a>
            </div>
            </div>
        </div>
    </section>
    </div>


    <div className='aboutusn'>
    <section class="about-us" id="about-us">
        <h2>About Us</h2>
        <div class="contact-columns">
        <div class="contact-info">
                <p>Kaviya.N</p>
                <p>nkaviya419@email.com </p>
            </div>
            <div class="contact-info">
                <p>Sivamathu T</p>
                <p>sivamathu2005@gmail.com</p>
            </div>
            <div class="contact-info">
                <p>Rakshitha B</p>
                <p>rakshithabarani2004@gmail.com </p>
            </div>
            <div class="contact-info">
                <p>Thirumurugan K</p>
                <p>thiruxme@gmail.com</p>
            </div>
           
        </div>
    </section>
    </div>
        </div>
    );
};

export default HomePage;
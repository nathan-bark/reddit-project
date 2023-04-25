import './Hero.css'

import SignInRegisterButton from "../Buttons/SignInRegisterButton";

const Hero = () => {
    return (
        <div className="hero-container">
            <div className="hero-field">
                <h1>R-Lite</h1>
                <h2>Search and read your favourite subreddits with out the extra fluff!</h2>
                <h3>Sign in or Register below, or use the search bar above to start immediately!</h3>
                <SignInRegisterButton />
            </div>
        </div>
    )
}

export default Hero;
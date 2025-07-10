import { Link } from "react-router-dom"
import BlurText from "./BlurText"

const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

const NavBar = () => {
    return (
        <header>
            <div className="container">
                <Link to="/">
                <h1>
                <BlurText
                    text="Hulk Smash"
                    delay={150}
                    animateBy="words"
                    direction="top"
                    onAnimationComplete={handleAnimationComplete}
                    className="text-2xl mb-8"
                />
</h1>
                </Link>
            </div>
        </header>
    )
}

export default NavBar
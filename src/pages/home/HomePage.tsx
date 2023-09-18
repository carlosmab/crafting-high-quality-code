
import { useState, useEffect } from 'react';
import Typewriter from "@features/common/components/typewriter/Typewriter";

import "@pages/home/home-page.sass";

function HomePage() {
  const [showButton, setShowButton] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowButton(true);
    }, 10000);
    setTimeout(() => {
      setShowText(true);
    }, 2000)
  }, []);

  return (
    <div
      className="
        flex
        justify-center 
        items-center 
        h-screen
        bg-blue-dark
      "
      data-testid="home-page"
    >
      <div className="text-center w-1/3">
        <h1 
          className="
            text-blue 
            text-4xl 
            font-bold 
            mb-4
            animate-breath
          "
        >
          Welcome!
        </h1>
        {showText && (<Typewriter 
          className="text-xl mx-auto my-2 mb-6 text-blue-medium"
          text="I'm CarlosM, a web developer with a passion for crafting high-quality
          code. Join me on this journey of learning and exploration in the world
          of software development."
          delay={40}
        />)}
        {showButton && (
          <a
            href="/quality-attributes"
            className="
              bg-orange-dark 
              hover:bg-blue-medium 
              text-white 
              py-2 
              px-4 
              rounded-md 
              inline-block
              animate-pop
            "
          >
            Start the Journey
          </a>
        )}
      </div>
    </div>
  );
}

export default HomePage;

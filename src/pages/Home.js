import React, { useEffect, useState } from "react";
import "./HomePage.css"; // Import your CSS file
import Picks from "../components/Picks";
import { useInView } from 'react-intersection-observer';

const HomePage = () => {

  const [ref1, inView1] = useInView({
    triggerOnce: false, // Set triggerOnce to false
    threshold: 0.5,
  });

  const [ref2, inView2] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  const [ref3, inView3] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  const resetAnimation = () => {
    // Remove the 'show' class when the elements are out of view
    if (!inView1) {
      ref1.current.classList.remove('show');
    }

    if (!inView2) {
      ref2.current.classList.remove('show');
    }

    if (!inView3) {
      ref3.current.classList.remove('show');
    }
  };

  const Typewriter = ({ text, delay }) => {
    const [currentText, setCurrentText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      if (currentIndex < text.length) {
        const timeout = setTimeout(() => {
          setCurrentText((prevText) => prevText + text[currentIndex]);
          setCurrentIndex((prevIndex) => prevIndex + 1);
        }, delay);

        return () => clearTimeout(timeout);
      }
    }, [currentIndex, delay, text]);
    return <span>{currentText}</span>;
  };

  return (
    <>
      <div className="background">
        <img src="https://rakesh-46.b-cdn.net/outer-space.jpg" alt="Delivery Background"></img>
        <div className="content">
          <h1>
            <Typewriter text="Welcome to Stellar Sprint" delay={50} />
          </h1>
          <p>
            <Typewriter
              text="Fast and reliable delivery across galaxies..."
              delay={50}
            />
          </p>
        </div>
      </div>

      <div className="image-section" onScroll={resetAnimation}>
      <div ref={ref1} className={`image-info left-to-right ${inView1 ? 'show' : ''}`}>
        <img src="https://rakesh-46.b-cdn.net/rocket.png" alt="" />
        <div className="info-text">
          <h2>Our Fast Delivery</h2>
          <p>
            Forget standard shipping lanes and interplanetary delays. At Our Fast Delivery, we deliver your supplies where no courier has gone before - straight to your off-world doorstep, faster than ever thought possible.
          </p>
        </div>
      </div>

      <div ref={ref2} className={`image-info right-to-left ${inView2 ? 'show' : ''}`}>
        <img src="https://rakesh-46.b-cdn.net/safe_secure.jpg" alt="" />
        <div className="info-text">
          <h2>Safe and Secure</h2>
          <p>
            Your packages are in good hands. At Our Fast Delivery, we understand the importance of protecting your supplies during their interstellar journey. That's why we've implemented the most advanced security measures in the galaxy.
          </p>
        </div>
      </div>
      
      <div ref={ref3} className={`image-info left-to-right ${inView3 ? 'show' : ''}`}>
        <img src="https://rakesh-46.b-cdn.net/global_reach.jpg" alt="" />
        <div className="info-text">
          <h2>Global Reach</h2>
          <p>Our services go beyond galaxies. With a network of delivery partners, we can reach even the most remote locations. No destination is too far for Our Fast Delivery.
          </p>
        </div>
      </div>

        <div className="topPicks"></div>
        <Picks />
    </div>
    </>
  );
};

export default HomePage;

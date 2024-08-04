import { useState, useEffect } from "react";
import styles from "./Slider.module.sass";
import classNames from "classnames";

function Slider({ imageUrls }) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(true);
  const [delay, setDelay] = useState("1000");

  const prevSlide = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(
        (currentSlideIndex) =>
          (currentSlideIndex - 1 + imageUrls.length) % imageUrls.length
      );
    }
  };

  const nextSlide = () => {
    setCurrentSlideIndex(
      (currentSlideIndex) => (currentSlideIndex + 1) % imageUrls.length
    );
  };

  const handlePlayStop = () => {
    if (isPaused) {
      setIsPaused(false);
    } else {
      setIsPaused(true);
    }
  };

  useEffect(() => {
    let id = null;
    if (!isPaused) {
      id = setTimeout(nextSlide, delay);
    }
    return () => {
      clearInterval(id);
    };
  });

  return (
    <div className={styles.slideContainer}>
      <h1 className={styles.slideHeader}>Animal Images</h1>
      <img
        className={styles.imgSlides}
        src={imageUrls[currentSlideIndex]}
        alt="animals"
      />
      <div className={styles.btnSlides}>
        <button onClick={prevSlide} disabled={currentSlideIndex === 0}>
          {"<"}
        </button>
        <button onClick={handlePlayStop}>{isPaused ? "Play" : "Stop"}</button>
        <button
          onClick={nextSlide}
          disabled={currentSlideIndex === imageUrls.length - 1}
        >
          {">"}
        </button>
      </div>
      Timer delay, ms:{" "}
      <input
        type="text"
        placeholder="Enter the slide transition delay"
        onChange={(e) => {
          setDelay(e.target.value);
        }}
      />
    </div>
  );
}

export default Slider;

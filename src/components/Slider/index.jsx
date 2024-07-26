import { useState, useEffect } from "react";
import styles from "./Slider.module.sass";

function Slider({ imageUrls }) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const prevSlide = () => {
    if (currentSlideIndex > 1) {
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
  console.log(currentSlideIndex);

  return (
    <div className={styles.slideContainer}>
      <h1 className={styles.slideHeader}>Top Images</h1>
      <img
        className={styles.imgSlides}
        src={imageUrls[currentSlideIndex]}
        alt={`${currentSlideIndex + 1}`}
      />
      <div className={styles.btnSlides}>
        <button onClick={prevSlide} disabled={currentSlideIndex === 1}>
          {"<"}
        </button>
        <span>{currentSlideIndex}</span>
        <button
          onClick={nextSlide}
          disabled={currentSlideIndex === imageUrls.length - 1}
        >
          {">"}
        </button>
      </div>
    </div>
  );
}

export default Slider;

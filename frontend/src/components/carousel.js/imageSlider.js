import React, { useState } from "react";
import { slideData } from "./slideData";
import "./Carousel.css";
import right from "./noun_Arrow_1807380.svg";
import left from "./noun_Arrow_704402.svg";
function ImageSlider() {
	const [current, setCurrent] = useState(0);
	const length = slideData.length;
	if (!Array.isArray(slideData) || length <= 0) {
		return null;
	}
	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1);
	};
	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1);
	};

	return (
		<section className="slider">
			{slideData.map((slide, index) => {
				return (
					<div
						className={index === current ? "slide active" : "slide"}
						key={index}
					>
						{index === current && (
							<div className="slide-content">
								{/* <FaArrowAltCircleLeft
									className="right-arrow"
									onClick={prevSlide}
								/> */}

								<img src={`${slide.image}`} alt="Images" className="Image" />
								{/* <FaArrowCircleRight
									className="left-arrow"
									onClick={nextSlide}
								/> */}
								<h3>{slide.title}</h3>

								<img src={right} className="left-arrow" onClick={nextSlide} />
							</div>
						)}
					</div>
				);
			})}
		</section>
	);
}

export default ImageSlider;

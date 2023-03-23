import React, { useState } from "react";

const Rating = () => {
	const [rating, setRating] = useState(0);

	const handleRating = value => {
		setRating(value);
	};

	return (
		<div className="flex items-center">
			{[...Array(5)].map((_, i) => {
				const ratingValue = i + 1;
				return (
					<label key={i}>
						<input
							type="radio"
							name="rating"
							value={ratingValue}
							onClick={() => handleRating(ratingValue)}
						/>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							viewBox="0 0 24 24"
							fill={ratingValue <= rating ? "#FBBF24" : "none"}
							stroke="#9CA3AF"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							className="feather feather-star mx-1"
						>
							<path d="M12 2 L15.09 8.45 L22 9.27 L17 14.17 L18.18 21 L12 17.77 L5.82 21 L7 14.17 L2 9.27 L8.91 8.45 Z"></path>
						</svg>
					</label>
				);
			})}
		</div>
	);
};

export default Rating;

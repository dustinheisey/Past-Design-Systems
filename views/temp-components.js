import React from "react";

const Card = () => {
	return (
		<div className="bg-white rounded-lg overflow-hidden shadow-lg">
			<img
				src="https://source.unsplash.com/random/800x600"
				alt="Random image from Unsplash"
				className="w-full h-64 object-cover"
			/>
			<div className="p-4">
				<div className="text-gray-500 font-semibold text-sm uppercase tracking-wide">Category</div>
				<h2 className="text-gray-900 font-semibold text-xl leading-tight mt-2">Headline</h2>
				<p className="text-gray-600 my-2">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae justo euismod,
					imperdiet elit ac, ultrices turpis. Nam vitae arcu pulvinar, sagittis quam vel, interdum
					dolor.
				</p>
			</div>
		</div>
	);
};

export default Card;

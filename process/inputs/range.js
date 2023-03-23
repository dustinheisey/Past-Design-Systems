import React, { useState } from "react";

const RangeSlider = () => {
	const [value, setValue] = useState(50);

	const handleChange = event => {
		setValue(event.target.value);
	};

	return (
		<div className="flex flex-col items-center justify-center h-screen">
			<input
				type="range"
				min="0"
				max="100"
				value={value}
				onChange={handleChange}
				className="w-64 h-3 appearance-none rounded-full bg-gray-300 outline-none"
			/>
			<div className="mt-6 font-bold text-xl">{value}</div>
		</div>
	);
};

export default RangeSlider;

// Small Button Spacing - 36px
// Medium Button Spacing - 24px
// Large Button Spacing - 12px

import React from "react";

const ButtonGroup = () => {
	return (
		<div className="inline-flex rounded-md shadow">
			<button className="px-4 py-2 bg-blue-500 text-white rounded-l-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue focus:border-blue-700 active:bg-blue-700">
				Button 1
			</button>
			<button className="px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue focus:border-blue-700 active:bg-blue-700">
				Button 2
			</button>
			<button className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue focus:border-blue-700 active:bg-blue-700">
				Button 3
			</button>
		</div>
	);
};

export default ButtonGroup;
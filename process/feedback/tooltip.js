import React, { useState } from "react";

const Tooltip = ({ text, children }) => {
	const [showTooltip, setShowTooltip] = useState(false);

	return (
		<div className="relative">
			{showTooltip && (
				<div className="absolute bottom-full left-1/2 transform -translate-x-1/2 p-2 bg-gray-800 text-white text-sm rounded-lg">
					{text}
					<svg
						className="absolute text-gray-800 h-2 w-full left-0 top-full"
						x="0px"
						y="0px"
						viewBox="0 0 255 255"
						xmlSpace="preserve"
					>
						<polygon className="fill-current" points="0,0 127.5,127.5 255,0" />
					</svg>
				</div>
			)}
			<div
				className="inline-block"
				onMouseEnter={() => setShowTooltip(true)}
				onMouseLeave={() => setShowTooltip(false)}
			>
				{children}
			</div>
		</div>
	);
};

export default Tooltip;
